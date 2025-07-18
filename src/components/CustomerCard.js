import { useState } from 'react'

import { Card,
  CardHeader, 
  CardActions, 
  Avatar, 
  IconButton, 
  } from '@mui/material'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import ModalConfirm from './MoldalConfirm'

const CustomerCard = ({
    id,
    name,
    lastname,
    email,
    avatar,
    className,
    onRemoveCustomer,
}) => {

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = id => {
    onRemoveCustomer(id)
    handleToggleOpenModal()
  }

  const handleRemoveCustomer = () => {
    handleToggleOpenModal()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className={className}>

        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              ?
            </Avatar>
          }
          title={`${name} ${lastname}`}
          subheader={email}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="excluir cadastro" onClick={handleRemoveCustomer}>
            <DeleteIcon />
          </IconButton>
        </CardActions>

      </Card>
      <ModalConfirm
        title={'Deseja realmente excluir este cadastro?'}
        message={'Ao confirmar não sera possível reverter essa operação.'}
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={() => handleConfirmModal(id)}
      />
    </>
  )
}

export default CustomerCard