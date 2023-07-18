import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './layouts/HomePage';
import UsersListPage from './layouts/UsersListPage';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/usersListPage/:userId?/:edit?" component={UsersListPage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;
