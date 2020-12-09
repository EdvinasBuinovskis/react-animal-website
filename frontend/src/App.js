import Animal from './components/Animal';
import data from './data';

function App() {
  return (
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
                <div className="row center">
                  {data.animals.map(animal => (
                    <Animal key={animal._id} animal={animal}></Animal>
                    ))
                  }
                </div>
            </main>
            <footer className="row center">© All rights reserved</footer>
        </div>
  );
}

export default App;
