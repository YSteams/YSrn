import React, { Component } from 'react';
import { Container, Header, Content,Button,Item, Input,Text,
  Body,Left,Title,Right,List,ListItem,Thumbnail,Textarea} from 'native-base';
import { StackNavigator, TabBarBottom, TabNavigator } from "react-navigation";
import {AppRegistry,Image,View,TouchableOpacity,Modal}from 'react-native';
let sco ={};
export default class Msglist extends Component {
  constructor(props) {
    super(props); 
    sco = YSctrl.init('Msglist',this);  
    
  }
  
  render() {
    return (
      <Container>
        <Header  style={[styles.gctopColor,styles.gctopheight]} >
          <Left>
            <TouchableOpacity transparent onPress={Actions.pop}>
              <Image  source={require('../public/img/search.png')} />
            </TouchableOpacity>
          </Left>
          <Body style={styles.titleposition}>
            <Title style={styles.addToptitle}>消息   </Title>
          </Body>
          <Right/>
        </Header>
        <Content>
          <List style={[styles.msgbg,styles.borderBottom]}>
            <ListItem avatar last style={styles.msgbg} onPress={Actions.Mwait}>
              <Left>
                <Image  source={require('../public/img/待处理-icon.png')}/>
              </Left>
              <Body >
                <Text>待处理事项</Text>
                <Text numberOfLines={1} note style={styles.mt20}>个人资料待完善</Text>
              </Body>  
              <Right>
                <Text style={[styles.f12,styles.notetext]}>05日</Text>
              </Right>
            </ListItem>
          </List>

          <List style={styles.whitebackground}>
            <ListItem avatar>
              <Left>
                <Thumbnail style={styles.msgimg} source={require('../public/img/Group3.png')}/>
              </Left> 
              <Body>
                  <Text>Michelle Wade</Text>
                  <Text numberOfLines={1} style={[styles.f12,styles.notetext]}>中软国际 | 招聘专员</Text>
                  <Text numberOfLines={1} note>你好，感谢你投我司的简历，我们将...</Text>
                </Body> 
              <Right>
                <Text style={[styles.f12,styles.notetext]}>05日</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail style={styles.msgimg} source={require('../public/img/Group3.png')}/>
              </Left> 
              <Body>
                  <Text>Michelle Wade</Text>
                  <Text numberOfLines={1} style={[styles.f12,styles.notetext]}>中软国际 | 招聘专员</Text>
                  <Text numberOfLines={1} note>你好，感谢你投我司的简历，我们将...</Text>
                </Body> 
              <Right>
                <Text style={[styles.f12,styles.notetext]}>05日</Text>
              </Right>
            </ListItem>

          </List>
          
        </Content>
      </Container>
    );
  }


};

  