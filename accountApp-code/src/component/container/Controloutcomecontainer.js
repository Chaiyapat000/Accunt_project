import React, { Component } from 'react'
import { View } from 'react-native'

import { connect } from 'react-redux'

import Showalloutcomelistview from '../presentational/Showalloutcomelistview'
import { SetallListStroe } from '../../dataflow/action/SetallListStroe'

class Controloutcomecontainer extends Component {
    state = {
        stateForUser: 1,
    }

    componentDidUpdate() {

    }

    deleteOutcomeList = (index) => {
        this.setState({ stateForUser: 2 })
        let allList = this.props.storeAllList
        allList.splice(index, 1)
        let newList = [...allList]
        return this.props.SetallListStroe(newList)
    }




    render() {
        return (
            <View>
                <View>
                    <Showalloutcomelistview allList={this.props.storeAllList} deleteOutcomeList={this.deleteOutcomeList} navigation={this.props.navigation} />
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        storeAllList: state.allListStore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        SetallListStroe: (allList) => dispatch(SetallListStroe(allList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controloutcomecontainer)

