// import { SET_PAYMENT, SET_SAVING } from '../action/Setbalanceaction'


export function set_payment(state = 0, action) {
    switch (action.type) {
        case 'SET_PAYMENT':
            return action.data
        default:
            return state
    }
}
export function set_saving(state = 0, action) {
    switch (action.type) {
        case 'SET_SAVING':
            return action.data
        default:
            return state
    }
}

export function set_income(state = 0, action) {
    switch (action.type) {
        case 'SET_INCOME':
            return action.data
        default:
            return state
    }
}

export function set_balance(state = 0, action) {
    switch (action.type) {
        case 'SET_BALANCE':
            return action.data
        default:
            return state
    }
}