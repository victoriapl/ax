export const TITLE = "SERVICES";
export const NAV = [
  { title: "Home", url: "/" },
  { title: "Servicios", url: "/services" },
  { title: "Quien soy", url: "/about" },
  { title: "Contacto", url: "/contact" },
];
export const SERVICES = [
  "/consulting",
  "/nutrition",
  "/art",
  "/development",
  "/sport",
];

export const SERVICE_NAV = [
  { title: "Home", url: "service-home" },
  { title: "Servicio", url: "service-description" },
  { title: "Casos de éxito", url: "service-success" },
  { title: "Contacto", url: "service-contact" },
  { title: "Equipo", url: "service-team" },
];

export const NAV_SERVICES = [
  { title: "AX | CONSULTING", url: "/consulting" },
  { title: "AX | NUTRITION", url: "/nutricion" },
  { title: "AX | DEVELOPMENT", url: "/development" },
  { title: "AX | SPORT", url: "/sport" },
  { title: "AX | ART", url: "/art" },
];

export const CUSTOM_TITLE = ({ text, style, imgWidth }) => (
  <span style={{ display: "flex", alignItems: "center" }}>
    <img
      src={AX_LETTERS}
      width={imgWidth}
      style={{ marginRight: "5px" }}
      alt={"AX"}
    />{" "}
    <span style={style}>{text}</span>
  </span>
);

//ICONS
export const LOGO = "/icons/logoServices.svg";
export const FOOTER_LOGO = "icons/logoBlancoGrueso.svg";
export const CONSULTING_LOGO = "/icons/logoConsultingLogo.svg";
export const HAMBURGER_MENU_ICON = "/icons/menu.png";
export const AX_LETTERS = "/icons/axBlanco.svg";
export const WHITE_ARROW = "/icons/arrows/downWhiteArrow.png";
