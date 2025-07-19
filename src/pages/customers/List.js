import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'


import CustomerCard from '../../components/CustomerCard'

const Item = styled(CustomerCard)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(2),
}))

const List = () => {

  const navigate = useNavigate()

  const [customers, setCustomers] = useState([])

  useEffect(() => {

    axios.get('https://reqres.in/api/users', {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])

  const handleRemoveCustomer = id => {
    axios.delete(`https://reqres.in/api/users/${id}`, {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
      .then(response => {

        const newCustomersState = customers.filter(customer => customer.id !== id)

        setCustomers(newCustomersState)

      })
  }

  const handleEditCustomer = id => {
    navigate(`/customers/edit/${id}`)
  }

  return (

    <Grid container>
      {
        customers.map(customer => (
          <Grid item size={{ xs: 12, md: 4 }}>
            <Item
              id={customer.id}
              name={customer.first_name}
              lastname={customer.last_name}
              email={customer.email}
              avatar={customer.avatar}
              onRemoveCustomer={handleRemoveCustomer}
              onEditCustomer={handleEditCustomer}
            />
          </Grid>
        ))
      }
    </Grid>

  )
}

export default List
