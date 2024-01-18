const TodoReducer = (state, action) => {
    switch(action.type){
        case 'Add task':
            return{
                ...state,
                tasks:[...state.task, action.payload]
            }
        default:
            return state
    }
}

export default TodoReducer