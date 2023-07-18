import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const UserEditPage = ({ name, count }) => {
  const { userId } = useParams();

  const goToUserPage = () => {
    return +userId + 1 === count ? 0 : +userId + 1;
  };
  return (
    <>
      <h1>Edit page {name}</h1>
      <ul>
        <li>
          <NavLink to={`/usersListPage/${userId}`}>User page</NavLink>
        </li>
        <li>
          <NavLink to={`/usersListPage/${goToUserPage()}`}>
            Another user page
          </NavLink>
        </li>
        <li>
          <NavLink to="/usersListPage">Users list page</NavLink>
        </li>
      </ul>
    </>
  );
};

export default UserEditPage;
