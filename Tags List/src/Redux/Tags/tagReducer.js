const initialState = []

const tagReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_TAG" :
            state.push({
                title: action.payload,
                id: action.id
            })
            
            return state

        case "REMOVE_TAG" :
            const newTagState = state.filter(item => item.id !== action.payload.id)
            return state = [...newTagState]

        default :
            return state
    }
}

export default tagReducer;