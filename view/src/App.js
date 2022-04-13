import { Route, Switch } from 'react-router-dom';
import Login from "./Pages/Login";
import Home_page from "./Pages/Home_page";
import Admin_page from "./Pages/Admin_page";
import ProtectedRoute from './Component/ProtectedRoute';

const App = () => {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <ProtectedRoute exact path='/home' component={Home_page}
        ></ProtectedRoute>
        <ProtectedRoute exact path='/admin' component={Admin_page}></ProtectedRoute>

      </Switch>

    </div>
  );
}

export default App;
