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
            <form className="form" onSubmit={createHandler}>
                <div>
                    <h1>Create ad</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox>
                        :
                        error ? <MessageBox variant="danger">{error}</MessageBox>
                            :
                            <>
                                {loadingCreate && <LoadingBox></LoadingBox>}
                                {errorCreate && <MessageBox variant="danger">{error}</MessageBox>}
                                {successCreate && <MessageBox variant="success">Ad Added Successfully</MessageBox>}
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter name"
                                        required
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        id="category"
                                        placeholder="Enter category"
                                        required
                                        onChange={(e) => setCategory(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="image">Image</label>
                                    <input
                                        type="text"
                                        id="image"
                                        placeholder="Enter image link"
                                        required
                                        onChange={(e) => setImage(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <input
                                        type="text"
                                        id="status"
                                        placeholder="Enter status"
                                        required
                                        onChange={(e) => setStatus(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        placeholder="Enter description"
                                        required
                                        onChange={(e) => setDescription(e.target.value)}>
                                    </textarea>
                                </div>
                                <div>
                                    <label htmlFor="telNum">Telephone number</label>
                                    <input
                                        type="tel"
                                        id="telNum"
                                        placeholder="Enter telephone number"
                                        required
                                        onChange={(e) => setTelNum(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label />
                                    <button className="primary" type="submit">Create ad</button>
                                </div>
                            </>
                }
            </form>
        </div>
    );
}