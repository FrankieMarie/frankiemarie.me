import { useMutation } from "@tanstack/react-query";
import { useServices } from "src/components/ServiceProvider";
import { ContactFormData } from "./types";

export const useSubmitContact = () => {
  const { axiosInstance } = useServices();

  const submitContactForm = async (payload: ContactFormData) => {
    return axiosInstance.post(
      "http://localhost:8888/contact",
      JSON.stringify(payload)
    );
  };

  return useMutation({
    mutationKey: ["submitContactForm"],
    mutationFn: (data: ContactFormData) => submitContactForm(data),
  });
};
