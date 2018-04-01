//1、引入css 自定义的js
import styles from './js/css';
import fac from './js/fac';
import main from './js/main';
window.fac = fac;
window.styles = styles;

//2、引入react组件
import React, { Component, AppRegistry, AsyncStorage } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import { Router, Modal, Stack, Tabs, Scene ,Actions} from 'react-native-router-flux';
window.Actions = Actions; 


 
//
import Findworklist from './pages/Findworklist'; 				//招聘首页
import Theproject from './pages/Theproject';   			//我的工程
import Msglist from './pages/Msglist'; 				//消息列表
import Buildlist from './pages/Buildlist';        //建筑圈列表
import Personal from './pages/Personal';          //我的首页
import Faddworkposition from './pages/Faddworkposition'; 				//添加地区
import Login from './pages/Login'; 				//登录页面

const imgs = {
	Buildlist:require('./public/img/首页-选择.png'),
	Msglist:require('./public/img/消息-默认.png'),
	Theproject:require('./public/img/工程-默认.png'),
	Findworklist:require('./public/img/招聘求职-默认.png'),
	Personal:require('./public/img/我的-默认.png'),
}



const badge = 2;
export default class SimpleApp extends Component {

tpl(tintColor,key){
	return (<View>
			<Image source={imgs[key]} style={[styles.iconImg, { tintColor: tintColor }]} />
			{badge ? (
				<View style={styles.badgestyle}>
					<Text style={styles.textstyle}>{badge}</Text>
				</View>
			) : null}
		</View>)
}

	render() {
		return (
			<Router>
				<Modal>
					<Stack hideNavBar key="root" transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forHorizontal })}>
											 
											<Tabs
												key="tabbar" // 唯一标识
												swipeEnabled={false} //左右是否可以滑动
												inactiveTintColor='#666'//底部导航字体/图片点击前颜色
												activeTintColor='#32AAFD'//底部导航字体/图片点击后颜色
												headerMode='none' //隐藏标题栏
												tabBarPosition='bottom'//将导航栏显示在底部
												labelStyle={{ fontSize: 12, marginTop: -3 }}//底部导航字体样式
												animationEnabled={false}//禁止页面切换动画
												tabBarStyle={{ borderTopWidth:0}}//底部导航样式
											>
												<Scene key='Buildlist' component={Buildlist} title='建筑圈' icon={({tintColor})=>{
													return this.tpl(tintColor,'Buildlist')}} initial />
												<Scene key='Msglist' component={Msglist} title='消息' icon={({tintColor})=>{
													return this.tpl(tintColor,'Msglist')}}/>
												<Scene key='Theproject' component={Theproject} title='工程' icon={({tintColor})=>{
													return this.tpl(tintColor,'Theproject')}} />
												<Scene key='Findworklist' component={Findworklist} title='招聘' icon={({tintColor})=>{
													return this.tpl(tintColor,'Findworklist')}} />
												<Scene key='Personal' component={Personal} title='我的' icon={({tintColor})=>{
													return this.tpl(tintColor,'Personal')}} />{/**/}
											</Tabs>
											 <Scene key='Theproject' component={Theproject} /> 
											<Scene key='Faddworkposition' component={Faddworkposition} />
										 </Stack>
					 <Scene hideNavBar key='Login' component={Login} title='登陆页' transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forVertical })} /> 
				</Modal>
			</Router>
		)
	}
}
