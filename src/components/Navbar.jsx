import { useState } from 'react'
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import{
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import { Link } from 'react-router-dom';
const Navbar = () => {

  const[openMenu, setOpenMenu] = useState(false)
  const menuOptions =[
    {
        text: "Home",
        icon: <HomeIcon />,
        path: '/home'
    },
    {
        text: "About",
        icon: <InfoIcon />,
        path: '/about'
    },
    {
        text: "Testimonials",
        icon: <CommentRoundedIcon />,
        path: '/testimonials'
    },
    {
        text: "Contact",
        icon: <PhoneRoundedIcon />,
        path: '/contact'
    },
    {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon />,
        path: '/cart'
    }
  ]

  
  return (
    <nav>
        <div className="nav-logo-container">
            <img src="Logo.svg" alt="Logo" />
        </div>

        <div className="navbar-links-container">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonial</a>
            <a href="">Contact</a>
            <a href="">
                <BsCart2 className="navbar-cart-icon" />
            </a>
            <button className="primary-button">Bookings Now</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={()=>setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={()=>setOpenMenu(false)}
            anchor="right">
            <Box
                sx={{width:250}}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={()=> setOpenMenu(false)}>
                    <List>
                        {menuOptions.map((item) =>(
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton >
                                    <ListItemText>{item.icon}</ListItemText>
                                    <ListItemText primary={item.text}></ListItemText>
                                </ListItemButton>
                            </ListItem>

                        ))}
                    </List>
            </Box>
        </Drawer>
        


      
    </nav>
  )
}

export default Navbar
