import { createAction } from '@reduxjs/toolkit';
import shortid from "shortid";

  export const addContact = createAction('contacts/addContact', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

 export const deleteContact = createAction('contacts/deleteContact');

 export const changeFilter = createAction('contacts/changeFilter');

