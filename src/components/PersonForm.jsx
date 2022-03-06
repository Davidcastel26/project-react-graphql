import React from 'react'

const CREATE_PERSON = gql`
mutation createPersonHere ($name: String!, $street: String!, $city: String!){
    addPerson(name: $name, street: $street, city: $city) {
      name
      address{
        street
        city
      }
    }
  }
`
const PersonForm = () => {
  return (
    <div>PersonForm</div>
  )
}

export default PersonForm