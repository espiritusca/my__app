import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

import HeaderTitle from './Header.style'

const Header = () => {
    return (

        <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <HeaderTitle variant="h6" component="div">
            My App
          </HeaderTitle>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    )
}

export default Header