import React, { Component } from 'react'
import {
    View,
    Text,
    Picker,
    StyleSheet
} from 'react-native'

import {
    Input,
    Item,
    DatePicker,

} from 'native-base';

import { connect } from 'react-redux'
import { Addbuttonview } from '../presentational/Addbuttonview'
import { SetIncomestroe } from '../../dataflow/action/SetIncomestroe'


class Editlistincomecontainer extends Component {
    state = {
        allList: [],
        textInput: '',
        date: '',
        outcome: '0',
        formEdit: {},
        formEditWorking: {},
        formEditBackUp: {},
        indexEdit: {}
    }
    static navigationOptions = {
        title: 'Edit Income',

    };


    componentDidMount() {
        const { navigation } = this.props;
        const index = navigation.getParam('index');
        const list = navigation.getParam('list', {});
        this.setState({ date: list.date, textInput: list.textInput, outcome: list.outcome, allList: this.props.incomeStore, indexEdit: index })
    }

    commit() {
        this.state.allList[this.state.indexEdit].date = this.state.date
        this.state.allList[this.state.indexEdit].textInput = this.state.textInput
        this.state.allList[this.state.indexEdit].outcome = this.state.outcome
        let newList = [...this.state.allList]
        this.props.SetIncomestroe(newList)
        this.props.navigation.navigate('Home')
    }

    changeDataInState = (key, data) => {
        switch (key) {
            case "date": this.setState({ date: data.toString().substr(4, 12) })
                break;
            case "text": this.setState({ textInput: data })
                break;
            case "outcome": this.setState({ outcome: data })
                break;
            case "saveEdit": this.commit()
                break;
            default: null
                break;
        }
        return this.setState({ formEditWorking: data })

    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3eb8d9' }}>
                <View style={{
                    padding: 5, paddingTop: 10, width: 820, height: 250,
                    borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'column',
                    paddingLeft: 100, marginTop: 20, backgroundColor: '#bcdfe3',
                }}>
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={styles.textstyle}>
                                วันที่
                            </Text>
                            <Item rounded style={{ backgroundColor: '#ecf0f1', paddingLeft: 10, marginLeft: 50, width: 150 }}>
                                <Text>
                                    {this.state.date}
                                </Text>
                            </Item>
                        </View>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', paddingLeft: 10, width: 150 }}>
                            <DatePicker onDateChange={(date) => this.changeDataInState('date', date)} />
                        </Item>
                        <View style={{ padding: 5 }}>
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>
                                    รายละเอียด   {this.state.text}
                                </Text>
                                <Item rounded style={{ backgroundColor: '#ecf0f1', paddingLeft: 10, marginLeft: 50, width: 150 }}>
                                    <Text>
                                        {this.state.text}
                                    </Text>
                                </Item>
                            </View>
                            <Item rounded style={{ backgroundColor: '#ecf0f1', width: 300, marginTop: 5 }}>
                                <Input placeholder='Note' onChangeText={(text) => { this.changeDataInState('date', text) }} />
                            </Item>
                        </View>
                    </View>
                </View>

                <View style={{
                    padding: 5, paddingTop: 10, width: 820, height: 250,
                    borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'column',
                    marginTop: 20, backgroundColor: '#bcdfe3',
                    alignItems: 'center',

                }}>
                    <View style={{ flexDirection: 'row', margin: 5 }}>
                        <Text style={styles.textstyle}>
                            จำนวนเงิน
                            </Text>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', paddingLeft: 20, marginLeft: 50, width: 150 }}>
                            <Text style={{ fontSize: 20 }}>
                                {this.state.outcome}
                            </Text>
                        </Item>
                    </View>
                    <Item rounded style={{ backgroundColor: '#ecf0f1', width: 500, margin: 30, }}>
                        <Input keyboardType='numeric' placeholder='จำนวนเงิน' onChangeText={(text) => this.changeDataInState('outcome', text)} />
                    </Item>

                    <Addbuttonview buttonName={'เเก้ไขข้อมูล'} onClick={() => this.changeDataInState('saveEdit', '')} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textstyle: {
        fontSize: 25, fontWeight: '700'
    }
})

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

export default connect(mapStateToProps, mapDispatchToProps)(Editlistincomecontainer)