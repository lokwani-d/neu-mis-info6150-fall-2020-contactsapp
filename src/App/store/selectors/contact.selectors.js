import { createSelector } from 'reselect';

const getContacts = state => state.contacts;

export const getAvailableContacts = createSelector(
    getContacts,
    (contacts) => contacts.filter(c => c.enabled )
)