export const TITLE = "AX | SERVICES";
export const NAV = [
  { title: "Home", url: "/" },
  { title: "Servicios", url: "/services" },
  { title: "Quienes somos", url: "/nosotros" },
  { title: "Contacto", url: "/contacto" },
];

export const CUSTOM_TITLE = ({ text, style }) => (
  <span stlye={{ color: "white" }}>
    AX | <span style={style}>{text}</span>
  </span>
);

//ICONS
export const LOGO = "/icons/logoServicesColor.svg";
export const CONSULTING_LOGO = "/icons/logoConsultingLogo.svg";
export const HAMBURGER_MENU_ICON = "/icons/menu.png";
export const CONSULTING_IMAGE = "/icons/CONSULTING.svg";
export const DEVELOPEMENT_IMAGE = "/icons/DEVELOPMEN.svg";
export const NUTRITUION_IMAGE = "/icons/NUTRITION.svg";
export const SPORT_IMAGE = "/icons/SPORT.svg";
export const ART_IMAGE = "/icons/ART.svg";
