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

  const { data, loading, error } = useQuery(GET_USERS);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <h1>Users</h1>
      <div>
        {data?.getUsers?.map((user: any) => (
          <div key={user.id}>
            <p>Name: {user.name}, Married: {user.isMarried ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
