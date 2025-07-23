import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

import Header from "../partials/Header/Header"
import useAuth from '../state/auth'

// JSS
const StyledContainer = styled(Container) ({
    padding: '15px 0',
})

const Default = () => {

    const { user } = useAuth()
 
    return (
        
        <>
            <Header user={user} />
            <StyledContainer maxWidth='xl'>
                <Outlet />
            </StyledContainer>
        </>
    )
}

export default Default