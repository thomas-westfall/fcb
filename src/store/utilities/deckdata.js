import axios from 'axios';
// ACTION TYPES;
const FETCH_DECK_DATA = "FETCH_DECK_DATA";
const RESET_DECK_DATA = "RESET_DECK_DATA";

// ACTION CREATOR;
const fetchDeckData = (deckdata) => {
    return {
        type: FETCH_DECK_DATA,
        payload: deckdata
    }
}

const resetDeckData = () => {
  return {
    type: RESET_DECK_DATA,
    payload: {}
  }
}

// Thunks go here!
export const fetchDeckDataThunk = (deckid) => (dispatch) => {

    axios.get("https://fcbe123.herokuapp.com/api/decks/d/" + deckid,{
    })
  .then(res => { // then print response status
    dispatch(fetchDeckData(res.data));
    console.log(res.data);
  })
}

export const resetDeckDataThunk = () => (dispatch) => {
  let resolvedActionObject = resetDeckData(); 
  dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_DECK_DATA:
            return action.payload;
        case RESET_DECK_DATA:
            return action.payload;
        default:
            return state;
    }
}