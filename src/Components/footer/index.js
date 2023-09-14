import { Button, Grid, List, ListItemText, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { FooterTitle, SubscribeTextField } from '../../Styles/footer'
import { Colors } from '../../Styles/Themes';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send"

export default function Footer() {
   return (
      <Box sx={
         {
            background: Colors.shaft,
            color: Colors.white,
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: "12px", md: "14px" }
         }
      }>
         <Grid container spacing={2} justifyContent="center">
            <Grid item md={6} lg={4}>
               <FooterTitle variant='body1' >About Us</FooterTitle>
               <Typography variant='caption2'>
                  lorem ipson sadkj ijasd sadu asmdnidas dnmdas damndas dnbdasndn
                  asdnamsdn aksdnasm mandmas di askdn snd sandb ew qwmnasd b vdnabdas d
               </Typography>
               <Box sx={
                  {
                     mt: 4,
                     color: Colors.dove_gray,
                  }
               }>
                  <FacebookIcon sx={{ mr: 1 }} />
                  <TwitterIcon sx={{ mr: 1 }} />
                  <InstagramIcon />
               </Box>
            </Grid>
            <Grid item md={6} lg={2}>
               <FooterTitle variant='body1'>Information</FooterTitle>
               <List>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">About Us</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">Order Tracking</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">Privacy &anp; Policy</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">Terms &anp; Conditions</Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={6} lg={2}>
               <FooterTitle variant='body1'>My Account</FooterTitle>
               <List>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">Login</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">My Cart</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">My Account</Typography>
                  </ListItemText>
                  <ListItemText>
                     <Typography lineHeight={2} variant="caption2">Wishlist</Typography>
                  </ListItemText>
               </List>
            </Grid>
            <Grid item md={6} lg={4}>
               <Stack>
                  <SubscribeTextField color="primary" label="Email Address" variant='standard' />
                  <Button
                     startIcon={<SendIcon sx={{ color: Colors.white }} />}
                     sx={{ mt: 4, mb: 4 }}
                     variant="contained"
                  >
                     Subscribe
                  </Button>
               </Stack>

            </Grid>
         </Grid>
      </Box>
   )
}
