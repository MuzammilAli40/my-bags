import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import theme, { Colors } from "../Themes"

export const SearchBoxContainer = styled(Box)(({ theme }) => ({
   position: "absolute",
   top: 0,
   left: 0,
   width: "100%",
   height: "100vh",
   background: Colors.primary,
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   zIndex: 99999,
   opacity: 0.9,
}));

export const SearchField = styled(TextField)(() => ({
   ".MuiInputLabel-root": {
      color: Colors.secondary,
   },

   ".MuiInput-root": {
      fontSize: "1rem",
      [theme.breakpoints.up("md")]: {
         fontSize: "2rem",
      },
      color: Colors.secondary,
   },

   "MuiInput-root::before": {
      borderBottom: `1px Solid ${Colors.secondary}`,
   },

   padding: "0 0 0 40px",
   width: "90%"
}));