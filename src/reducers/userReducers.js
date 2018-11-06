const categoryReducer = (state = {} , action) =>{
    switch (action.type) {
        case 'GET_CURRENT_USER' :
            console.log(state, action);
            return {
                ...state,
                user: action.user,
                loading: false
            };

        default: // need this for default case
            return state
    }
}

export default categoryReducer;