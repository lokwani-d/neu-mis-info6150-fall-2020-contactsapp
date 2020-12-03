import * as ActionTypes from './action-types';

export const deleteContact = (payload) => {
    return { type: ActionTypes.DELETE_CONTACT, payload: payload }
}