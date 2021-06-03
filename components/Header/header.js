import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { logout } from "../../redux/actions/auth";

const Header = () => {
  const dispatch = useDispatch()
  const history=useHistory()
  const logouts=()=>{
    dispatch(logout())
    history.push('/login')
  }
    return (
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <Link to="/" class="nav-link">Home</Link>
          </li>
          <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
    
        <ul class="navbar-nav ml-auto">
     <li class="nav-item">
            <a class="nav-link" data-widget="control-sidebar" onClick={() =>logouts()} data-slide="true" href="#" role="button">
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            Signout
           </a>
      </li>
        </ul>
      </nav>    )
}

export default Header
