import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser, getstudentList } from '../../redux/actions/userlist'
import moment from "moment";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const StudentTable = () => {
  const {auth,list} = useSelector(state => state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getstudentList(auth))
    return () => {
      
    };
  }, []);


    const deleteStudent=(e,id)=>{
      e.preventDefault()
      const yes=window.confirm("delete this user permanently ?")
      console.log(yes)
      if(yes)
      {
       dispatch((deleteUser(id,auth,list.student))) 
      }

    }




    return (
        <div class="row">
        <div class="col-12">
    
    <section class="content">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Students</h3>

          <div class="card-tools">
            <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
              <i class="fas fa-minus"></i>
            </button>
  
          </div>
        </div>
        <div class="card-body p-0">
          <table class="table table-striped projects">
              <thead>
                  <tr>
                      <th style={{width:' 1%'}}>
                          #
                      </th>
                      <th style={{width: '20%'}}>
                          Full Name
                      </th>
                      <th style={{width:' 30%'}}>
                            profile image
                      </th>
                      <th>
                          Date of birth
                      </th>
                      <th style={{width:'8%'}}class="text-center">
                          email
                      </th>
                      <th style={{width:"20%"}}>
                        actions
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {list.student.map(user=>
                    
                    <tr>
                      <td>
                          #
                      </td>
                      <td>
                          <a>
                            {user.fullname}
                          </a>
                          <br/>
                          <small>
                              {user.id}
                          </small>
                      </td>
                      <td>
                          <ul class="list-inline">
                              <li class="list-inline-item">
                                  <img alt="Avatar" class="table-avatar" src={user.avatar}/>
                              </li>
                          </ul>
                      </td>
                      <td class="project_progress">
                         
                          <small>
                            {moment(user.dob).format("MMMM Do, YYYY")}
                          </small>
                      </td>
                      <td class="project-state">
                          <span class="badge badge-success">{user.email}</span>
                      </td>
                      <td class="project-actions text-right">
                          <Link class="btn btn-info btn-sm" to={`/users/${user.id}`}>
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </Link>
                          <a onClick={(e)=>deleteStudent(e,user.id)} class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>
                  </tr>
                  )}
              </tbody>
          </table>
        </div>
      </div>

    </section>
  </div>

          
        </div>
    )
}
