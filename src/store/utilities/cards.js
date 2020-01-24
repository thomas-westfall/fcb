import axios from 'axios';
// ACTION TYPES;
const FETCH_CARDS_DATA = "FETCH_CARDS_DATA";
const RESET_CARDS_DATA = "RESET_CARDS_DATA";

// ACTION CREATOR;
const fetchCardsData = (cards) => {
    return {
        type: FETCH_CARDS_DATA,
        payload: cards
    }
}

const resetCardsData = () => {
  return {
    type: RESET_CARDS_DATA
  }
}

// Thunks go here!
// export const fetchCardsDataThunk = (cards) => async (dispatch) => {
//     dispatch(fetchCardsData(cards));
// }
export const fetchCardsDataThunk = (deckid) => (dispatch) => {

    axios.get("http://localhost:5000/api/cards/d/" + deckid,{
    })
  .then(res => { // then print response status
    dispatch(fetchCardsData(res.data));
    console.log(res);
    console.log(res.data);
  })
}

export const resetCardsDataThunk = () => (dispatch) => {
  let resolvedActionObject = resetCardsData(); 
  dispatch(resolvedActionObject);
}

// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case FETCH_CARDS_DATA:
            return action.payload;
        case RESET_CARDS_DATA:
            return [];
        default:
            return state;
    }
}