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
import { Addbuttonview } from '../presentational/Addbuttonview'
import { connect } from 'react-redux'
import { SetallListStroe } from '../../dataflow/action/SetallListStroe'



class Editlistoutcomecontainer extends Component {

    state = {
        listCategory: [{ "category": "1", "listName": "   อาหาร     " }, { "category": "2", "listName": "   เครื่องดื่ม   " }, { "category": "3", "listName": "   อาหารว่าง  " }, { "category": "4", "listName": "   เดินทาง    " }, { "category": "5", "listName": "   ที่อยู่อาศัย   " }, { "category": "6", "listName": "   ของใช้     " }, { "category": "7", "listName": "   อื่นๆ       " }, { "category": "8", "listName": "   เงินออม    " }],
        allList: [],
        category: 'No Category',
        date: '',
        outcome: '0',
        formEdit: {},
        formEditWorking: {},
        formEditBackUp: {},
        indexEdit: {}
    }
    static navigationOptions = {
        title: 'Edit Outcome',

    };

    componentDidMount() {
        const { navigation } = this.props;
        const index = navigation.getParam('index');
        const list = navigation.getParam('list', {});
        this.setState({ date: list.date, category: list.category, outcome: list.outcome, allList: this.props.storeAllList, indexEdit: index })
    }

    commit() {
        this.state.allList[this.state.indexEdit].date = this.state.date
        this.state.allList[this.state.indexEdit].category = this.state.category
        this.state.allList[this.state.indexEdit].outcome = this.state.outcome
        let newList = [...this.state.allList]
        this.props.SetallListStroe(newList)
        this.props.navigation.navigate('Home')
    }

    changeDataInState = (key, data) => {
        switch (key) {
            case "date": this.setState({ date: data.toString().substr(4, 12) })
                break;
            case "category": this.setState({ category: data })
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
                }} >
                    <View style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row', margin: 5 }}>
                            <Text style={styles.textstyle}>
                                วันที่
                            </Text>
                            <Item rounded style={{ backgroundColor: '#ecf0f1', paddingLeft: 10, marginLeft: 50, width: 150 }}>
                                <Text style={{ fontSize: 20 }}>
                                    {this.state.date}
                                </Text>
                            </Item>
                        </View>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', width: 200, marginTop: 5 }}>
                            <DatePicker onDateChange={(date) => this.changeDataInState('date', date)} />
                        </Item>
                    </View>
                    <View>
                        <Text style={styles.textstyle}>
                            ประเภทของรายการ
                        </Text>
                        <Item rounded style={{ backgroundColor: '#ecf0f1', width: 300, marginTop: 5 }}>
                            <Picker
                                selectedValue={this.state.category}
                                style={{ height: 50, width: 300 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ category: itemValue })}>
                                {this.state.listCategory.map((p, index) => (
                                    <Picker.Item key={index} label={p.listName} value={p.listName} onPress={() => this.changeDataInState('category', p.listName)} />
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

export const styles = StyleSheet.create({
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

export default connect(mapStateToProps, mapDispatchToProps)(Editlistoutcomecontainer)
