import { useState } from 'react'
import axios from 'axios'
import { TextField, Button, Box } from '@mui/material'

import Toasty from '../../components/Toasty'

const Register = () => {

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        setIsLoading(true)
        let hasError = false
        let newFormState = {
            ...form,
        }

        if (!form.name.value) {
            hasError = true
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite o campo nome corretamente!'
            }
        }
        if (!form.job.value) {
            hasError = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite o campo cargo corretamente!'
            }
        }

        if (hasError) {
            setIsLoading(false)
            return setForm(newFormState)
        }

        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        },
        {headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }
        ).then(() => {
            setOpenToasty(true)
            setIsLoading(false)
        })

    }

    const onCloseToasty = () => {
        setOpenToasty(false)
    }

    return (
        <Box sx={{ maxWidth: 700, display: 'flex', flexDirection: 'column', rowGap: 2 }}>

            <TextField
                error={form.name.error}
                helperText={form.name.error ? form.name.helperText : ''}
                label="Digite o seu nome"
                value={form.name.value}
                name="name"
                onChange={handleInputChange} />

            <TextField
                error={form.job.error}
                helperText={form.job.error ? form.job.helperText : ''}
                label="Digite o seu cargo"
                value={form.job.value} name="job"
                onChange={handleInputChange} />

            <Button variant="contained" color='primary' onClick={handleRegisterButton} disabled={isLoading}>
                {
                    isLoading ? 'Aguarde...' : 'Cadastrar'
                }
            </Button>
            <Toasty open={openToasty}  severity="success" text="Cadastro realizado com sucesso!" onClose={onCloseToasty}/>

        </Box>
    )
}

export default Register