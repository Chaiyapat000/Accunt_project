import Controloutcomecontainer from '../container/Controloutcomecontainer'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Fab, Button, Icon } from 'native-base';
import { Addbuttonview } from '../presentational/Addbuttonview'
import { connect } from 'react-redux'
import { SetallListStroe } from '../../dataflow/action/SetallListStroe'
import { SetIncomestroe } from '../../dataflow/action/SetIncomestroe'
import Dividecontainer from '../container/Dividecontainer'
import Addincomecontainer from '../container/Addincomecontainer'
import Calallcontainer from '../container/Calallcontainer'

class Homeview extends Component {
    state = {
        startAllList: [
            { "date": "Jul 6  2018", "category": "อาหาร", "outcome": "150" },
            { "date": "Jul 7  2018", "category": "เครื่องดื่ม", "outcome": "15" },
            { "date": "Jul 8  2018", "category": "เดินทาง", "outcome": "80" },
            { "date": "Jul 8  2018", "category": "เงินออม", "outcome": "80" },
            { "date": "Jul 8  2018", "category": "เงินออม", "outcome": "90" }],
        startAllIncome: [
            { "date": "Jul 6  2018", "text": "เงินเดือน", "outcome": 18000 },
            { "date": "Jul 7  2018", "text": "เงินโบบัส", "outcome": 15000 },
        ],
        allIncome: [],
        allList: [],
        stateForUser: 1,
    }
    static navigationOptions = {
        title: 'Home',

    };
    componentDidMount() {
        if (this.state.stateForUser == 1) {
            this.props.SetallListStroe(this.state.startAllList)
            this.props.SetIncomestroe(this.state.startAllIncome)
            this.setState({ stateForUser: 2 })
        } else {
            this.setState({ allList: this.props.storeAllList });
            this.setState({ allIncome: this.props.income });
        }
    }

    componentDidUpdate() {
        if (this.state.stateForUser == 2) {
            this.setState({ allList: this.props.storeAllList });
            this.setState({ allIncome: this.props.income });
            this.setState({ stateForUser: 3 });
        }

    }

    currencyfunc = (x) => {
        return (x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    render() {

        return (
            <ScrollView>
                {console.log(this.currencyfunc(this.props.income))}
                <View style={{
                    flex: 2, backgroundColor: '#3eb8d9', alignItems: 'center',
                }}>

                    <View style={{
                        flex: 3, borderWidth: 3, borderColor: '#d6d7da'
                        , margin: 20, backgroundColor: '#f8cba1'

                    }}>
                        <Dividecontainer />

                        <View>
                            <View style={{ backgroundColor: '#f36b0d', width: 820, }}>
                                <Text style={styles.label}> Summary</Text>
                            </View>
                            <View style={styles.card}>
                                <Image style={styles.stretch} source={require('../../../Image/budget.png')} />
                                <Text style={styles.font} onPress={() => this.props.navigation.navigate('Incomeview')}>Income       {this.currencyfunc(this.props.income)} ฿</Text>
                            </View>
                            <View style={styles.card}>
                                <Image style={styles.stretch} source={require('../../../Image/up-arrow.png')} />
                                <Text style={styles.font} onPress={() => this.props.navigation.navigate('Paycontainer')} >Expense       {this.currencyfunc(this.props.saving + this.props.payment)} ฿</Text>
                            </View>

                            <View style={styles.card}>
                                <Image style={styles.stretch} source={require('../../../Image/check-mark.png')} />
                                <Text style={styles.font} onPress={() => this.props.navigation.navigate('Accountcontainer')} >Balance       {this.currencyfunc(this.props.balance)} ฿</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{
                        flex: 4, borderWidth: 3, borderColor: '#d6d7da'
                        , margin: 20, paddingTop: 10, backgroundColor: '#bcdfe3'
                    }} >
                        <View>
                            <View style={{ backgroundColor: '#f36b0d', width: 820, }}>
                                <Text style={styles.label}> List</Text>
                            </View>
                            <View style={styles.control}>
                                <Controloutcomecontainer navigation={this.props.navigation} />
                            </View>
                            {/* <View style={styles.control}>
                                <Addbuttonview buttonName={'เพิ่มรายการ'} onClick={() => { this.props.navigation.navigate('Addoutcome') }} />
                            </View> */}
                        </View>
                        <View>
                            <Fab
                                active={this.state.active}
                                direction="left" position="bottomLeft"
                                containerStyle={{}}
                                style={{ backgroundColor: '#3eb8d9' }}
                                position="bottomRight"
                                onPress={() => this.setState({ active: !this.state.active })}>
                                <Text style={{ fontSize: 15 }}>
                                    Money
                                    </Text>
                                <Button onPress={() => { this.props.navigation.navigate('Addoutcome') }} style={{ backgroundColor: '#f36b0d' }}>
                                    <Text style={{ fontSize: 15, color: '#ffffff' }}>OUT</Text>
                                </Button>

                                <Button onPress={() => { this.props.navigation.navigate('Addincome') }} style={{ backgroundColor: '#f36b0d' }}>
                                    <Text style={{ fontSize: 15, color: '#ffffff' }}>IN</Text>
                                </Button>
                            </Fab>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storeAllList: state.allListStore,
        payment: state.payment,
        saving: state.saving,
        income: state.income,
        balance: state.balance
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        SetallListStroe: (allList) => dispatch(SetallListStroe(allList)),
        SetIncomestroe: (allIncome) => dispatch(SetIncomestroe(allIncome))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homeview)

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        padding: 1,
        marginRight: 5
    },
    stretch: {
        width: 40,
        height: 40,
        marginRight: 5
    },
    label: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 15,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#aeabab',
        marginLeft: 5,
        marginRight: 5

    },
    font: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,

    },
    control: {
        alignSelf: 'center',
        paddingTop: 15,
    }
});