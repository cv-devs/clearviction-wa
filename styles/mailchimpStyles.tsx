import { SxProps } from "@mui/system";
import { Theme } from "@mui/material";
import theme from "./themes/theme";

export const mailchimpStyles: Record<string, SxProps<Theme>> = {
  mcEmbedSignup: {
    background: "#2F3554",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: { xs: "32px 24px", sm: "40px 24px" },
    width: { xs: "343px", sm: "1040px" },
    height:{sm:"421px",md:"343"},
    maxWidth: "100%",
    borderRadius: "2px",
    boxSizing: "border-box",
    alignSelf: "center",
    flexGrow: 0,
    flex: "none",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "14px",
    marginTop: "72px",
    marginBottom: "72px",
    gap:'32px'
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    padding: "16px",
    boxSizing: "border-box",
    width: "100%",
  },
  important: {
    display: "flex",
    flexDirection: "column",
    alignItems: {xs:"flex-start",sm:"center"},
    padding: 0,
    flex: "none",
    order: 0,
    gap:  "12px",
    alignSelf: "center",
    flexGrow: 0,
    marginBottom: "32px",
  },
  importantH5: {
    fontFamily: "theme.h5",
    fontStyle: "normal",
     fontWeight: 700,
    fontSize: {xs: "24px", sm: "26px" },
    lineHeight: {xs: "31px", sm: "32px" },
    textAlign: {xs:"left",sm:"center"},
    letterSpacing:{xs:"0.15%"},
    color: "white",
    margin: 0,
    order: 1,
  },
  importantP: {
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: { xs: "17px", sm: "20px" },
    lineHeight: { xs: "22px", sm: "28px" },
    textAlign: {xs:"left",sm:"center"},
    letterSpacing: {xs:"0.15%",sm:"0.5px"},
    color: "#A7b5cc",
    alignSelf: "stretch",
    flexGrow: 0,
    order: 2,
    margin: 0,
  },
  componentForm: {
    width: { xs: "295", sm: "411px" },
    height: { xs: "185px", sm: "160px" },
    maxWidth: "100%",
    background: "white",
    marginBottom: "32px",
  },
  mc_embed_signup_scroll: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10px",
    paddingRight: "10px",
    marginBottom: { xs: "16px", sm: "32px" },
  },
  indicatesRequired: {
    fontSize: { xs: "8px", sm: "12px" },
    color: "#000",
    marginRight: "10px",
  },
  asterik: {
    color: "red",
  },
  mcFieldGroup: {
    fontSize: { xs: "14px", sm: "12px" },
    display: "block",
    float: "left",
    clear: "none",
    marginRight: "10px",
    padding: 0,
  },
  emailTextField: {
    marginBottom: "4px",
    paddingRight: { sm: "10px" },
    paddingLeft: { sm: "10px" },
    width: "100%",
  },
  optionalParent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  centerOrderElement: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: -1,
  },
  mcEmbeddedSubscribe: {
    backgroundColor: "gray",
    color: "white",
    width: { xs: "80px", sm: "100px" },
    height: "25px",
    fontSize: { xs: "10px", sm: "12px" },
  },

  avatarMailchimp: {
    maxWidth: {xs: "95px", sm: "125px",  },
    maxHeight: { xs: "95px", sm:"125px" },
    borderRadius: 0,
    width: "auto",
    height: "auto",
  },
};
