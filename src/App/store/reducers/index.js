import AppState from '../state';
import * as ActionTypes from '../actions/action-types';

const initialState = AppState;

const rootReducer = (state = initialState, action) => {
    let newState, contacts;
    switch(action.type) {
        case ActionTypes.DELETE_CONTACT:
            contacts = [];
            state.contacts.forEach(c => {
                if(c.name !== action.payload) {
                    contacts.push(c);
                }
            });
            break;
        default:
            contacts = state.contacts;
            break;
    }
    newState = Object.assign({}, state, { contacts: contacts });
    return newState;
}

export default rootReducer;