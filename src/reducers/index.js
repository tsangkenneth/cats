const initialState = {
  catItems: []
}

const catItems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CAT_ITEMS':
      return Object.assign({}, state, {
        catItems: action.catItems
      });
    default:
      return state;
  }
};

export default catItems
