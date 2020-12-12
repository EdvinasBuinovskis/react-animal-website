import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsAnimal } from '../actions/animalActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function AnimalScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const animalDetails = useSelector(state => state.animalDetails);
    const { loading, error, animal } = animalDetails;

    useEffect(() => {
        dispatch(detailsAnimal(productId));
    }, [dispatch, productId]);

    return (
        <div>
            {loading ? (<LoadingBox></LoadingBox>) :
                error ? (<MessageBox variant="danger">{error}</MessageBox>) :
                    (
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
                    )}
        </div>
    );
}