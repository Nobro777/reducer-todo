export const initialState = 
    [
        {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
        },
        {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
        }
    ]

export const mainReducer = (state, action) => {
    console.log("this is my reducer action", action)
    switch(action.type){
        
        case 'NEWTODO':
            return [
                ...state,
                {task: action.payload,
                id: Date.now(),
                completed: false}
            ];

        case "TOGGLE_COMPLETED":
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                    ...todo,
                    completed: !todo.completed
                    };
                } else {
                    return todo
                }
                });

            case "CLEAR_COMPLETED":
            return state.filter(elem => {
                return (
                elem.completed === false
                )
            })
            
            default:
            return state;
}}