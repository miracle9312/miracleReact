import React from 'react';
import {connect} from 'react-redux'

class Contact extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-9 main-content" id="contact">
                <div className="ab-contain">
                    <div className="ab-main">
                        <div className="ab-main-title">
                            <h5>CONTACT INFO</h5>
                        </div>
                        <div className="ab-main-contain">
                            <div className="block-content">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="info-holder">
                                            <span style={{color:this.props.themeColor.color,fontSize:50}} className="glyphicon glyphicon-map-marker" />
                                            <p className="address-info">
                                                湖北省武汉市武昌区珞喻路1037号华中科技大学<br/>
                                                机械大楼西楼B703
                                            </p>
                                            <div className="con-message">
                                                <div>
                                                    <p>Email<br/>shaoxz@hust.edu.cn</p>
                                                    <span style={{color:this.props.themeColor.color}} className="glyphicon glyphicon-envelope"></span>
                                                </div>
                                                <div>
                                                    <p>Tel<br/>18202787834</p>
                                                    <span style={{color:this.props.themeColor.color}} className="glyphicon glyphicon-earphone"></span>
                                                </div>
                                                <div>
                                                    <p><a href="https://github.com/miracle9312">github</a><br/>
                                                        github.com/miracle9312</p>
                                                    <span style={{color:this.props.themeColor.color}} className="glyphicon glyphicon-tree-deciduous"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const{themeColor} = state;
    return{themeColor}
}

export default connect(mapStateToProps)(Contact)
