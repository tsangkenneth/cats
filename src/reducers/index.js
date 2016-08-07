const initialState = {
  catItems: []
}

const catItems = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_CAT_ITEMS':
      return Object.assign({}, state, {
        catItems: action.catItems
      });
    case 'REMOVE_CAT_ITEM':
      return Object.assign({}, state, {
        catItems: [
          ...state.catItems.slice(0, action.index),
          ...state.catItems.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
};

export default catItems
