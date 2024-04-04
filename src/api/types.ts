export const NAME = "name";
export const EMAIL = "email";
export const SUBJECT = "subject";
export const MESSAGE = "message";

export interface ContactFormData {
  name: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  subject: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}
