import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import { ApolloClient, gql, useQuery } from 'apollo-client'
import { gql, useQuery } from '@apollo/client'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
// import {} from '@apollo/client'

const All_Persons = gql`
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


const App = () => {

  // const result = useQuery(All_Persons)
  const { data, error, loading } = useQuery(All_Persons /* , {pollInterval: 2000} */ )
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

  console.log(data, loading);
  if (error) return <span style='color: red'> {error} </span>

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading
          ? <p> Loading ... </p>
          : <Persons persons={data?.allPersons} />
        }
        <PersonForm />
      </header>
    </div>
  )
}

export default App


/* {
              data && data.allPersons.map(p => p.name).join(', ')
            } */