import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../Styles/banner";

export default function Banner() {

   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('md'));

   return (
      <BannerContainer>
         <BannerImage src="/Images/Banner/banner.png"></BannerImage>
         <BannerContent>
            <BannerTitle variant="h2">
               New Bags
            </BannerTitle>
            <BannerDescription variant="subtitle">
               lorem ipsum hando over en adsjaskdnasjkdb asd askdj asdasid ajsdi asdj
            </BannerDescription>
            <BannerShopButton color="primary">Shop Now</BannerShopButton>
         </BannerContent>
      </BannerContainer>
   )
}
