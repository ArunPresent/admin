import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Brand Logo --> */}
    <a href="/" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style={{opacity: .8}}/>
      <span class="brand-text font-weight-light">Admin Panel</span>
    </a>

    {/* <!-- Sidebar --> */}
    <div class="sidebar">
      {/* <!-- Sidebar user panel (optional) --> */}
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
        </div>
        <div class="info">
          <a href="#" class="d-block">Admin</a>
        </div>
      </div>

      {/* <!-- SidebarSearch Form --> */}
  

      {/* <!-- Sidebar Menu --> */}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
     <li class="nav-item">
            <Link to="/students" class="nav-link">
            <i class="fa fa-user" aria-hidden="true"></i>
              <p>
                Students
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
     <li class="nav-item">
            <Link to="/schools" class="nav-link">
              <i class="fa fa-user"></i>
              <p>
              Schools
              </p>
                
            </Link>
    </li>
     <li class="nav-item">
            <Link to="/posts" class="nav-link">
            <i class="fa fa-copy"></i>

              <p>
                posts
              </p>
            </Link>
     </li>
          <li class="nav-item">
            <Link to="/showads" class="nav-link">
              <i class="fas fa-book"></i>
              <p> 
                Ads posted
              </p>
            </Link>
   </li>
         
   <li class="nav-item">
            <Link to="/skills" class="nav-link">
              <i class="fas fa-book"></i>
              <p> 
                Skills
              </p>
            </Link>
   </li>
         
        </ul>
      </nav>
      {/* <!-- /.sidebar-menu --> */}
    </div>
    {/* <!-- /.sidebar --> */}
  </aside>

    )
}

export default Menu
