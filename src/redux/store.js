import { createStore } from "redux";
import shortid from "shortid";

const initialState = {
    contacts: {
    items: [],
    filter: ''
  }};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'contacts/Add':
            return {
                contacts: {
                    ...state.contacts,
                    items: [action.payload, ...state.contacts.items]
                }
   
            }
        case 'contacts/Delete':
            return {
                contacts: {
                    ...state.contacts,
                    items: state.contacts.items.filter(
                        (contactId) => contactId !== action.payload)
                }
            }
      
        case 'contacts/Update':
            return { contacts: {
          ...state.contacts,
          filter: action.payload,
        }, };

        default:
            return state;
    }
};
const store = createStore(reducer);

export default store;