import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../Styles/product'
import ProductMeta from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../Hooks/useDialogModal';
import ProductDetail from '../productdetail';

export default function SingleProductDesktop({ product, matches }) {

   const [showOptions, setShowOptions] = useState(false);

   const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

   const handleMouseEnter = () => {
      setShowOptions(true);
   }

   const handleMouseLeave = () => {
      setShowOptions(false);
   }

   return (

      <>
         <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
            <ProductImage src={product.image} />
            {
               showOptions && <ProductAddToCart show={showOptions} variant="outlined">Add to Cart</ProductAddToCart>
            }
            <ProductFavButton></ProductFavButton>

            <ProductActionsWrapper show={showOptions}>
               <Stack direction="column">
                  <ProductActionButton isfav={1}>
                     <FavoriteIcon />
                  </ProductActionButton>
                  <ProductActionButton isfav={1}>
                     <ShareIcon color='primary' />
                  </ProductActionButton>
                  <ProductActionButton onClick={() => showProductDetailDialog()}>
                     <FitScreenIcon color='primary' />
                  </ProductActionButton>
               </Stack>
            </ProductActionsWrapper>
         </Product>
         <ProductMeta product={product} matches={matches} />
         <ProductDetailDialog product={product} />
      </>
   );
}
