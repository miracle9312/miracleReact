/**
 * Created by miracle on 2017/2/23.
 */
import React from 'react';
import Segment from '../../common/segment';
import ColorBtn from '../../common/colorbtn';
import {connect} from 'react-redux';
import selectThemeColor from '../../../redux/action/selectThemeColor'

const colors=['#cd5353','#558e6a','#00b4d9','#14c8c8','#7369b9','#d0a068','#ead22d','#eb874f',
    '#eb874f','#ef3e96','#ef3e96','#55606e','#55606e','#734854','#113f59','#113f59','#a0ce4e',
    '#2997ab','#2997ab','#2997ab','#065e52','#065e52','#065e52','#065e52','#9c8061','#cf4075',
    '#d50e46','#b565a7','#b565a7','#9661ab','#82b541','#9197a3','#3b5998']

class Wrapper extends React.Component{
    constructor(props){
        super(props)
        this.state={
            wpLeft:-278
        }
    }

    componentDidMount(){

    }

    toggleWp=()=>{
        this.setState({
            wpLeft:this.state.wpLeft==0?-278:0
        });
    }

    resetTheme=()=>{
        const{dispatch} = this.props;
        dispatch(selectThemeColor(colors[0]))
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="wrapper-panel-bg col-md-3" style={{left:this.state.wpLeft}}>
                        <div className="wrapper-panel-ti">
                            <b>THEME COLORS</b>
                        </div>
                        <Segment
                            height={1}
                            width={'100%'}
                            color="#efefef"
                        />
                        <div>
                            <h5>pick a color</h5>
                            <div>
                                <ul className="wp-color-list">
                                    {
                                        colors.map((val,i)=>{
                                            return(
                                                <ColorBtn
                                                    key={'color'+i}
                                                    color={val}
                                                />
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div>
                                <a href="#" onClick={this.resetTheme} className="wp-color-reset">Reset</a>
                            </div>
                        </div>
                        <div className="wp-color-toggle" onClick={this.toggleWp}>
                            <span className="glyphicon glyphicon-globe"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const{
        themeColor
    } = state;
    return{
        themeColor
    }
}

export default connect (mapStateToProps)(Wrapper)