import { services } from "./data.json";

export const getServiceData = serviceUrl => {
  return services.find(service => service.url === serviceUrl);
};
