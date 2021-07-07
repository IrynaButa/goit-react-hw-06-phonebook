

export const addContact = array => ({
    type: 'contacts/Add',
    payload:array,
      
})

export const deleteContact = id => ({
    type: 'contacts/Delete',
    payload: id,
})

export const onChangeFilter = value => ({
    type: 'contacts/Update',
    payload: value,
})


