import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View,ListView,TouchableOpacity,Image,Modal}from 'react-native';
var Dimensions = require('Dimensions');
var {
    width,
    height
} = Dimensions.get('window');
import styles from '../js/css';
import loadingImage from '../public/img/businesscard1.png';


debugger;
export default class LoadingView extends Component { 
  render() {
        const { showLoading, opacity, backgroundColor } = this.props
        return (
            <Modal onRequestClose={() => {alert(123)}} visible={showLoading} transparent>
                <View style={ [styles.loadingView, {opacity: opacity||0, backgroundColor: backgroundColor||'black'}]}></View>
                 <View style={ styles.loadingImageView }>
                      <View style={ styles.loadingImage }>
                          {
                              this.props.loadingViewClick?
                               <TouchableOpacity onPress={ this.props.loadingViewClick }>
                                  <Image style={ styles.loadingImage } source={ loadingImage }/>
                              </TouchableOpacity>
                              :
                              <Image style={ styles.loadingImage } source={ loadingImage }/>
                          }
                     </View>
                 </View>
            </Modal>
        )
    }

 




 
}
 
  
