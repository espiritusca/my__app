import { Typography } from '@mui/material'

const Page = ({ title, children }) => {
    return (
        
        <>
            <Typography variant='h3'>
                {title}
            </Typography>
            {children}
        </>
    )
}

export default Page