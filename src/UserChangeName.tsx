import React, {ChangeEvent, FormEvent, useCallback, useState} from 'react';
import {User} from "./useUsers";

type UserChangeNameProps = {
    user: User,
    renameUser: (id: string, name: string) => void
};

export const UserChangeName = (props: UserChangeNameProps) => {
  const [name, setName] = useState(props.user.name)

  const onSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    props.renameUser(props.user.id, name)
  }, [props.renameUser, props.user, name]);

  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  }, [setName]);

  return (
      <form onSubmit={onSubmit}>
          <div>
              Current Name: { props.user.name }
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
