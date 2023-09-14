import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/Themes/index.js'
import Appbar from './Components/appbar/index.js'
import { Container } from '@mui/system';
import Banner from './Components/banner/index.js';
import Promotions from './Components/promotions/index.js';
import Product from './Components/product/index.js';
import { Box, Typography } from '@mui/material';
import Footer from './Components/footer/index.js';
import AppDrawer from './Components/drawer/index.js';
import { UIProvider } from './Context/UI/index.js';
import SearchBox from './Components/search/index.js';
import ProductDetail from './Components/productdetail/index.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth='xl'
        sx={{
          background: '#fff',
        }}
      >
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={'flex'} justifyContent={'center'} sx={{ p: 4 }}>
            <Typography variant='h4'>Our Products</Typography>
          </Box>
          <Product />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider >
  );
}

export default App;
