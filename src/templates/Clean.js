import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

// JSS
const StyledContainer = styled(Container)({
    padding: '15px 0px',
})

const Clean = ({ children }) => {
    return (

        <StyledContainer maxWidth='xl'>
            {children}
        </StyledContainer>

    )
}

export default Clean