import YSfac from './fac';

export default YSctrl = {
conf:{
//配置项 ============================================================================ 
    rooturl:'meizi.lc/',//网站根目录 
	  jsonpath:'http://www.helii.cn/json/',//约定json路径
	  debug:true,//开发模式，会所有的请求为get方法，并请求服务器json;
	  console:true,//ture开启，则打印一些YS提示错误信息，false关闭,不打印YS的提示信息; 
	  subfix:['a','b'], //约定数据容器的后缀；
	}, 
//初始化控制器 ============================================================================
init:(key,sco)=>{ 
sco.state ={time:0}; //默认设置状态机为0，需要更新则给时间戳就可以了；
sco.parent =sco.props.parent||{};//通过引入组件传进来的父级
sco.conf = YSctrl.conf;//fac会用到

sco.com_del = {params:{},data:{}};//公共删除
sco.com_add = {params:{},data:{}};//公共增加
//初始化每一个模块的数据容器
YSctrl.conf.subfix.map(function(elem) { 
 sco['YS_list'+elem] = {params:{},data:[]};
 sco['YS_plist'+elem]  = {page:true,params:{listnum:10,curPage:1},data:{datalist:[]}}; 
 sco['YS_obj'+elem] = {params:{},data:{}};
}); 

YSctrl.dir(sco);//把事件绑到sco上面去；
YSctrl.main[key]&&YSctrl.main[key](sco);//找到相关的模块，传入sco,执行这个函数
return sco;
},

//业务逻辑块 ============================================================================
 main:{  
  city:function(sco) { //城市管理模块 
      sco.YS_obja.url = 'Index/edit_template';//业务：设定采集，温度
  }, 
  Buildlist:function(sco) { //原材管理模块 
   
     sco.YS_plista.url = 'Index/system_mattertpl_list';
     sco.fetch('YS_plista');
     console.log(sco);
     console.log(sco.parent.hrefinfo)

     sco.com_add.url = 'Auth/comadd';//设置新增原材的路径
     sco.com_add.url = 'Auth/comdel';//设置新增原材的路径
  },
  tongbiao:function(sco) { //省同表管理模块   
     sco.YS_lista.url = 'Index/major_select';//专业列表
     sco.fetch('YS_lista');

     sco.YS_obja.url = 'Index/major_add';//新增专业

     sco.YS_listb.url = 'Index/archive_select';//资料列表 
     sco.fetch('YS_listb');
     
     sco.YS_objb.url = 'Index/archive_add';//新增资料 
  },
  weather:function(sco) { //温度管理模块 
     sco.YS_plista.url = 'Index/service_weather_list'; //设置天气列表url 
  },
  userlist:function(sco) {//用户管理模块 
     sco.YS_plista.url = 'Index/operate_user_list';//获取用户列表 
     sco.fetch('YS_plista');
      
     sco.YS_plistb.page = true;  
     sco.YS_plistb.url = 'Index/operate_login_list'; //登陆日志   
        
     sco.YS_lista.url = 'Index/loginStatistic'; //汇总登陆 
  },
  programcount:function(sco) {          
     sco.YS_plista.url = 'Index/operate_pro_list';//项目列表
     sco.fetch('YS_plista');
  }
}，
//定义事件处理 ============================================================================
dir:(sco)=>{
//公共事件====================================================================================
//改变状态机
sco.ysrun = function(){
  sco.setState({time:YSfac.time()});  
};
//触发执行某个接口
sco.fetch = function(key){
   YSfac.fetdata(sco,key);
}
//公共获取输入框的值
sco.ysinput = (sco,str,val) => { 
   var arr = str.split('.'); 
   var obj = sco;
   var key = '';
   arr.map(function(el,ind){ 
    ind<arr.length-1&&(obj = obj[el]);
    ind==arr.length-1&&(key=el);
  });
obj[key] = val; 
sco.ysrun(); 
};
//公共事件====================================================================================




  },

}
 