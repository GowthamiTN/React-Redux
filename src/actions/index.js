export const SET_BOOKS='SET_BOOKS';
export const SELECT_BOOK='SELECT_BOOK';
export const ADD_ITEM='ADD_ITEM';
export const REMOVE_ITEM='REMOVE_IIEM';
export const DESELECT_BOOK = 'DESELECT_BOOK';
export const setBooks=(books)=>({type:SET_BOOKS,payload:books});
export const selectBook=(book)=>({type:SELECT_BOOK,payload:book})
export const addItem=(item)=>({type:ADD_ITEM,payload:item})
export const removeItem=(id)=>({type:REMOVE_ITEM, payload: { id }})
export const deselectBook = (book) => ({
    type: DESELECT_BOOK,
    payload: book
  });
