import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserProvider';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile';
import ThreadView from './components/ThreadView'
import ProtectedRoute from './components/ProtectedRoute';

import './styles.css';

function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="app">
      {token && <Navbar logout = {logout} />}
      <Switch>
        <Route
          exact path = "/"
          render={()=> token ? <Redirect to="/profile" /> : <Auth /> }
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo='/'
          token={token}
        />
        <ProtectedRoute
          path="/ThreadView"
          component={ThreadView}
          redirectTo='/'
          token={token}
        />
      </Switch>
    </div>
  )
}

export default App;