import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import axios from 'axios'

import CustomerCard from '../components/CustomerCard'

const Item = styled(CustomerCard)(({ theme }) => ({
  flexGrow: 1,
  margin: theme.spacing(2),
}))

const Customers = () => {

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

  return (

      <Grid container>
        {
          customers.map(customer => (
            <Grid item size={{ xs: 12 , md: 4 }}>
              <Item
                name={customer.first_name}
                lastname={customer.last_name}
                email={customer.email}
                avatar={customer.avatar}
              />
            </Grid>
          ))
        }
      </Grid>

  )
}

export default Customers
