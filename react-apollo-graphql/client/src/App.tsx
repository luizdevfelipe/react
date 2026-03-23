import './App.css';
import { useQuery } from '@apollo/client/react'
import { gql } from '@apollo/client'

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      name
      isMarried
    }
  }
`;

const GET_USE_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      name
    }
  }
`;

function App() {

  const {
    data: getUsersData,
    loading: getUsersLoading,
    error: getUsersError
  } = useQuery(GET_USERS);

  const {
    data: getUserData,
    loading: getUserLoading,
    error: getUserError
  } = useQuery(GET_USE_BY_ID, { variables: { id: '1' } });

  return (
    <>
      {getUserLoading && <p>Loading user...</p>}
      {getUserError && <p>Error: {getUserError.message}</p>}
      {getUserData && <h1>Chosen User: {getUserData?.getUserById?.name}</h1>}

      {getUsersLoading && <p>Loading...</p>}
      {getUsersError && <p>Error: {getUsersError.message}</p>}

      <div>
        {getUsersData?.getUsers?.map((user: any) => (
          <div key={user.id}>
            <p>Name: {user.name}, Married: {user.isMarried ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
