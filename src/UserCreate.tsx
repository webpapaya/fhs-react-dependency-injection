import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';

type UserCreateProps = { createUser: (name: string) => void };

export const UserCreate = ({ createUser }: UserCreateProps) => {
  const [name, setName] = useState('')

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    createUser(name)
  }, [createUser, name]);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, [setName]);

  return (
      <form onSubmit={onSubmit}>
        <input
            name="name"
            onChange={onChange}
            value={name}
        />
        <button type="submit">Create User</button>
      </form>
  );
};
