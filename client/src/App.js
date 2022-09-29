import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Sign from './pages/SignUp/Sign'
import Login from './pages/Login/Login'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    // <div className="main">
    //    {/* <Sign /> */}
    //    <Login />
    // </div>
    <BrowserRouter>
      <Switch>
         <Route path="/login" component={Login} />
         <Route path="/signup" component={Sign} />
         <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
