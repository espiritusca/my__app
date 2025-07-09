import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

import Header from "../partials/Header/Header"

// JSS
const StyledContainer = styled(Container) ({
    padding: '15px 0',
})

const Default = ({ children }) => {
    return (
        
        <>
            <Header />
            <StyledContainer>
             {children}
            </StyledContainer>
        </>
    )
}

export default Default