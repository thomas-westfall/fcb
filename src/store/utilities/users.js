import axios from 'axios';
// ACTION TYPES;
const REGISTER_USER = "REGISTER_USER";
const REGISTER_ERROR = "REGISTER_ERROR";

// ACTION CREATOR;

const registerError = (err) => {
    return {
        type: REGISTER_ERROR,
        payload: err
    }
}
const registerUser = (user) => {
    return {
        type: REGISTER_USER,
        payload: user
    }
}

// Thunks go here!
export const registerUserThunk = (user) => async (dispatch) => {
    await axios.post(`https://cors-anywhere.herokuapp.com/https://fcbe123.herokuapp.com/auth/signup`, {
        username : user.username,
        email : user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password : user.password,
        phoneNumber: user.phoneNumber
    })
    .then(res => {
        console.log(res);
        dispatch(registerUser({success : "User Successfully Registered!"}));
    })
    .catch(err => {
        console.log(err.response)
        dispatch(registerError(err));
        
    })
}


// REDUCER FUNCTION;
export default (state = [], action) => {
    switch (action.type) {
        case REGISTER_USER:
            return action.payload;
        case REGISTER_ERROR:
            return action.payload;
        default:
            return state;
    }
}