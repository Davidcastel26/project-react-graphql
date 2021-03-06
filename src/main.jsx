import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from '@apollo/client'
// import { ApolloClient } from '@apollo-client'

const client = new ApolloClient({
  // if we are not using the catche we will get an error 
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
  uri: 'http://localhost:4000/' 
  })
})


/* query to check if it is working
client.query({query})
  .then(res => {
    console.log(res.data);
  })
*/

ReactDOM.render(
  // <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
  {/* </React.StrictMode>, */}
  </ApolloProvider>,
  document.getElementById('root')
)
