import { BrowserRouter, Route } from 'react-router-dom';
import AnimalScreen from './screens/AnimalScreen';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';

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
                    <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                  </ul>
                </div>
              ) : (
                  <Link to="/signin">Sign In</Link>
                )
            }

          </div>
        </header>
        <main>
          <Route path="/animal/:id" component={AnimalScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">© All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
