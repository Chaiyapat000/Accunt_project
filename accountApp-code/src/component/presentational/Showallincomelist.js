import React, { Component } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { SetIncomestroe } from '../../dataflow/action/SetIncomestroe'


class Showallincomelist extends Component {
    static navigationOptions = {
        title: 'Income List',

    };
    currencyfunc = (x) => {
        return (x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    deleteOutcomeList = (index) => {
        let incomeStore = this.props.incomeStore
        incomeStore.splice(index, 1)
        let newList = [...incomeStore]
        return this.props.SetIncomestroe(newList)
    }
    render() {
        return (
            <View style={{
                flex: 2, backgroundColor: '#3eb8d9', alignItems: 'center',
            }}>
                <View style={{

                    flex: 4, borderWidth: 8, borderColor: '#d6d7da'
                    , margin: 20, paddingTop: 10, backgroundColor: '#bcdfe3',

                    alignSelf: 'center',
                    paddingTop: 15,
                }}>
                    <View >
                        {this.props.incomeStore.map((p, index) => (
                            <View key={index} style={styles.label} >
                                <Text style={{ fontSize: 20, flexDirection: 'column', textAlign: 'center' }}
                                    onPress={() => Alert.alert(
                                        '',
                                        'เลือกรายการ',
                                        [
                                            { text: 'ลบ', onPress: () => { this.deleteOutcomeList(index); alert('รายการที่ ' + (index + 1) + ' ถูกลบเเล้ว') } },
                                            { text: 'เเก้ไข', onPress: () => { this.props.navigation.navigate('Incomeedit', { index: index, list: p }) } },

                                        ],
                                        { cancelable: false }
                                    )} >
                                    <Text style={{ flex: 1 }} >
                                        {p.date}
                                    </Text>
                                    <Text>   </Text>
                                    <Text style={{ flex: 2 }} >
                                        {p.text}
                                    </Text>
                                    <Text>   </Text>
                                    <Text style={{ flex: 3 }} >
                                        {this.currencyfunc(p.outcome)} ฿
                                    </Text>
                                </Text>
                            </View>
                        )
                        )}

                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        incomeStore: state.incomeStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetIncomestroe: (income) => dispatch(SetIncomestroe(income))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showallincomelist)

const styles = StyleSheet.create({
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        borderBottomWidth: 3,
        borderBottomColor: '#aeabab',
        flexDirection: 'column',
        width: 450,

    },
});