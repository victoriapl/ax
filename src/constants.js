export const TITLE = "AX | SERVICES";
export const NAV = [
  { title: "Home", url: "/" },
  { title: "Servicios", url: "/services" },
  { title: "Quien soy", url: "/about" },
  { title: "Contacto", url: "/contact" },
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
