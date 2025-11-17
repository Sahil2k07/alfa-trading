type EmailPayload = {
  email: string;
  html: string;
  subject: string;
};

type ContactFormPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  sector?: string;
  message: string;
};
