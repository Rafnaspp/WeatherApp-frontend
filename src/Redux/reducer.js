const initialState ={
    authData:null,
}

const reducer = (state=initialState ,action)=>{
    console.log('called reducerr');
    console.log(action.data);
    switch (action.type){
        case "LOGIN_USER":
            // localStorage.setItem("profile",JSON.stringify(action?.data))
            return {
                // ...state,
                authData:action.data,
            }
            default:
                return state;
    }
}


export default reducer
