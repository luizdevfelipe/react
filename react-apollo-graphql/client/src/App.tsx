import './App.css';
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      isMarried
    }
  }
`;

function App() {

  const queryResult = useQuery(GET_USERS);
  console.log(queryResult);

  return (
    <>
      <h1>Users</h1>
      <div>

      </div>
    </>
  )
}

export default App
