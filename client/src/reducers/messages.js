const ADD_MESSAGE = 'ADD_MESSAGE'

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

export default ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_MESSAGE:
      return [...state, action.message]
    default:
      return state;
  }
}