import { createStore } from "redux";
import shortid from "shortid";

const initialState = {
    contacts: {
    items: [],
    filter: ''
  }};
const contact = {
      id: shortid.generate(),
      name: "",
      number: "",
    };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'contacts/GetVisible':
            const normalizedFilter = state.filter.toLowerCase();
            return state.contacts.filter((contact) =>
 contact.name.toLowerCase().includes(normalizedFilter));
        
        case 'contacts/Add':
            return { items: [contact, ...state.contacts] }
   

        case 'contacts/Delete':
            return {items: state.filter(
                (item) => contact.id !== action.payload.contactId
            )}
            ;
      
        case 'contacts/Update':
            return { filter: action.payload.currentTarget.value };

        default:
            return state;
    }
};
const store = createStore(reducer);

export default store;