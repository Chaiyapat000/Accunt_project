import React, { Component } from 'react'
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native'
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
import { Showhead, Showlist, Showsum } from '../presentational/Tableshowsumview'

class Paycontainer extends Component {

    state = {
        tableHead: ['Date', 'Category', 'Outcome'],
        tableData: [],
        amount: 0,
        tableamount: []
    };
    static navigationOptions = {
        title: 'Payment List',

    };
    componentDidMount() {

        var array = this.props.storeAllList.map(function (obj) {
            return Object.values(obj);
        }
        );
        this.setState({ tableData: array });
        var a = this.props.payment + this.props.saving
        var array2 = ['', 'Amount', a];
        this.setState({ tableamount: array2 })

    }

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#3eb8d9', height: 2000 }}>
                    <View style={styles.bordertable}>
                        <Showhead head={this.state.tableHead} />
                        <Showlist list={this.state.tableData} />
                        <Showsum sum={this.state.tableamount} />
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
        saving: state.saving
    };
}
export default connect(mapStateToProps)(Paycontainer);

const styles = StyleSheet.create({
    bordertable: {
        padding: 5, paddingTop: 5, borderWidth: 2,
        borderColor: '#d6d7da', flexDirection: 'column',
        alignItems: 'center', marginTop: 20, backgroundColor: '#f36b0d',
        width: 830, marginLeft: 95,
    }
})