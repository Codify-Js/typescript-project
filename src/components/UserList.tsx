import React from 'react';
import {User} from '../models/User'

interface Props {
  users: User[]
}
const UserList = (props: Props) => {
  const { users } = props
  
  return (
    <div>
      {users.map(user => (
        <div>
          <div>{user.name}</div>
          <div>{user.age}</div>
          <div>{user.status}</div>
          <div>{user.emails ? user.emails.join(', ') : ''}</div>
        </div>
      ))}
    </div>
  )
}

export default UserList;