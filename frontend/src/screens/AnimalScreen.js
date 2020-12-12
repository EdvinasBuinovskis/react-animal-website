import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data';

export default function AnimalScreen(props) {
    const animal = data.animals.find(x => x._id === props.match.params.id);
    if(!animal){
        return <div>Animal Not Found</div>;
    }
    return (
        <div>
            <Link to="/">Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={animal.image} alt={animal.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{animal.name}</h1>
                        </li>
                        <li>
                            {animal.status}
                        </li>
                        <li>
                            {animal.date}
                        </li>
                        <li>Description:
                            <p>{animal.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Call</div>
                                    <div className="telNum">{animal.telNum}</div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">{animal.telNum}</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}