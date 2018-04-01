import React, { Component } from 'react';
import { Container, Header, Content,Button,Item, Input,Text,
  Body,Left,Title,Right,Card,CardItem,Thumbnail} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid'; 
import {AppRegistry,Image,View,TouchableOpacity,Modal}from 'react-native';
let sco ={};
export default class Faddworkposition extends Component {
  constructor(props) {
    super(props); 
    sco = YSctrl.init('Faddworkposition',this); 
    
  }
  
  render() {
    return (
      <Container style={styles.whitebackground}>
        <Header style={[styles.gctopColor,styles.gctopheight]}>
          <Left>
            <TouchableOpacity transparent onPress={Actions.pop}>
              <Image  source={require('../public/img/返回03.png')} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.titleposition}>
            <Title style={styles.addToptitle}>添加地区</Title>
          </Body>
          <Right/>
            
        </Header>

        <Content>
          <View >
          <Text note>地图</Text>
          </View>

        </Content>
        <View style={styles.mh24}>
          <View style={[styles.ph24,styles.pV26,styles.worktimeRow,styles.xjuzhong]}>
            <Text style={[styles.f16,styles.bword]}>广东省深圳市南山区</Text>
            <Image  source={require('../public/img/more.png')} />
          </View>
          <View style={[styles.ph24,styles.pV26]}>
            <Text style={[styles.f14,styles.bword]}>高新园区</Text>
          </View>
        </View>
        <View style={styles.ph24}>
          <Button block info style={[styles.hdtcard,styles.mb20]}>
            <Text style={styles.f16}>确定</Text>
          </Button>
        </View>
      </Container>
    );
  }


};

  