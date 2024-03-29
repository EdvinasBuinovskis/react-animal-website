import Axios from "axios";
import { ANIMAL_DETAILS_FAIL, ANIMAL_DETAILS_REQUEST, ANIMAL_DETAILS_SUCCESS, ANIMAL_LIST_FAIL, ANIMAL_LIST_REQUEST, ANIMAL_LIST_SUCCESS, ANIMAL_CREATE_FAIL, ANIMAL_CREATE_REQUEST, ANIMAL_CREATE_SUCCESS, ANIMAL_UPDATE_REQUEST, ANIMAL_UPDATE_SUCCESS, ANIMAL_UPDATE_FAIL, ANIMAL_DELETE_REQUEST, ANIMAL_DELETE_SUCCESS, ANIMAL_DELETE_FAIL } from "../constants/animalConstants"

export const listAnimals = () => async (dispatch) => {
    dispatch({
        type: ANIMAL_LIST_REQUEST
    });
    try {
        const { data } = await Axios.get('/api/animals');
        dispatch({ type: ANIMAL_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ANIMAL_LIST_FAIL, payload: error.message });
    }
};

export const createAnimal = (name, category, image, status, description, telNum) => async (dispatch, getState) => {
    dispatch({ type: ANIMAL_CREATE_REQUEST, payload: { name, category, image, status, description, telNum } });
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.post('/api/animals', { name, category, image, status, description, telNum }, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        dispatch({ type: ANIMAL_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ANIMAL_CREATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const detailsAnimal = (animalId) => async (dispatch) => {
    dispatch({ type: ANIMAL_DETAILS_REQUEST, payload: animalId });
    try {
        const { data } = await Axios.get(`/api/animals/${animalId}`);
        dispatch({ type: ANIMAL_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ANIMAL_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const updateAnimal = (animal) => async (dispatch, getState) => {
    dispatch({ type: ANIMAL_UPDATE_REQUEST, payload: animal });
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.put(`/api/animals/${animal._id}`, animal, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        dispatch({ type: ANIMAL_UPDATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ANIMAL_UPDATE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

export const deleteAnimal = (animalId) => async (dispatch, getState) => {
    dispatch({ type: ANIMAL_DELETE_REQUEST, payload: animalId });
    const { userSignin: { userInfo } } = getState();
    try {
        const { data } = await Axios.delete(`/api/animals/${animalId}`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        dispatch({ type: ANIMAL_DELETE_SUCCESS });
    } catch (error) {
        dispatch({ type: ANIMAL_DELETE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message });
    }
};

