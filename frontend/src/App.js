import { BrowserRouter, Route } from 'react-router-dom';
import AnimalScreen from './screens/AnimalScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
              <a className="brand" href="/">Shelter Me</a>
          </div>
          <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/animal/:id" component={AnimalScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center">© All rights reserved</footer>
      </div>
    </BrowserRouter>    
  );
}

export default App;
