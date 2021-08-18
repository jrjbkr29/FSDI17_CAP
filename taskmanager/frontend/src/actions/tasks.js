import axios from 'axios';

import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_FAQ, GET_EMP, GET_RES} from './types';

// GET TASKS
export const getTasks = () => dispatch => {
    axios
    .get('/api/tasks/')
    .then(res => {
            dispatch({
                type: GET_TASKS,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
};

// Delete TASK
export const deleteTask = (id) => dispatch => {
    axios
    .delete(`/api/tasks/${id}/`)
    .then(res => {
            dispatch({
                type: DELETE_TASK,
                payload: id
            });
        })
        .catch(err => console.log(err))
};

// ADD TASK
export const addTask = (task) => dispatch => {
    axios
    .post('/api/tasks/', task)
    .then(res => {
            dispatch({
                type: ADD_TASK,
                payload: res.data
            });
        })
        .catch(err => console.log(err))
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
export const getRes = () => dispatch => {
    axios
    .get('/api/Resources/')
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