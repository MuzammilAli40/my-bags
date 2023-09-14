import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../Themes";


export const PromotionContainer = styled(Box)(({ theme }) => ({

   [theme.breakpoints.up('md')]: {
      padding: '40px 0px 40px 0px',
   },

   display: 'flex',
   justifyContent: 'center',
   padding: '20px 0px 20px 0px',
   overflow: 'hidden',
   background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
   [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
      color: Colors.white,
   },

   fontFamily: '"Montez", "cursive',
   color: Colors.white,
   fontSize: '3rem',


}))