import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../Styles/appbar";
import SearchIcon from '@mui/icons-material/Search';
import Actions from "./Actions.js";
import { useUIContext } from "../../Context/UI";

export default function AppbarDesktop({ matches }) {

   const { setShowSearchBox } = useUIContext();

   return (
      <AppbarContainer>
         <AppbarHeader>My Bags</AppbarHeader>
         <MyList type='row'>
            <ListItemText primary='Home' />
            <ListItemText primary='Categories' />
            <ListItemText primary='Products' />
            <ListItemText primary='Contact Us' />
            <ListItemButton>
               <ListItemIcon>
                  <SearchIcon onClick={() => setShowSearchBox(true)} />
               </ListItemIcon>
            </ListItemButton>
         </MyList>
         <Actions matches={matches} />
      </AppbarContainer>
   );
}