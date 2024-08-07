import { combineReducers } from 'redux';
import { ADD_ITEM, SELECT_BOOK, SET_BOOKS, REMOVE_ITEM, DESELECT_BOOK } from '../actions';


const bookReducer = (state = { books: [], selectedBooks: [] }, action) => {
  console.log(' State:', state);
  switch (action.type) {
    case SET_BOOKS:
      const newState={...state,books:action.payload};
      console.log('New State:', newState);
      return newState;
      break;
    case SELECT_BOOK:
      const selectState={
        ...state,
        selectedBooks: [...state.selectedBooks, action.payload]
      };
      console.log('New State:', selectState);
      return selectState; 
      break;
    case DESELECT_BOOK:
      return {
        ...state,
        selectedBooks: state.selectedBooks.filter(book => book.id !== action.payload.id)
      };
    default:
      return state;
  }
};
const cartReducer = (state = { items: [] }, action) => {
  console.log('Previous State:', state);
  console.log('Action:', action);

  switch (action.type) {
    case ADD_ITEM:
      /*const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);

      let newItems;
      if (existingItemIndex >= 0) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
        console.log('Item already exists. Updated quantity:', newItems);
      } else {

        newItems = [...state.items, action.payload];
        console.log('Item added to cart:', newItems);
      }
*/
      return { ...state, items: [...state.items, action.payload] };

    case REMOVE_ITEM:
      console.log('Removing item with id:', action.payload.id);
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      console.log('Updated items after removal:', updatedItems);
      return { ...state, items: updatedItems };


    default:
      return state;

  }
};
const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer
});
export default rootReducer;
export const deselectBook = (book) => ({ type: DESELECT_BOOK, payload: book });
