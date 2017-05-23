import React, { Component, PropTypes } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import {default as Spinkit} from 'react-native-spinkit'


export default class Spinner extends Component {
    render() {
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.props.visible}
                onRequestClose={()=>{}}>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)', flex: 1 }}>
                    <Spinkit
                      isVisible={this.props.visible}
                      size={80}
                      type={'Bounce'}
                      color={'#FFFFFF'}/>
                </View>
            </Modal>

        )
    }
}

Spinner.propTypes = {
    visible: PropTypes.bool.isRequired
};
