import { SERVICES } from "./constants";

export const getServiceData = serviceUrl => {
  return SERVICES.find(service => service.url === serviceUrl);
};
