import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAnimal } from '../actions/animalActions';
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

    const animalCreate = useSelector((state) => state.animalCreate);
    const { success, error, loading } = animalCreate;

    const dispatch = useDispatch();

    useEffect(() => {
        if (success) {
            dispatch({ type: ANIMAL_CREATE_RESET });
            props.history.push('/animallist');
        }
    }, [dispatch, props.history, success]);

    const createHandler = (e) => {
        e.preventDefault();
        dispatch(createAnimal(name, category, image, status, description, telNum));
    };

    return (
        <div>
            <form className="form" onSubmit={createHandler}>
                <div>
                    <h1>Add Animal</h1>
                </div>
                {loading ? (
                    <LoadingBox></LoadingBox>
                ) : error ? (
                    <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                            <>
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter name"
                                        onChange={(e) => setName(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="category">Category</label>
                                    <input
                                        type="text"
                                        id="category"
                                        placeholder="Enter category"
                                        onChange={(e) => setCategory(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="image">Image</label>
                                    <input
                                        type="text"
                                        id="image"
                                        placeholder="Enter image link"
                                        onChange={(e) => setImage(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="status">Status</label>
                                    <input
                                        type="text"
                                        id="status"
                                        placeholder="Enter status"
                                        onChange={(e) => setStatus(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        id="description"
                                        placeholder="Enter description"
                                        onChange={(e) => setDescription(e.target.value)}>
                                    </textarea>
                                </div>
                                <div>
                                    <label htmlFor="telNum">Telephone number</label>
                                    <input
                                        type="tel"
                                        id="telNum"
                                        placeholder="Enter telephone number"
                                        onChange={(e) => setTelNum(e.target.value)}>
                                    </input>
                                </div>
                                <div>
                                    <label></label>
                                    <button className="primary" type="submit">
                                        Create
                                </button>
                                </div>
                            </>
                        )}
            </form>
        </div>
    );
}