import axios from 'axios';

import { GET_FAQ } from './types';

// GET FAQ
export const getFaqs = () => dispatch => {
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