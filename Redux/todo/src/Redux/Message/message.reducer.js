// what is reducer

import { GM, GN } from "./message.action"

let initialState = {
    message: "Hello......"
}

let messageReducer = (state = initialState, action) => {
    // this is going to update/create the store based on the action type

    console.log("messageReducer -- Step 2")

    switch (action.type) {
        case GM:
            return { message: "Good Morning" };
        case GN:
            return { message: "Good Night" };
        default:
            return state;
    }
}

export { messageReducer };