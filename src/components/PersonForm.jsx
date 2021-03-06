import React, { useState } from 'react'
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

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCIty] = useState('')

    const [createPersonHere] = useMutation(CREATE_PERSON)

    const handleSubmit = e => {
        e.preventDefault()

        createPersonHere({variables:{ name, phone, street, city} })

        setName('')
        setPhone('')
        setStreet('')
        setCIty('')
    }

    return (
        <div>
            <h2>Create a new Human</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name Here!' type="text" value={name} onChange={evt => setName(evt.target.value)} />
                <input placeholder='Phone Here!' type="text" value={phone} onChange={evt => setPhone(evt.target.value)} />
                <input placeholder='Street Here!' type="text" value={street} onChange={evt => setStreet(evt.target.value)} />
                <input placeholder='City Here!' type="text" value={city} onChange={evt => setCIty(evt.target.value)} />
                <button onSubmit={handleSubmit}> Add person</button>
            </form>
        </div>
    )
}

export default PersonForm