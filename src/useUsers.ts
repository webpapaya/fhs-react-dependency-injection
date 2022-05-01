import {useState} from "react";
import {v4 as uuid} from 'uuid'
import {User} from "./domain/user";
import {DomainError, NotFoundError} from "./domain/errors";

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>(
        JSON.parse(window.localStorage.getItem('users') ?? '[]'))

    const createUser = (name: string) => {
        if (name.length <= 3) {
            throw new DomainError('name to short')
        }

        const persistedUsers = JSON.parse(window.localStorage.getItem('users') ?? '[]')
        const newUser: User = { id: uuid(), name };
        const updatedUsers = [...persistedUsers, newUser];

        window.localStorage.setItem('users', JSON.stringify(updatedUsers))
        setUsers(updatedUsers)
    }

    const renameUser = (id: string, name: string) => {
        const persistedUsers: User[] = JSON.parse(window.localStorage.getItem('users') ?? '[]')
        const index = persistedUsers.findIndex((user) => user.id === id)
        const userToUpdate = persistedUsers[index]
        if (!userToUpdate) {
            throw new NotFoundError()
        }
        const updatedUser = { ...userToUpdate, name: name }
        persistedUsers.splice(index, 1)
        const updatedUsers = [...persistedUsers, updatedUser];
        window.localStorage.setItem('users', JSON.stringify(updatedUsers))
        setUsers(updatedUsers)
    }

    return {
        users,
        createUser,
        renameUser,
    }
}

