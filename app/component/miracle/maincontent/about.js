/**
 * Created by miracle on 2017/3/4.
 */
import React from 'react';
import {connect} from 'react-redux'

class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-9" id="about">
                <div className="ab-contain">
                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>WHO I AM</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content">
                                <div>
                                    <h1>邵学征</h1>
                                    <h3>web前端开发工程师</h3>
                                </div>
                            </div>
                            <div className="block-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul className="info-list">
                                            <li>
                                                <span className="info">姓名</span>
                                                <span className="value">邵学征</span>
                                            </li>
                                            <li>
                                                <span className="info">生日</span>
                                                <span className="value">1993.12.18</span>
                                            </li>
                                            <li>
                                                <span className="info">地址</span>
                                                <span className="value">浙江省温州市</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul className="info-list">
                                            <li>
                                                <span className="info">邮箱</span>
                                                <span className="value">shaoxz.hust.edu.cn</span>
                                            </li>
                                            <li>
                                                <span className="info">手机号码</span>
                                                <span className="value">18202787834</span>
                                            </li>
                                            <li>
                                                <span className="info">QQ</span>
                                                <span className="value">744642793</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>PROFESSIONAL SKILLS</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content">
                                <div>
                                    <div>
                                        <p>HTML/CSS</p>
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '85%',background:'#999999'}} />
                                        </div>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <p>JAVASCRIPT</p>
                                    <div className="progress">
                                        <div className="progress-bar" style={{width: '85%',background:'#999999'}} />
                                    </div>
                                </div>
                            </div>

                            <div className="block-content">
                                <div>
                                    <p>JAVA/MYSQL</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-success" style={{width: '70%',background:this.props.themeColor.color}} />
                                    </div>
                                </div>
                                <div>
                                    <p>C#</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-success" style={{width: '50%',background:this.props.themeColor.color}} />
                                    </div>
                                </div>
                            </div>

                            <div className="block-content">
                                <div>
                                    <p>React</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar" style={{width: '70%',background:'#333333'}} />
                                    </div>
                                </div>
                                <div>
                                    <p>React-Native</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar" style={{width: '85%',background:'#333333'}} />
                                    </div>
                                </div>
                                <div>
                                    <p>Vue</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar" style={{width: '50%',background:'#333333'}} />
                                    </div>
                                </div>
                                <div>
                                    <p>Bootstrap</p>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-warning" style={{width: '60%',background:'#333333'}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>EXPERIENCE</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content ab-exper">
                                <div>
                                    <a style={{color:this.props.themeColor.color}} href="http://www.inteteam.com"><h5>Inteteam网站后台开发</h5></a>
                                    <div className="ab-exper-title">
                                        <span className="glyphicon glyphicon-calendar"></span>
                                        <h6>2016/10-2017/01</h6>
                                    </div>
                                </div>
                                <p>
                                    项目简述：该项目使用facebook推出的react-native框架构建，
                                    采用es6语法，利用realm进行缓存管理，redux进行状态管理，
                                    navigator进行路由管理，axios管理服务器请求；有首页、
                                    需求、商品、服务商、个人中心几大模块
                                </p>
                                <p>
                                    项目职责：1：商品模块包括商品列表，商品详情页面的实现
                                    2：个人中心模块，包括登陆注册，账户设置，系统设置，消息界面，图片上传功能的实现
                                    3：分享到微信，qq，微博等社区功能的实现
                                </p>
                            </div>

                            <div className="block-content">
                                <div className="block-content ab-exper">
                                    <div>
                                        <a style={{color:this.props.themeColor.color}} href="http://www.inteteam.com"><h5>InteteamApp开发</h5></a>
                                        <div className="ab-exper-title">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <h6>2016/05- 2016/10</h6>
                                        </div>
                                    </div>
                                    <p>
                                        项目简述：该项目使用facebook推出的react-native框架构建，采用es6语法，利用realm进行缓存管理，
                                        redux进行状态管理，navigator进行路由管理，axios管理服务器请求；有首页、需求、商品、
                                        服务商、个人中心几大模块
                                    </p>
                                    <p>
                                        项目职责：1：商品模块包括商品列表，商品详情页面的实现
                                        2：个人中心模块，包括登陆注册，账户设置，系统设置，消息界面，图片上传功能的实现
                                        3：分享到微信，qq，微博等社区功能的实现
                                    </p>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-content ab-exper">
                                    <div>
                                        <a style={{color:this.props.themeColor.color}} href="http://www.inteteam.com"><h5>inteteam微信公众号开发</h5></a>
                                        <div className="ab-exper-title">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <h6>2016/02- 2016/05</h6>
                                        </div>
                                    </div>
                                    <p>
                                        项目简述：inteteam是在“互联网+”思想的指导下，利用互联网云计算技术，
                                        快捷高效地组织社会上分散的智力资源及工业知识与企业一起进行协同创新的平台。
                                        该项目利用时下非常流行的前端框架vue和ui框架sui moblie实现，
                                        并用webpack构建项目，项目采用es6语法
                                    </p>
                                    <p>
                                        项目职责：1：商品模块包括商品列表页面，商品详情页面，商品分类页面的实现
                                        其中包括按人气，售价排序，商品筛选，商品关键字搜索，商品收藏等功能的实现
                                    </p>
                                </div>
                            </div>

                            <div className="block-content">
                                <div className="block-content ab-exper">
                                    <div>
                                        <a style={{color:this.props.themeColor.color}} href="http://www.comodel.net"><h5>comodel工业知识众创分享网</h5></a>
                                        <div className="ab-exper-title">
                                            <span className="glyphicon glyphicon-calendar"></span>
                                            <h6>2016/02- 2016/05</h6>
                                        </div>
                                    </div>
                                    <p>
                                        项目简述：comodel工业知识众创分享网是基于modelica建模的在线建模平台，
                                        支持在线建模，需求发布，社区和商品发布等功能
                                    </p>
                                    <p>
                                        项目职责：1：商品模块包括商品列表，商品详情，发布商品页面的实现 利用ajax向后台发送请求返回数据并渲染到页面上
                                        2：后台管理模块的分类管理部分 实现一个treelist组件，支持无限分级和头像上传功能
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToprops(state) {
    const{themeColor} = state;
    return{themeColor}
}

export default connect(mapStateToprops)(About)