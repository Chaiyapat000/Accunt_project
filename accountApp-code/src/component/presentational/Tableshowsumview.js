import React, { Component } from 'react'
import {
    View, Text, StyleSheet, ScrollView
} from 'react-native'


export class Showhead extends Component {
    render() {
        return (<View style={{ flexDirection: 'row', }} >
            {this.props.head.map((head, index) =>
                <View key={index} style={{
                    backgroundColor: '#9bd8e8', borderColor: '#d6d7da',
                    borderWidth: 2, width: 250, height: 50, marginTop: 15,
                    paddingTop: 5
                }}>
                    <Text style={styles.headtext}>
                        {head}
                        {console.log(head)}
                    </Text>
                </View>
            )}
        </View>)
    }
}

export class Showlist extends Component {


    currencyfunc = (x) => {

        return (x).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
    render() {
        return (<View style={{ flexDirection: 'column', }} >
            {this.props.list.map((list, index) =>
                <View key={index} style={{ flexDirection: 'row', }}>
                    <View style={styles.tableliststyle}>
                        <Text style={styles.textliststyle}>
                            {list[0]}
                        </Text>
                    </View>

                    <View style={styles.tableliststyle}>
                        <Text style={styles.textliststyle}>
                            {list[1]}
                        </Text>
                    </View>

                    <View style={styles.tableliststyle}>
                        <Text style={styles.textliststyle}>
                            {this.currencyfunc(parseInt(list[2]))} ฿
                        </Text>
                    </View>
                </View>
            )}
        </View>)
    }
}

export class Showsum extends Component {
    render() {
        return (<View style={{ flexDirection: 'row', }} >
            {this.props.sum.map((head, index) =>
                <View key={index} style={{
                    backgroundColor: '#9bd8e8', borderColor: '#d6d7da',
                    borderWidth: 2, width: 250, height: 50, marginTop: 6,
                    paddingTop: 5
                }}>
                    <Text style={styles.headtext}>
                        {head}
                    </Text>
                </View>
            )}
            {console.log('---++++++-----' + this.props.sum[0])}
        </View>
        )
    }
}




const styles = StyleSheet.create({

    headtext: { fontSize: 25, textAlign: 'center', fontWeight: '900', },
    text: { margin: 6, fontSize: 25, paddingLeft: 10 },

    bordergraphtext: {
        flexDirection: 'column', borderWidth: 1, borderColor: '#d6d7da'
        , width: 120, height: 50,
    },
    bordergraph: {
        padding: 5, paddingTop: 40, borderWidth: 3,
        borderColor: '#d6d7da', width: 700, height: 270,
        backgroundColor: '#f36b0d'
    },
    tableliststyle: {
        backgroundColor: '#f99a40', borderColor: '#d6d7da',
        borderWidth: 1, width: 250, height: 45,
    },
    textliststyle: {
        fontSize: 20, textAlign: 'center', fontWeight: '500', paddingTop: 5
    },
    tableDateliststyle: {
        backgroundColor: '#f99a40', borderColor: '#d6d7da',
        borderWidth: 1, width: 250, height: 45,
    },

});