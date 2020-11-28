import {
    CHANGE_POMODORO,
    CHANGE_SHORT_BREAK,
    CHANGE_LONG_BREAK,
    CHANGE_COUNT
} from '../actions/types'

const beginningTime = {
    pomodoro: {
        minutes: 25,
        seconds: "00"
    },
    
    shortbreak: {
        minutes: 5,
        seconds: "00"
    },
    
    longbreak: {
        minutes: 15,
        seconds: "00"
    },
    count: 0
}

export default (state = beginningTime, action) => {
    switch(action.type)
    {
        case CHANGE_POMODORO:
            return {...state, pomodoro: action.payload}
            
        case CHANGE_SHORT_BREAK:
            return {...state, shortbreak: action.payload}
                
        case CHANGE_LONG_BREAK:
            return {...state, longbreak: action.payload}

        case CHANGE_COUNT:
            return {...state, count: action.payload + 1}
        
        default: 
            return state
    }
}