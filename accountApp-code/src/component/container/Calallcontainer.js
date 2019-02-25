import React, { Component } from 'react'
import {
    View, Text, Alert, StyleSheet
} from 'react-native'
import { connect } from 'react-redux';




class Calallcontainer extends Component {


    keepbalance = {
        balance: 0
    }


    sumall = (payment, saving, income) => {
        { console.log('++++++++++' + payment + '++++++++++++') }
        { console.log('++++++++++' + saving + '**************') }
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
        }

    }

    checknumber = (balance) => {
        if (balance < 0) {
            return -Math.abs(balance)
        } else return this.keepbalance.balance
    }

    componentWillReceiveProps() {

        this.keepbalance.balance = this.sumall(this.props.payment, this.props.saving, this.props.income)

    }

    render() {
        return (
            <View style={styles.card}>

                <Text style={styles.text}>
                    {this.keepbalance.balance}

                </Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    card: {
        paddingLeft: 31,
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,
    }
})

const mapStatetoProps = (state) => {
    return {
        payment: state.payment,
        saving: state.saving,

    }
}

export default connect(mapStatetoProps, null)(Calallcontainer)

