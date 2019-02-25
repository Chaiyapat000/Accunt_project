import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux';
import { setPayment, setSaving, setIncome, setBalance } from '../../dataflow/action/Setbalanceaction';


class Dividecontainer extends Component {

    state = {}

    componentDidUpdate(prevProps) {



        console.log('++++' + this.props.summaryBalance + '+++')
        if (this.props.summaryBalance !== prevProps.summaryBalance) {
            this.props.balance(this.props.summaryBalance)
        }


        console.log('++++' + this.props.summaryIncome + '+++')
        if (this.props.summaryIncome !== prevProps.summaryIncome) {
            this.props.income(this.props.summaryIncome)

        }


        console.log('----' + this.props.summaryOutcome.pay + '+++')
        if (this.props.summaryOutcome.pay !== prevProps.summaryOutcome.pay) {
            this.props.payment(this.props.summaryOutcome.pay)

        }


        console.log('----' + this.props.summaryOutcome.save + '+++')
        if (this.props.summaryOutcome.save !== prevProps.summaryOutcome.save) {
            this.props.saving(this.props.summaryOutcome.save)
        }

    }

    render() {
        return (
            <View>
                <Text />
            </View>
        );
    }
}

const sumoutcome = (storeList) => {

    let o = { save: 0, pay: 0 };
    storeList.map((obj) => {
        const outcome = parseFloat(obj.outcome) || 0;
        if (obj.category == "เงินออม") {
            o.save = o.save + outcome;
        } else {
            o.pay = o.pay + outcome;
        }
    })
    return o;

}

const sumincome = (storeIncome) => {
    let a = 0;
    storeIncome.map((obj) => {
        const income = parseFloat(obj.outcome) || 0;
        a = a + income
    })
    return a;
}

const sumbalance = (payment, saving, income) => {

    let b = 0;
    b = income - payment - saving
    return b;
}

const mapStateToProps = (state) => {
    return {
        summaryOutcome: sumoutcome(state.allListStore),
        summaryIncome: sumincome(state.incomeStore),
        summaryBalance: sumbalance(state.payment, state.saving, state.income)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        payment: (payment) => { dispatch(setPayment(payment)) },
        saving: (saving) => { dispatch(setSaving(saving)) },
        income: (income) => { dispatch(setIncome(income)) },
        balance: (balance) => { dispatch(setBalance(balance)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dividecontainer);

