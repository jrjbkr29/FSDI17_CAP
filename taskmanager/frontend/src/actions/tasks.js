import axios from 'axios';

import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_FAQ, GET_EMP, GET_RES, GET_ERRORS} from './types';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

// GET TASKS
export const getTasks = () => (dispatch, getState) => {
    axios
    .get('/api/tasks/', tokenConfig(getState))
    .then(res => {
            
            dispatch({
                type: GET_TASKS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status))  )
};

// Delete TASK
export const deleteTask = (id) => (dispatch, getState) => {
    axios
    .delete(`/api/tasks/${id}/`, tokenConfig(getState))
    .then(res => {
            dispatch(createMessage({ deleteTask: "Task Deleted"}));
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        })
        .catch(err => console.log(err))
};

// ADD TASK
export const addTask = (task) => (dispatch, getState) => {
    axios
    .post('/api/tasks/', task, tokenConfig(getState))
    .then(res => {
        dispatch(createMessage({ addTask: "Task Added"}));    
        dispatch({
                type: ADD_TASK,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)) );
};


// GET FAQ
export const getFaq = () => dispatch => {
    axios
    .get('/api/FAQ/')
    .then(res => {
            dispatch({
                type: GET_FAQ,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

// GET RESOURCES
export const getRes = () => (dispatch, getState) => {
    axios
    .get('/api/Resources/', tokenConfig(getState))
    .then(res => {
            dispatch({
                type: GET_RES,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

// GET EMPLOYEES
export const getEmp = () => dispatch => {
    axios
    .get('/api/Employees/')
    .then(res => {
            dispatch({
                type: GET_EMP,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};