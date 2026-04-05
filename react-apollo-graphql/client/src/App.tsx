import './App.css';
import { useState } from 'react';
import { gql } from '@apollo/client';
import { useMutation, useQuery } from '@apollo/client/react';

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

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`

function App() {
  const [newUser, setNewUser] = useState<{
    name: string;
    age: number;
    isMarried: boolean;
  }>({ name: '', age: 0, isMarried: false });

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


  const [createUser] = useMutation(CREATE_USER);

  const handleCreateUser = async () => {
      createUser({ variables: newUser });
  }

  return (
    <>
      <div>
        <input onChange={(e) => setNewUser({ ...newUser, name: e.target.value })} type="text" placeholder="Name" />
        <input onChange={(e) => setNewUser({ ...newUser, age: Number(e.target.value) })} type="number" placeholder="Age" />
        <input onChange={(e) => setNewUser({ ...newUser, isMarried: e.target.checked })} type="checkbox" placeholder="Is Married" />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
    
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
