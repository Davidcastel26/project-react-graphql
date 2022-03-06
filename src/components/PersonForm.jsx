import React, {useState} from 'react'
import { gql, useMutation } from '@apollo/client'

const CREATE_PERSON = gql`
mutation createPersonHere ($name: String!, $street: String!, $city: String!, $phone: String){
    addPerson(name: $name, street: $street, city: $city, phone: $phone) {
      name
      address{
        street
        city
      }
      phone
      id
    }
  }
`
const PersonForm = () => {
  
    const [name, setName ] = useState('')

    return (
    <div>

    </div>
  )
}

export default PersonForm