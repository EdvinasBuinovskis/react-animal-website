import { BrowserRouter, Route } from 'react-router-dom';
import AnimalScreen from './screens/AnimalScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AnimalListScreen from './screens/AnimalListScreen';
import AdminRoute from './components/AdminRoute';
import AnimalEditScreen from './screens/AnimalEditScreen';
import AnimalCreateScreen from './screens/AnimalCreateScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">Shelter Me</Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} <i class="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li>
                      <Link to="/profile">User Profile</Link>
                    </li>
                    <li>
                      <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </li>
                  </ul>
                </div>
              ) : (
                  <Link to="/signin">Sign In</Link>
                )
            }
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin {' '} <i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/animallist">Animals</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route path="/animal/:id" component={AnimalScreen} exact></Route>
          <AdminRoute path="/animal/:id/edit" component={AnimalEditScreen} exact></AdminRoute>
          {/* <Route path="/animals" component={AnimalListScreen}></Route> */}
          <AdminRoute path="/animal/add" component={AnimalCreateScreen}></AdminRoute>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
          <AdminRoute path="/animallist" component={AnimalListScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">© All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
