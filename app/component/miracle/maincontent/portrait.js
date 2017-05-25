/**
 * Created by miracle on 2017/3/7.
 */
import React from 'react';
import {connect} from 'react-redux'

class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    closePanel=(panelId)=>{
        let dispalyAttri=$(panelId).css('display');
        if(dispalyAttri=='none'){
            $(panelId).css('display','block');
        }else{
            $(panelId).css('display','none');
        }
    }

    render(){
        return(
            <div className="col-md-9 main-content" id="portrait">
                <div className="ab-contain">
                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>MY WORKS</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content">
                                <div className="block-dropdown" onClick={this.closePanel.bind(this,'#miracleApp')}>
                                    <a style={{color:this.props.themeColor.color}}><h5>MiracleApp（个人项目）</h5></a>
                                </div>
                                <div className="stretch-content" id="miracleApp">
                                    <div className="ab-exper">
                                        <p>
                                            <strong>MiracleApp</strong>采用<strong>facebook</strong>推出的<strong>react-native</strong>框架>facebook推出的react-native框架，利用前端技术开发的一款app，该app目前尚未开发完善暂未发布。<br/>
                                            app利用<strong>redux</strong>进行状态管理，利用<strong>navigator</strong>进行路由管理，<strong>realm</strong>数据库进行缓存管理，后台采用spingMVC框架，所有返回
                                            数据的后台接口全部由自己采用<strong>java</strong>语言完成。<br/>
                                            app分为个人中心，心情，阅读，音乐，日记本模块；支持登录，注册，修改个人资料功能；<br/>心情模块:可以发表文字心情和图片心情，并且支持评论；<br/>
                                            阅读模块:支持用户上传一片文章供其他用户阅读；<br/>音乐模块:支持音乐播放，播放时进度条会自动更新，用户可以上传音乐供其它用户欣赏；<br/>
                                            日记本模块:用户可以在该模块编辑文章并上传，并且可以自己设置日记的阅读权限。

                                        </p>
                                    </div>
                                    <ul className="row">
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/micenter.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/micomment.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/midataset.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/midiary.png')}/>
                                        </li>
                                    </ul>
                                    <ul className="row">
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/milogin.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/mimood.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/miread.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/miracleApp/miregis.png')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-dropdown"  onClick={this.closePanel.bind(this,'#myBoard')}>
                                    <a style={{color:this.props.themeColor.color}} ><h5>MyBoard（个人项目）</h5></a>
                                </div>
                                <div id="myBoard" className="stretch-content">
                                    <div className="ab-exper">
                                        <p>
                                            <strong>MyBoard</strong>是采用<strong>canvas</strong>开发的一款网页画图板
                                        </p>
                                    </div>

                                    <ul className="row">
                                        <li className="col-md-12">
                                            <img src={API+require('../../../images/drawBoard/drawBoard.png')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-dropdown"  onClick={this.closePanel.bind(this,'#inteteam')}>
                                    <a style={{color:this.props.themeColor.color}}><h5>Inteteam</h5></a>
                                </div>
                                <div id="inteteam" className="stretch-content">
                                    <div className="ab-exper">
                                        <p>
                                            <a href="http://www.inteteam.com">Inteteam</a>是在“互联网+”思想的指导下，利用互联网云计算技术，
                                            快捷高效地组织社会上分散的智力资源及工业知识与企业一起进行协同创新的平台；
                                            项目采用java语言，后台框架采用springMvc框架，并用redis进行缓存管理，
                                            mysql进行数据存储，分为entity,business,componnet,servlet层；<br/>
                                            <strong>我的职责：</strong>负责网站后台接口的开发，包括需求，流程，里程碑，稿件，附件，需求类型，
                                            需求分类等30多个接口的实现
                                        </p>
                                    </div>
                                    <ul className="row">
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in1.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in2.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in3.png')}/>
                                        </li>
                                    </ul>

                                    <ul className="row">
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in4.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in5.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/inteteam/in6.png')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-dropdown"  onClick={this.closePanel.bind(this,'#inteteamApp')}>
                                    <a style={{color:this.props.themeColor.color}}><h5>InteteamApp</h5></a>
                                </div>
                                <div id="inteteamApp" className="stretch-content">
                                    <div className="ab-exper">
                                        <p>
                                            <strong>InteteamApp</strong>使用facebook推出的react-native框架构建，采用es6语法，
                                            利用realm进行缓存管理，redux进行状态管理，navigator进行路由管理，
                                            axios管理服务器请求；有首页、需求、商品、服务商、个人中心几大模块.<br/>
                                            <strong>我的职责：</strong>1：商品模块包括商品列表，商品详情页面的实现<br/>
                                            2：个人中心模块，包括登陆注册，账户设置，系统设置，消息界面，图片上传功能的实现<br/>
                                            3：分享到微信，qq，微博等社区功能的实现<br/>
                                        </p>
                                    </div>
                                    <ul className="row">
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamApp/1.jpg')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamApp/2.jpg')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamApp/3.jpg')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamApp/4.jpg')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-dropdown"  onClick={this.closePanel.bind(this,'#inteteamWe')}>
                                    <a style={{color:this.props.themeColor.color}}><h5>Inteteam wechat</h5></a>
                                </div>
                                <div className="stretch-content" id="inteteamWe">
                                    <div className="ab-exper">
                                        <p>
                                            <strong>Inteteam微信公众号</strong>利用<strong>vue</strong>框架开发，前端ui框架采用阿里的sui Mobile,
                                            采用es6语法，和严格模式的书写规范;<br/>
                                            基于inteteam网站开发的微信公众号，主要分为需求、商品、服务商和个人中心模块；<br/>
                                            商品、需求、服务商模块：列表页进行展示，支持排序、搜索以及分类选择，详情页支持收藏和关注功能；<br/>
                                            个人中心模块：用于展示用户收藏的商品和需求，关注的服务商,以及登陆注册和用户资料修改等功能<br/>
                                            <strong>我的职责</strong>：负责商品模块的前端开发任务。
                                        </p>
                                    </div>
                                    <ul className="row">
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inClassify.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inDemand.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inDemandDetail.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inLogin.png')}/>
                                        </li>
                                    </ul>

                                    <ul className="row">
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inMain.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inProduct.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inProductDetail.png')}/>
                                        </li>
                                        <li className="col-md-3">
                                            <img src={API+require('../../../images/inteteamWe/inServer.png')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-dropdown"  onClick={this.closePanel.bind(this,'#comodel')}>
                                    <a style={{color:this.props.themeColor.color}}><h5>Comodel</h5></a>
                                </div>
                                <div id="comodel" className="stretch-content">
                                    <div className="ab-exper">
                                        <p>
                                            <a href="www.comodel.net">comodel</a>工业知识众创分享网是基于modelica建模的在线建模平台，
                                            支持在线建模，需求发布，社区和商品发布等功能<br/>
                                            <strong>我的职责：</strong>1：商品模块包括商品列表，商品详情，发布商品页面的实现
                                                利用ajax向后台发送请求返回数据并渲染到页面上<br/>2：后台管理模块的分类管理部分
                                                实现一个treelist组件，支持无限分级和头像上传功能
                                        </p>
                                    </div>
                                    <ul className="row">
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co1.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co2.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co3.png')}/>
                                        </li>
                                    </ul>

                                    <ul className="row">
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co4.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co5.png')}/>
                                        </li>
                                        <li className="col-md-4">
                                            <img src={API+require('../../../images/comodel/co6.png')}/>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {themeColor} = state;
    return{themeColor}
}

export default connect(mapStateToProps)(About)