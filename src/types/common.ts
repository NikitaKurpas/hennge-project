export type Email = {
  from: string;
  to: string[];
  cc?: string[];
  bcc?: string[];
  timestamp: Date;
  subject: string;
  body: string;
  attachments?: { name: string; uri: string }[];
};
