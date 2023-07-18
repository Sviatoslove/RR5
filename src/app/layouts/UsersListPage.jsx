import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import UserPage from './UserPage';
import UserEditPage from './UserEditPage';

const UsersListPage = () => {
  const { userId } = useParams();
  const { edit } = useParams();
  const editPage = edit === 'edit';
  const users = ['User 1', 'User 2', 'User 3', 'User 4', 'User 5', 'User 6'];
  return (
    <>
      {userId ? (
        editPage ? (
          <UserEditPage name={users[userId]} count={users.length} />
        ) : (
          <UserPage name={users[userId]} />
        )
      ) : (
        <>
          <h1>Users list page</h1>
          <ul>
            {users.map((user, id) => (
              <li key={id}>
                <NavLink to={`/usersListPage/${id}`}>{user}</NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/">Home page</NavLink>
        </>
      )}
    </>
  );
};

export default UsersListPage;
