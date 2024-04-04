import { ContactFormData } from "./types";

export const useSubmitContact = () => {
  const submit = (payload: ContactFormData) => {
    console.log("PAYLOAD", payload);
  };

  return { submit };
};
