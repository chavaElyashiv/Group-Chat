import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/Actions/actions'
import Toolbar from '../Toolbar'
import './Profile.css'
import callIcon from '../../assets/phone-alt-solid.png'
import gearIcon from '../../assets/gear-wide.svg'
import bellIcon from '../../assets/bell-solid.png'


function mapStateToProps(state) {
    return {
        userName: state.userReducer.userName,
        imgUser: state.userReducer.img,
    }

}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(function Profile(props) {
    const { imgUser, userName } = props;
    return (
        <div class="container-fluid p-0">
            <div class="row p-0">
                <div class="col toolbar2">
                    <Toolbar
                        leftItems={
                            <img src={gearIcon} className="gear"></img>
                        }
                        rightItems={
                            <img src={bellIcon} className="bell"></img>
                        } />
                </div>
            </div>
            <div class="row">
                <div class="col picture">
                    {imgUser ? <img src={imgUser} /> : userName[0]}
                </div>
            </div>
            <div class="row">
                <div class="col properties">
                    <p className="name">{userName}</p>
                    <p className="title">Product Manager</p>
                </div>
            </div>
            <div class="row ">
                <div class="col dropdown ml-4">
                    <button class="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" >
                        chat
  </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <div class="row call mr-4 ml-4">
                <div class="col-6 callIcon">
                    <img src={callIcon} />
                </div>
                <div class="col callText pl-0">
                    call
                </div>
            </div>
        </div>
    )

})
