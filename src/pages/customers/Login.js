import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { TextField, Button, Typography, Box } from "@mui/material"
import { useNavigate } from 'react-router-dom'

import useAuth from '../../state/auth'

const Wrapper = styled(Box)(({ theme }) => ({
    margin: theme.spacing(3)
}))

const Login = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [isLoading, setIsLoading] = useState(false)

    const { user, setUser } = useAuth()

    const handleInputChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleFormSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {

            setUser({
                logged: true,
                email: form.email
            })

            navigate('/')

        }, 4000)
    }

    return (
        <>
            <Typography variant='h3'>Acesso Restrito!</Typography>

            <Wrapper>
                <TextField
                    onChange={handleInputChange}
                    label='Digite o seu e-mail'
                    name='email'
                />
            </Wrapper>

            <Wrapper>
                <TextField
                    onChange={handleInputChange}
                    label='Digite a sua senha'
                    name='password'
                    type='password'
                />
            </Wrapper>

            <Wrapper>
                <Button variant='contained' color='primary' onClick={handleFormSubmit}>
                    {
                        isLoading ? 'Aguarde...' : 'Entrar'
                    }
                </Button>
            </Wrapper>
        </>
    )
}

export default Login