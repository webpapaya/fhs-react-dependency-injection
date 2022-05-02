import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {User} from "./domain/user";

type UserChangeNameProps = {
    user: User,
    renameUser: (id: string, name: string) => void
};

export const UserChangeName = ({ user, renameUser }: UserChangeNameProps) => {
  const [name, setName] = useState(user.name)

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    renameUser(user.id, name)
  }, [renameUser, user, name]);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, [setName]);

  return (
    <form onSubmit={onSubmit}>
      <div>
        Current Name: {user.name}
      </div>
      <input
          name="name"
          onChange={onChange}
          value={name}
      />
      <button type="submit">Change name of</button>
    </form>
  );
};
