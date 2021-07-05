

// const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
export const getVisibleContact = contact => ({
    type: 'contacts/GetVisible',
    payload:contact,
      
})


export const addContact = contact => ({
    type: 'contacts/Add',
    payload:contact,
      
})

export const deleteContact = contactId => ({
    type: 'contacts/Delete',
    payload: contactId,
})

export const updateContact = e => ({
    type: 'contacts/Update',
    payload: e,
})