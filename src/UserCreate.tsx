import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';

export const UserCreate = (props: { createUser: (name: string) => void }) => {
  const [name, setName] = useState('')

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.createUser(name)
  }, [props.createUser, name]);

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
