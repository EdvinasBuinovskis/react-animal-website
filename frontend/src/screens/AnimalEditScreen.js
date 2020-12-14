import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsAnimal } from '../actions/animalActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
  const dispatch = useDispatch();
  useEffect(() => {
    if (!animal || animal._id !== animalId) {
      dispatch(detailsAnimal(animalId));
    } else {
      setName(animal.name);
      setCategory(animal.category);
      setImage(animal.image);
      setStatus(animal.status);
      setDescription(animal.description);
      setTelNum(animal.telNum);
    }
  }, [animal, dispatch, animalId]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Animal {animal.name}</h1>
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
                    Update
                  </button>
                </div>
              </>
            )}
      </form>
    </div>
  );
}