import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {qgl, useQuery} from '@apollo/client'

const All_Persons =gql`
  query{
    allPersons{
      id
      name
      phone
      address{
        street
        city
      }
    }
  }
`


function App() {
  
  const result = useQuery(All_Persons)
  
/*
  useEffect( () => {
    fetch('http://localhost:4000',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({query: `
        query{
          allPersons{
            name
          }
          findPerson(name:"dave"){
            address{
              street
              city
            }
            city
          }
        }
      `})
    })
    .then(res=> res.json())
    .then(res => {console.log(res.data)})
  })
  */

  console.log(result);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Graphql & apollo!</p>
      </header>
    </div>
  )
}

export default App
