import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';


class Savingcontainer extends Component {

    state = {
        tableHead: ['Date', 'Category', 'Outcome', 'Income'],
        tableData: [],
        amount: 0,
        type: 'saving',
        tableamount: []
    };

    componentDidMount() {
        var array = this.props.s.map(function (obj) {
            return Object.values(obj);
        });
        this.setState({ tableData: array });

        let sum = this.props.s.map(obj => obj.outcome).reduce((acc, next) => acc + next)
        { this.setState({ amount: sum }) }
        var array2 = ['Amount', sum];
        this.setState({ tableamount: array2 })
    }

    render() {
        return (
            // this.props.li.map(a => (
            //     <View>
            //         <Text>{a.category + ', ' + a.date}</Text>
            //     </View>
            // ))
            < View >
                <Table borderStyle={{ borderWidth: 2, borderColor: '#454545' }}>
                    <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={this.state.tableData} textStyle={styles.text} />
                    <Row data={this.state.tableamount} textStyle={styles.textamount} />
                </Table>
                <Text>Amount = {this.state.amount}</Text>
            </View >

        )
    }
}
const mapStateToProps = (state) => {
    return { s: state.list };
}
export default connect(mapStateToProps)(Savingcontainer);

const styles = StyleSheet.create({

    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#dc7633' },
    text: { textAlign: 'center', fontSize: 20, margin: 6 },
    textamount: { textAlign: 'center', fontSize: 20, margin: 6, color: '#ad100d' },

})
