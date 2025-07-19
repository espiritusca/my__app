import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { TextField, Button, Box } from '@mui/material'

import Toasty from '../../components/Toasty'

const Edit = () => {

    const { id } = useParams()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false
        }
    })

    const [openToasty, setOpenToasty] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        axios.get(`https://reqres.in/api/users/${id}`, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        })
            .then(response => {
                const { data } = response.data
                setForm({
                    name: {
                        value: data.first_name,
                        error: false,
                    },
                    job: {
                        value: data.job,
                        error: false
                    }
                })
            })

    }, [])

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

        axios.put(`https://reqres.in/api/users/${id}`, {
            name: form.name.value,
            job: form.job.value,
        },
            {
                headers: {
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
                    isLoading ? 'Aguarde...' : 'Salvar alterações'
                }
            </Button>
            <Toasty open={openToasty} severity="success" text="Alteração realizada com sucesso!" onClose={onCloseToasty} />

        </Box>
    )
}

export default Edit