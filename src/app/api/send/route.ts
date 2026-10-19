import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config";
import { Resend } from "resend";
import { z } from "zod";


const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

const Email = z.object({
  fullName: z.string().min(2, "Nome inválido."),
  email: z.string().email({ message: "E-mail inválido." }),
  message: z.string().min(10, "Mensagem muito curta."),
});
export async function POST(req: Request) {
  // Created per request so the build does not require RESEND_API_KEY.
  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: "O envio de e-mail não está configurado." }, { status: 503 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";
    if (isRateLimited(ip)) {
      return Response.json({ error: "Muitas tentativas. Tente de novo em instantes." }, { status: 429 });
    }

    const body = await req.json();
    const {
      success: zodSuccess,
      data: zodData,
      error: zodError,
    } = Email.safeParse(body);
    if (!zodSuccess)
      return Response.json({ error: zodError?.message }, { status: 400 });

    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfólio <onboarding@resend.dev>",
      to: [config.email],
      subject: `Contato pelo portfólio: ${zodData.fullName}`,
      replyTo: zodData.email,
      react: EmailTemplate({
        fullName: zodData.fullName,
        email: zodData.email,
        message: zodData.message,
      }) as React.ReactElement,
    });

    if (resendError) {
      return Response.json({ error: "Falha ao enviar o e-mail." }, { status: 500 });
    }

    return Response.json(resendData);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
