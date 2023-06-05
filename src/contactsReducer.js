// contactsReducer.js

const initialState = {
    contacts: []
  };
  
  const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_CONTACT':
        return {
          ...state,
          contacts: [...state.contacts, action.payload]
        };
      case 'EDIT_CONTACT':
        // Handle editing contact logic
        return state;
      case 'DELETE_CONTACT':
        // Handle deleting contact logic
        return state;
      default:
        return state;
    }
  };
  
  export default contactsReducer;
  