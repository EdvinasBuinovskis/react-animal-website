import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsAnimal, updateAnimal } from '../actions/animalActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { ANIMAL_UPDATE_RESET } from '../constants/animalConstants';

export default function AnimalEditScreen(props) {
  const animalId = props.match.params.id;
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [telNum, setTelNum] = useState('');

  const animalDetails = useSelector((state) => state.animalDetails);
  const { loading, error, animal } = animalDetails;

  const animalUpdate = useSelector((state) => state.animalUpdate);
  const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = animalUpdate;
  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/animallist');
    }
    if (!animal || animal._id !== animalId || successUpdate) {
      dispatch({ type: ANIMAL_UPDATE_RESET });
      dispatch(detailsAnimal(animalId));
    } else {
      setName(animal.name);
      setCategory(animal.category);
      setImage(animal.image);
      setStatus(animal.status);
      setDescription(animal.description);
      setTelNum(animal.telNum);
    }
  }, [animal, dispatch, animalId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateAnimal({
      _id: animalId,
      name,
      category,
      image,
      status,
      description,
      telNum
    })
    );
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Animal</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                  </input>
                </div>
                <div>
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    id="category"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                  </input>
                </div>
                <div>
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    id="image"
                    placeholder="Enter image link"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}>
                  </input>
                </div>
                <div>
                  <label htmlFor="status">Status</label>
                  <input
                    type="text"
                    id="status"
                    placeholder="Enter status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}>
                  </input>
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>
                <div>
                  <label htmlFor="telNum">Telephone number</label>
                  <input
                    type="tel"
                    id="telNum"
                    placeholder="Enter telephone number"
                    value={telNum}
                    onChange={(e) => setTelNum(e.target.value)}>
                  </input>
                </div>
                <div>
                  <label></label>
                  <button className="primary" type="submit">
                    Update
                  </button>
                </div>
              </>
            )}
      </form>
    </div>
  );
}