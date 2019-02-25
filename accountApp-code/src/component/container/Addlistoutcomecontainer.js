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
import { SetallListStroe } from '../../dataflow/action/SetallListStroe'


class Addlistoutcomecontainer extends Component {

    state = {
        listCategory: [{ "category": "1", "listName": "อาหาร" }, { "category": "2", "listName": "เครื่องดื่ม" }, { "category": "3", "listName": "อาหารว่าง" }, { "category": "4", "listName": "เดินทาง" }, { "category": "5", "listName": "ที่อยู่อาศัย" }, { "category": "6", "listName": "ของใช้" }, { "category": "7", "listName": "อื่นๆ" }, { "category": "8", "listName": "เงินออม" }],
        chooseCategory: 'อาหาร',
        chooseDate: new Date,
        outcomeInput: '0',
        allList: []
    }
    static navigationOptions = {
        title: 'Add Outcome',

    };
    componentDidMount() {
        this.setState({ allList: this.props.storeAllList })

    }
    componentDidUpdate() {
        this.props.SetallListStroe(this.state.allList)

    }

    commit() {
        const { chooseDate: date, chooseCategory: category, outcomeInput: outcome } = this.state;
        data = { "date": date.toString().substr(4, 12), "category": category, "outcome": outcome }
        this.setState({ allList: [...this.state.allList, ...[data]], chooseCategory: 'No Category' })
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
                            รายการที่เลือกบันทึก
                    </Text>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', width: 350, marginTop: 5 }}>
                            <Picker
                                selectedValue={this.state.chooseCategory}
                                style={{ height: 50, width: 300 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ chooseCategory: itemValue })}>
                                {this.state.listCategory.map((p, index) => (
                                    <Picker.Item key={index} label={p.listName} value={p.listName} onPress={() => this.setState({ chooseCategory: p.listName })} />
                                ))}
                            </Picker>
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

                    <Addbuttonview buttonName={'เพิ่มรายการ'} onClick={() => { this.commit() }} />
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
        storeAllList: state.allListStore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetallListStroe: (allList) => dispatch(SetallListStroe(allList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Addlistoutcomecontainer);