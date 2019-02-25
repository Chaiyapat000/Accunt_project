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


class Addincomecontainer extends Component {

    state = {
        textInput: '',
        chooseDate: new Date,
        outcomeInput: '0',
        inclomeList: []
    }
    static navigationOptions = {
        title: 'Add Income',

    };
    componentDidMount() {
        this.setState({ inclomeList: this.props.incomeStore })

    }
    componentDidUpdate() {
        this.props.SetIncomestroe(this.state.inclomeList)

    }

    commit() {
        const { chooseDate: date, textInput: text, outcomeInput: outcome } = this.state;
        data = { "date": date.toString().substr(4, 12), "text": text, "outcome": outcome }
        this.setState({ inclomeList: [...this.state.inclomeList, ...[data]], chooseCategory: 'No Category' })
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3eb8d9' }}>
                <View style={{
                    padding: 5, paddingTop: 10, width: 820, height: 250,
                    borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'column',
                    paddingLeft: 100, marginTop: 20, backgroundColor: '#bcdfe3',

                }}>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.textstyle}>
                            วันที่ต้องการทำการลงรายการ
                        </Text>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', width: 200, marginTop: 5 }}>
                            <DatePicker defaultDate={new Date} onDateChange={(date) => this.setState({ chooseDate: date })} />
                        </Item>
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={styles.textstyle}>
                            รายละเอียดของรายรับ   {this.state.textInput}
                        </Text>

                        <Item rounded style={{ backgroundColor: '#ecf0f1', width: 250, marginTop: 5 }}>
                            <Input placeholder='Note' onChangeText={(text) => { this.setState({ textInput: text }) }} />
                        </Item>

                    </View>
                </View>

                <View style={{
                    padding: 5, paddingTop: 10, width: 820, height: 250,
                    borderWidth: 2, borderColor: '#d6d7da', flexDirection: 'column',
                    marginTop: 20, backgroundColor: '#bcdfe3',
                    alignItems: 'center',

                }}>

                    <Text style={styles.textstyle}>
                        จำนวนเงินที่ต้องการบันทึก
                        </Text>
                    <Item rounded style={{ backgroundColor: '#ecf0f1', width: 500, margin: 30, }}>
                        <Input keyboardType='numeric' placeholder='จำนวนเงิน' onChangeText={(text) => this.setState({ outcomeInput: text })} />
                    </Item>
                    <Item rounded>
                        <Addbuttonview buttonName={'เพิ่มรายการ'} onClick={() => { this.commit() }} />
                    </Item>
                </View>
            </View>

        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Addincomecontainer);