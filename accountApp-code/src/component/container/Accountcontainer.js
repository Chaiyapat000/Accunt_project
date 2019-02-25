import React, { Component } from 'react'
import {
    View, Text, StyleSheet
} from 'react-native'
import { connect } from 'react-redux';
import Accountlistview from '../presentational/Accountlistview'

/* const CheckCondidtion = (props) => {

    const amount = props.amount
    const type = props.type
    if ((amount >= 0 && type == 'Payment') || (amount >= 0 && type == 'Bill')) {
        return -Math.abs(amount)
    } else if ((amount >= 0 && type == 'Saving') || (amount >= 0 && type == 'Income')) {
        return amount
    }
    else { return 'ERRoR!!!' }

    /* if (income > 0 && outcome == 0) {
        return sum = income + amount
    } else if (income == 0 && outcome > 0) ,
        return sum = amount - outcome
    } else if (income > 0 && outcome > 0) {,
        return sum = 'ERROR!!!!'
    } //ใช้สำหรับคิด income-outcomeได้เลย,
}*/


class Accountcontainer extends Component {

    keepbalance = {
        balance: 0
    }
    static navigationOptions = {
        title: 'Balance',

    };


    sumall = (payment, saving, income) => {

        const pay = parseInt(payment) || 0
        const save = parseInt(saving) || 0
        const inc = parseInt(income) || 0
        if ((pay >= 0) && (save >= 0)) {
            save1 = -Math.abs(save)
            pay1 = -Math.abs(pay)

            if (pay1 <= 0 || save1 <= 0) {
                const balance = save1 + pay1 + parseInt(this.keepbalance.balance)
                return this.keepbalance.balance = balance + inc

            } else {
                return this.keepbalance.balance + '---ERROR!!---'
            }

            //console.log('+++++++++++' + save1 + '+++++++++++++++++')
        }

    }



    checknumber = (balance) => {
        if (balance < 0) {
            return -Math.abs(balance)
        } else return this.keepbalance.balance

    }

    componentWillMount() {
        this.keepbalance.balance = this.sumall(this.props.payment, this.props.saving, this.props.income)
    }

    render() {
        return (
            <View style={styles.accountview}>

                < Accountlistview payment={this.props.payment || 0}
                    saving={this.props.saving || 0}
                    balance={this.keepbalance.balance || 0}
                    income={this.props.income || 0} />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    accountview: {
        backgroundColor: '#3eb8d9',
        flex: 1,
        alignItems: 'center'

    },
});

export const mapStatetoProps = (state) => {
    return {
        payment: state.payment,
        saving: state.saving,
        income: state.income
    }
}


export default connect(mapStatetoProps, null)(Accountcontainer)