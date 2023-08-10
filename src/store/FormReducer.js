const initialState = {
    formData: {}
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_DATA":
            return {
                ...state,
                formData: action.payload
            }
        default:
            return state
    }
}



export const updateData = (formData) => ({
    type: "UPDATE_DATA",
    payload: formData
})