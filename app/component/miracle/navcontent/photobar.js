/**
 * Created by miracle on 2017/3/2.
 */
import React from 'react';
import NavBtn from '../../common/navbtn';
import LinkBtn from '../../common/linkbtn';

const navbuttons=[
    {icon:'glyphicon-user',name:'ABOUT',address:''}, {icon:'glyphicon-folder-open',name:'WROKS',address:'portrait'},
    {icon:'glyphicon-earphone',name:'CONTACT',address:'contact'}, {icon:'glyphicon-send',name:'SLOGAN',address:'blog'}
    ];
const linkbuttons=[
    {icon:'glyphicon-comment'},{icon:'glyphicon-heart'},
    {icon:'glyphicon-fire'}
]

export default class PhotoBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="col-md-3 pb-panel-bg">
                <img src={API+require('images/me.jpg')} alt="me"/>
                <div className="pb-nav">
                    <ul>
                        {navbuttons.map((obj,i)=>{
                            return(
                                <NavBtn
                                    key={i}
                                    navId={"nav"+i}
                                    name={obj.name}
                                    icon={obj.icon}
                                    address={obj.address}
                                />
                            )
                        })}
                    </ul>
                </div>
                <div className="pb-link-bg">
                    <div>
                        <ul>
                            {
                                linkbuttons.map((val,i)=>{
                                    return (
                                        <LinkBtn
                                            key={i}
                                            linkId={"link"+i}
                                            icon={val.icon}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <p className="pb-link-text">© 2015 Mutationthemes.</p>
                    </div>
                </div>
            </div>
        )
    }
}
