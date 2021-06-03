import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import {refreshToken } from '../../redux/actions/auth'
import { getpostsList } from '../../redux/actions/userlist'
const Dashboard = () => {
    const {auth} = useSelector(state => state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getpostsList(auth))
    return () => {
      
    };
  }, []);


  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
 
console.log(auth.token)



    return (
        <>
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Dashboard</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                </ol>
              </div>
            </div>
          </div>
        </div>
        
    
        
        <section class="content">
          <div class="container-fluid">
            
            <div class="row">
              <div class="col-lg-3 col-6">
                
                <div class="small-box bg-info">
                  <div class="inner">
                    <h3>150</h3>
    
                    <p>Students Signed Up</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-bag"></i>
                  </div>
                  <Link to="/students" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              
              <div class="col-lg-3 col-6">
                
                <div class="small-box bg-success">
                  <div class="inner">
                    <h3>53<sup style={{fontSize:"20px"}}>%</sup></h3>
    
                    <p>School Signed Up</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                  </div>
                  <Link to="/students" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></Link>
                </div>
              </div>
              
              <div class="col-lg-3 col-6">
                
                <div class="small-box bg-warning">
                  <div class="inner">
                    <h3>44</h3>
    
                    <p>User Registrations</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-person-add"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              
              <div class="col-lg-3 col-6">
                
                <div class="small-box bg-danger">
                  <div class="inner">
                    <h3>65</h3>
    
                    <p>Unique Visitors</p>
                  </div>
                  <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                  </div>
                  <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              
            </div>
            
            
            <div class="row">

            </div>
          </div>
        </section>
        </>
    )
}

export default Dashboard
