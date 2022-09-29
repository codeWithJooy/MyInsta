import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Sign from './pages/SignUp/Sign'
import Login from './pages/Login/Login'

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
      </Switch>
    </BrowserRouter>
  );
}

export default App;
