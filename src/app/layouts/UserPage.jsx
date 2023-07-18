import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const UserPage = ({ name }) => {
  const { userId } = useParams();
  return (
    <>
      <h1>User Page: {name}</h1>
      <ul>
        <li>
          <NavLink to={`/usersListPage/${userId}/edit`}>User edit page</NavLink>
        </li>
        <li>
          <NavLink to="/usersListPage">Users list page</NavLink>
        </li>
      </ul>
      <span>User id: {userId}</span>
    </>
  );
};

export default UserPage;
