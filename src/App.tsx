import React from 'react';
import {UserCreate} from "./UserCreate";
import {useUsers} from "./useUsers";
import {UserChangeName} from "./UserChangeName";

function App() {
  const { users, createUser, renameUser } = useUsers()

  return (
    <div>
      <UserCreate createUser={createUser}/>
      { users.map((user) => (
        <UserChangeName
          key={user.id}
          user={user}
          renameUser={renameUser}
        />
      )) }
    </div>
  );
}

export default App;
