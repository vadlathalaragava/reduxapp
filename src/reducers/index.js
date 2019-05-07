const reducer = (state = {say:' HOW ARE YOU'}, action) => {

    switch (action.type) { 
      case 'ADD_ITEM':
      return {say : 'I AM ADDED' };
      default:
        return state;
    }
    
  };
  
  export default reducer;