import { IconButton } from "@mui/material";
import { AppbarContainer, AppbarHeader } from "../../Styles/appbar";
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Actions from "./Actions";
import { useUIContext } from "../../Context/UI";


export default function AppbarMobile({ matches }) {

   const { setDrawerOpen, setShowSearchBox } = useUIContext();

   return (
      <AppbarContainer>
         <IconButton onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
         </IconButton>
         <AppbarHeader textAlign={'center'} variant='h4'>
            My Bags
         </AppbarHeader>
         <IconButton onClick={() => setShowSearchBox(true)}>
            <SearchIcon />
         </IconButton>
         <Actions matches={matches} />
      </AppbarContainer>
   );
}