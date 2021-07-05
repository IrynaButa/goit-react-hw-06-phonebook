

// const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };



export const addContact = array => ({
    type: 'contacts/Add',
    payload:array,
      
})

export const deleteContact = contactId => ({
    type: 'contacts/Delete',
    payload: contactId,
})

export const onChangeFilter = value => ({
    type: 'contacts/Update',
    payload: value,
})


