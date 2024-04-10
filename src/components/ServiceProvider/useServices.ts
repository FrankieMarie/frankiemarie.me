import { useContext } from "react";
import { ServiceProviderContext } from "./ServiceProvider";
import { ServiceCollection } from "src/services";

export const useServices = (): ServiceCollection => {
  const services = useContext(ServiceProviderContext);

  if (!services) {
    throw new Error("No services were found...");
  }

  return services;
};
