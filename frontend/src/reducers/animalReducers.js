import { ANIMAL_DETAILS_FAIL, ANIMAL_DETAILS_SUCCESS, ANIMAL_DETAILS_REQUEST, ANIMAL_LIST_FAIL, ANIMAL_LIST_REQUEST, ANIMAL_LIST_SUCCESS, ANIMAL_CREATE_REQUEST, ANIMAL_CREATE_SUCCESS, ANIMAL_CREATE_FAIL, ANIMAL_CREATE_RESET, ANIMAL_UPDATE_REQUEST, ANIMAL_UPDATE_SUCCESS, ANIMAL_UPDATE_FAIL, ANIMAL_UPDATE_RESET, ANIMAL_DELETE_REQUEST, ANIMAL_DELETE_SUCCESS, ANIMAL_DELETE_FAIL, ANIMAL_DELETE_RESET } from "../constants/animalConstants";

export const animalListReducer = (state = { loading: true, animals: [] }, action) => {
    switch (action.type) {
        case ANIMAL_LIST_REQUEST:
            return { loading: true };
        case ANIMAL_LIST_SUCCESS:
            return { loading: false, animals: action.payload };
        case ANIMAL_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const animalDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
        case ANIMAL_DETAILS_REQUEST:
            return { loading: true };
        case ANIMAL_DETAILS_SUCCESS:
            return { loading: false, animal: action.payload };
        case ANIMAL_DETAILS_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const animalCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_CREATE_REQUEST:
            return { loading: true };
        case ANIMAL_CREATE_SUCCESS:
            return { loading: false, success: true, animal: action.payload };
        case ANIMAL_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case ANIMAL_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const animalUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_UPDATE_REQUEST:
            return { loading: true };
        case ANIMAL_UPDATE_SUCCESS:
            return { loading: false, success: true };
        case ANIMAL_UPDATE_FAIL:
            return { loading: false, error: action.payload };
        case ANIMAL_UPDATE_RESET:
            return {};
        default:
            return state;
    }
};

export const animalDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ANIMAL_DELETE_REQUEST:
            return { loading: true };
        case ANIMAL_DELETE_SUCCESS:
            return { loading: false, success: true };
        case ANIMAL_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case ANIMAL_DELETE_RESET:
            return {};
        default:
            return state;
    }
};