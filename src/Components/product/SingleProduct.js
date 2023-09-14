import { Stack } from '@mui/system'
import React from 'react'
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../Styles/product'
import ProductMeta from './ProductMeta';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FitScreenIcon from '@mui/icons-material/FitScreen';
import useDialogModal from '../../Hooks/useDialogModal';
import ProductDetail from '../productdetail';

export default function SingleProduct({ product, matches }) {

   const [ProductDetailDialog, showProductDetailDialog, closeProductDetailDialog] = useDialogModal(ProductDetail);

   return (
      <>
         <Product>
            <ProductImage src={product.image} />
            <ProductMeta product={product} matches={matches} />
            <ProductActionsWrapper show={1}>
               <Stack direction="row">
                  <ProductFavButton isfav={1}>
                     <FavoriteIcon />
                  </ProductFavButton>
                  <ProductActionButton isfav={1}>
                     <ShareIcon color='primary' />
                  </ProductActionButton>
                  <ProductActionButton onClick={() => showProductDetailDialog()} >
                     <FitScreenIcon color='primary' />
                  </ProductActionButton>
               </Stack>
            </ProductActionsWrapper>
         </Product>
         <ProductAddToCart variant='contained'>Add to Cart</ProductAddToCart>
         <ProductDetailDialog product={product} />
      </>
   )
}
