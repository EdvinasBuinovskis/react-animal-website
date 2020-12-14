import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAnimals, createAnimal } from '../actions/animalActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ANIMAL_CREATE_RESET } from '../constants/animalConstants';

export default function AnimalListScreen(props) {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [status, setStatus] = useState('');
    const [description, setDescription] = useState('');
    const [telNum, setTelNum] = useState('');
    const animalList = useSelector((state) => state.animalList);
    const { loading, error, animals } = animalList;


    const animalCreate = useSelector((state) => state.animalCreate);
    const { success: successCreate, error: errorCreate, loading: loadingCreate, animal: createdAnimal } = animalCreate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: ANIMAL_CREATE_RESET });
            props.history.push(`/animal/${createdAnimal._id}/edit`);
        }
        dispatch(listAnimals());
    }, [createdAnimal, dispatch, props.history, successCreate]);

    const deleteHandler = () => {
        /// TODO: dispatch delete action
    };
    const createHandler = (e) => {
        e.preventDefault();
        dispatch(createAnimal(name, category, image, status, description, telNum));
    };
    return (
        <div>
            <div className="row">
                <h1>Animals</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create Animal
                </button>
            </div>
            {loadingCreate && <LoadingBox></LoadingBox>}
            {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>CATEGORY</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {animals.map((animal) => (
                                    <tr key={animal._id}>
                                        <td>{animal._id}</td>
                                        <td>{animal.name}</td>
                                        <td>{animal.category}</td>
                                        <td>{animal.status}</td>
                                        <td>
                                            <button type="button" className="small" onClick={() =>
                                                props.history.push(`/animal/${animal._id}/edit`)
                                            }>Edit
                                            </button>
                                            <button type="button" className="small" onClick={() => deleteHandler(animal)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
        </div>
    );
}