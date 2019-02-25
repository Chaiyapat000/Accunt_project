import React, { Component } from 'react'
import {
    View,
    Text,
    Alert,
    StyleSheet,
    ScrollView
} from 'react-native'

Showalloutcomelistview = (props) => {

    return (

        <View>
            <View>
                {props.allList.map((p, index) => (
                    <View key={index} style={styles.label} >
                        <Text style={{ fontSize: 20, flexDirection: 'column', }}
                            onPress={() => Alert.alert(
                                '',
                                'เลือกรายการ',
                                [
                                    { text: 'ลบ', onPress: () => { props.deleteOutcomeList(index); alert('รายการที่ ' + (index + 1) + ' ถูกลบเเล้ว') } },
                                    { text: 'เเก้ไข', onPress: () => { props.navigation.navigate('Editlistoutcome', { index: index, list: p }) } },
                                ],
                                { cancelable: false }
                            )} >
                            <Text>  </Text>
                            <Text style={{ flex: 1, textAlign: 'left' }} >{p.date}</Text>
                            <Text>         </Text>
                            <Text style={{ flex: 1, textAlign: 'center' }} >{p.category}</Text>
                            <Text>         </Text>
                            <Text style={{ flex: 1, textAlign: 'right' }} >{p.outcome} ฿</Text>
                            <Text>         </Text>
                        </Text>
                    </View>
                )
                )}
            </View>
        </View>

    )
}
export default Showalloutcomelistview



const styles = StyleSheet.create({
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        margin: 2,
        borderBottomWidth: 3,
        borderBottomColor: '#aeabab',
        flexDirection: 'column',
        width: 400,

    },
});