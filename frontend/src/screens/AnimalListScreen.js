import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listAnimals } from '../actions/animalActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
//import { ANIMAL_CREATE_RESET } from '../constants/animalConstants';

export default function AnimalListScreen(props) {

    const animalList = useSelector((state) => state.animalList);
    const { loading, error, animals } = animalList;


    // const animalCreate = useSelector((state) => state.animalCreate);
    // const { success: successCreate, error: errorCreate, loading: loadingCreate, animal: createdAnimal } = animalCreate;
    const dispatch = useDispatch();

    useEffect(() => {
        // if (successCreate) {
        //     dispatch({ type: ANIMAL_CREATE_RESET });
        //     props.history.push(`/animal/${createdAnimal._id}/edit`);
        // }
        dispatch(listAnimals());
    }, [dispatch]);

    const deleteHandler = () => {
        /// TODO: dispatch delete action
    };
    return (
        <div>
            <div className="row">
                <h1>Animals</h1>
                <button type="button" className="primary" onClick={() =>
                    props.history.push("/animal/add")
                }>
                    Create Animal
                </button>
            </div>
            {/* { loadingCreate && <LoadingBox></LoadingBox>}
            { errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>} */}
            {
                loading ? (
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
                        )
            }
        </div >
    );
}