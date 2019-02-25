import { combineReducers } from 'redux'
import { Setalllistreducer } from '../reducer/Setalllistreducer'
import { set_payment, set_saving, set_income, set_balance } from './Setbalancereducer'
import { Setincomereducer } from './Setincomereducer'

export default combineReducers({
    allListStore: Setalllistreducer,
    payment: set_payment,
    saving: set_saving,
    incomeStore: Setincomereducer,
    income: set_income,
    balance: set_balance
});