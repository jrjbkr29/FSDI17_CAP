import { GET_TASKS, DELETE_TASK, ADD_TASK, GET_FAQ, GET_EMP, GET_RES} from '../actions/types.js';

const initialState = {
    tasks: [],
    FAQ: [],
    resources: [],
    employees: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };

        case GET_FAQ:
            return {
                ...state,
                FAQ: action.payload
            };

        case GET_RES:
            return {
                ...state,
                resources: action.payload
            };
            
        case GET_EMP:
            return {
                ...state,
                employees: action.payload
            };


        default:
            return state;
    }

}