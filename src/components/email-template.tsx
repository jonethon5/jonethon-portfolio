import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div>
    <h1>Nova mensagem de {fullName}</h1>
    <p>
      E-mail: <a href={`mailto:${email}`}>{email}</a>
    </p>
    <blockquote style={{ whiteSpace: "pre-wrap" }}>{message}</blockquote>
  </div>
);
