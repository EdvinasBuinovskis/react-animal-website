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
                      <div key={animal._id} className="card">
                        <a href={`/animal/${animal._id}`}>
                            <img className="medium" src={animal.image} alt={animal.name} />
                        </a>
                        <div className="card-body">
                          <a href={`/animal/${animal._id}`}>
                              <h1>{animal.name}</h1>
                            </a>
                            <div>
                                <span>
                                    <i className="fa fa-star"></i>
                                </span>
                                <h2>{animal.status}</h2>
                            </div>
                            <div>
                                <h2>{animal.date}</h2>
                            </div>
                        </div>
                    </div>
                    ))
                  }
                </div>
            </main>
            <footer className="row center">© All rights reserved</footer>
        </div>
  );
}

export default App;
