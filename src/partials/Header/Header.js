import { useState } from 'react'
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemButton,
    ListItemText,
} from '@mui/material'

import { useNavigate } from 'react-router-dom'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import PersonAdd from '@mui/icons-material/PersonAdd'
import PersonIcon from '@mui/icons-material/Person'

import HeaderTitle from './Header.style' 

const Header = () => {
  const navigate = useNavigate()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    navigate(route)
    handleToggleMenu()
  }

    return (

      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="secondary"
              aria-label="menu"
              onClick={() => handleToggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <HeaderTitle variant="h6" component="div">
              My App
            </HeaderTitle>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
          <List>
            <ListItem sx={{ display: 'block' }}>

              <ListItemButton onClick={() => handleMenuClick('/')}>

                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>

                <ListItemText>Início</ListItemText>
                
              </ListItemButton>

              <ListItemButton onClick={() => handleMenuClick('/customers')}>

                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>

                <ListItemText>Lista de Clientes</ListItemText>

              </ListItemButton>

              <ListItemButton onClick={() => handleMenuClick('/customers/add')}>

                <ListItemIcon>
                  <PersonAdd />
                </ListItemIcon>

                <ListItemText>Cadastro de Clientes</ListItemText>

              </ListItemButton>

            </ListItem>
          </List>
        </Drawer>

      </>

    )
}

export default Header