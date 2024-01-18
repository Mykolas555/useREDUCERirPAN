import { useContext, useReducer } from "react";
import TodoReducer from "../reducers/TodoReducer";
import React from "react";
import { newTask, openForm, deleteTask } from "../actions/TodoActions";

const AppContext = React.createContext();//musu kontekstas kuriame viskas judes

const initialState = {
    tasks:[
        {
            id:1,
            title:'test task 1',
            desc:'test task 1 description'
        },
        {
            id:2,
            title:'test task 2',
            desc:'test task 2 description'
        },
        {
            id:3,
            title:'test task 3',
            desc:'test task 3 description'
        },
        {
            id:4,
            title:'test task 4',
            desc:'test task 4 description'
        },
        {
            id:5,
            title:'test task 5',
            desc:'test task 5 description'
        },
        {
            id:6,
            title:'test task 6',
            desc:'test task 6 description'
        }
    ], 
    isOpne:false
}

const AppProvider = ({children}) =>{ //tiekejas kuris kazka tiekia

    const[ state, dispatch ] = useReducer(TodoReducer, initialState)
    
    const addTask = (data) => {
        dispatch(newTask(data))
    }

    const handleForm = (formStatus) => {
        dispatch(openForm(formStatus))
    }

    const removeTask = (id) => {
        dispatch(deleteTask(id))
    }

    return(
        <AppContext.Provider 
            value={{
                ...state,
                addTask,
                handleForm,
                removeTask
            }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}