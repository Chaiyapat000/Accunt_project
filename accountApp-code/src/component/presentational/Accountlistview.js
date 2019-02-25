import React, { Component } from 'react'
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native'
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component'
//import Chartview from './Chartview'


class Accountlistview extends Component {

    state = {
        tablehead: ['Category', 'Amount',],
        tablepayment: [],
        tablebill: [],
        tablesaving: [],
        tableincome: [],
        tablebalance: [],
    }

    currencyfunc = (x) => {
        return (x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    componentDidMount() {
        var array2 = ['Payment', this.currencyfunc(this.props.payment) + ' ฿'];
        this.setState({ tablepayment: array2 });

        var array3 = ['Saving', this.currencyfunc(this.props.saving) + ' ฿'];
        this.setState({ tablesaving: array3 });

        var array4 = ['Income', this.currencyfunc(this.props.income) + ' ฿'];
        this.setState({ tableincome: array4 });

        var array5 = ['Balance', this.currencyfunc(this.props.balance) + ' ฿'];
        this.setState({ tablebalance: array5 });

    }


    render() {
        const income = this.props.income || 0
        const payment = this.props.payment || 0
        const saving = this.props.saving || 0
        const balance = this.props.balance || 0
        const hincome = ((income / income) * 100)
        const hpayment = ((payment * 100) / income)
        // const hbill = ((bill * 100) / income)
        const hsaving = ((saving * 100) / income)
        const hbalance = ((balance * 100) / income)
        const scale = 6


        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {/* ////////////////////////////////table/////////////////// */}
                    <View style={{
                        padding: 5, paddingTop: 10, width: 820, height: 300,
                        borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'column',
                        alignItems: 'center', marginTop: 20, backgroundColor: '#f36b0d'
                    }}>
                        <View style={{ flexDirection: 'row', }} >
                            {this.state.tablehead.map((head, index) =>
                                <View key={index} style={{
                                    backgroundColor: '#9bd8e8', borderColor: '#d6d7da',
                                    borderWidth: 2, width: 350, height: 50, marginTop: 15,
                                    paddingTop: 5
                                }}>
                                    <Text style={styles.headtext}>
                                        {head}
                                    </Text>
                                </View>
                            )}
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            {this.state.tableincome.map((incomemap, index) =>
                                <View key={index} style={{
                                    backgroundColor: '#51af41', borderColor: '#d6d7da',
                                    borderWidth: 1, width: 350, height: 45,
                                }}>
                                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '300', paddingTop: 5 }}>
                                        {incomemap}
                                    </Text>
                                </View>

                            )}
                        </View>

                        <View style={{ flexDirection: 'row', }} >
                            {this.state.tablesaving.map((savingmap, index) =>
                                <View key={index} style={{
                                    backgroundColor: '#bc68e8', borderColor: '#d6d7da',
                                    borderWidth: 1, width: 350, height: 45,
                                }}>
                                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '300', paddingTop: 5 }}>
                                        {savingmap}
                                    </Text>
                                </View>

                            )}
                        </View>

                        <View style={{ flexDirection: 'row', }} >
                            {this.state.tablepayment.map((paymentmap, index) =>
                                <View key={index} style={{
                                    backgroundColor: '#f95151', borderColor: '#d6d7da',
                                    borderWidth: 1, width: 350, height: 45,
                                }}>
                                    <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: '300', paddingTop: 5 }}>
                                        {paymentmap}
                                    </Text>
                                </View>
                            )}
                        </View>

                        <View style={{ flexDirection: 'row', }} >
                            {this.state.tablebalance.map((balancemap, index) =>
                                <View key={index} style={{
                                    backgroundColor: '#9bd8e8', borderColor: '#d6d7da',
                                    borderWidth: 2, width: 350, height: 50,
                                }}>
                                    <Text style={styles.balancetext}>
                                        {balancemap}
                                    </Text>
                                </View>
                            )}
                        </View>

                    </View>
                    {/* ////////////////////////////////table/////////////////// */}
                    {/* ////////////////////////////Graph///////////////////////////////////// */}
                    <View style={{ flexDirection: 'row' }}>
                        {/* /////////////////////Text of graph///////////////////////////////////  */}
                        <View style={{
                            flexDirection: 'column', borderWidth: 3,
                            borderColor: '#d6d7da', width: 120,
                            height: 190, paddingTop: 40, height: 270,
                            backgroundColor: '#b7dab7',
                        }}>
                            <View style={styles.bordergraphtext}>
                                <Text style={styles.graphtext}>
                                    Income:{income}
                                </Text>
                            </View>
                            <View style={styles.bordergraphtext}>
                                <Text style={styles.graphtext}>
                                    saving:{saving}
                                </Text>
                            </View>
                            <View style={styles.bordergraphtext}>
                                <Text style={styles.graphtext}>
                                    payment:{payment}
                                </Text>
                            </View>
                            <View style={styles.bordergraphtext}>
                                <Text style={styles.graphtext}>
                                    balance:{balance}
                                </Text>
                            </View>
                        </View>
                        {/* /////////////////////Text of graph///////////////////////////////////  */}
                        {/* ////////////////////////////Graph///////////////////////////////////// */}
                        <View style={styles.bordergraph}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{
                                    width: hincome * scale,
                                    height: 50,
                                    backgroundColor: '#51af41',
                                    paddingTop: 10
                                }} >
                                </View>

                                <View style={{ flexDirection: 'column' }}>
                                    {/* ================================================  */}
                                    <View style={{
                                        width: hsaving * scale,
                                        height: 50,
                                        backgroundColor: '#bc68e8',
                                        paddingTop: 10
                                    }} >

                                    </View>
                                    <View style={{
                                        width: hpayment * scale,
                                        height: 50,
                                        backgroundColor: '#f95151',
                                        paddingTop: 10
                                    }} >

                                    </View>
                                    {/*  <View style={{
                            width: hbill * scale,
                            height: 50,
                            backgroundColor: '#1a75ff',
                            paddingTop: 10
                            }} >
                            </View> */}
                                    {/* =============================================  */}
                                    <View style={{
                                        width: hbalance * scale,
                                        height: 50,
                                        backgroundColor: '#9bd8e8',
                                        paddingTop: 10
                                    }} >
                                    </View>
                                </View>
                                {/* ////////////////////////////Graph///////////////////////////////////// */}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    headstyle: {
        backgroundColor: '#5dade2', borderColor: '#d6d7da',
        borderWidth: 2, width: 350, height: 50, marginTop: 15
    },
    headtext: { fontSize: 25, textAlign: 'center', fontWeight: '900', },
    text: { margin: 6, fontSize: 25, paddingLeft: 10 },
    wrapper: { flexDirection: 'row' },
    balance: { height: 50, backgroundColor: '#ffa366', },
    balancetext: { fontSize: 25, margin: 6, textAlign: 'center', fontWeight: '900', },
    graphtext: {
        fontSize: 15, textAlign: 'center', fontWeight: '900',
        padding: 16, paddingTop: 10,
    },
    bordergraphtext: {
        flexDirection: 'column', borderWidth: 1, borderColor: '#d6d7da'
        , width: 120, height: 50,
    },
    bordergraph: {
        padding: 5, paddingTop: 40, borderWidth: 3,
        borderColor: '#d6d7da', width: 700, height: 270,
        backgroundColor: '#f36b0d'

    }
});



export default Accountlistview;

