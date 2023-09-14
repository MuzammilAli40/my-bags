import { Button, Dialog, DialogContent, DialogTitle, Slide, Typography, useMediaQuery } from "@mui/material"
import { Box } from "@mui/system"
import theme, { Colors } from "../../Styles/Themes"
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Product, ProductImage } from "../../Styles/product";
import InDec from "../UI/indec";
import { Facebook, Favorite, Instagram, Twitter } from "@mui/icons-material";


function SlideTransition(props) {
   return <Slide direction="down" {...props} />
}

const ProductDetailWrapper = styled(Box)(() => ({
   display: "flex",
   padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
   display: "flex",
   flexDirection: "column",
   maxWidth: 500,
   lineHeight: 1.5,
}))


export default function ProductDetail({ open, onClose, product }) {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <Dialog
         TransitionComponent={SlideTransition}
         variant="permanent"
         open={open}
         fullScreen
      >
         <DialogTitle sx={
            {
               background: Colors.secondary,
            }
         }>
            <Box
               display="flex"
               alignItems="center"
               justifyContent={"space-between"}
            >
               Product title
               <IconButton onClick={onClose}>
                  <CloseIcon />
               </IconButton>
            </Box>
         </DialogTitle>
         <DialogContent>
            <ProductDetailWrapper flexDirection={matches ? 'column' : 'row'}>
               <Product sx={{ mr: 4 }}>
                  <ProductImage src={product.image} />
               </Product>
               <ProductDetailInfoWrapper>
                  <Typography variant="subtitle1">SKU 123</Typography>
                  <Typography variant="subtitle1">Availability: 5 in stock</Typography>
                  <Typography sx={{ lineHeight: 2 }} variant="h4">
                     {product.name}
                  </Typography>
                  <Typography variant="body">
                     {product.description}
                     {product.description}
                     {product.description}
                     {product.description}
                  </Typography>
                  <Box sx={{ mt: 4 }} display="flex" alignItems={"center"} justifyContent="space-between">
                     <InDec />
                     <Button variant="contained">Add to Cart</Button>
                  </Box>
                  <Box
                     display={"flex"}
                     alignItems="center"
                     sx={{ mt: 4, color: Colors.light }}>
                     <Favorite sx={{ mr: 2 }} />
                     Add to Wishlist
                  </Box>
                  <Box sx={{
                     mt: 4,
                     color: Colors.light
                  }}>
                     <Facebook />
                     <Instagram sx={{ pl: theme.spacing(4) }} />
                     <Twitter sx={{ pl: theme.spacing(4) }} />
                  </Box>
               </ProductDetailInfoWrapper>
            </ProductDetailWrapper>
         </DialogContent>
      </Dialog>
   )
}
