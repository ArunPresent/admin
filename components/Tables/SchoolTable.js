import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser,getschoolList } from '../../redux/actions/userlist'
export const SchoolTable = () => {
  
  const {auth,list} = useSelector(state => state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getschoolList(auth))
    return () => {
      
    };
  }, []);


  const deleteSchool=(e,id)=>{
    e.preventDefault()
    const yes=window.confirm("delete this user permanently ?")
    console.log(yes)
    if(yes)
    {
     dispatch((deleteUser(id,auth,list.school))) 
    }

  }






    return (
        <div class="row">
        <div class="col-12">
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">DataTable with minimal features & hover style</h3>
              </div>
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>SchoolName</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>About</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                    {list.school.map(school=>
                  <tr>
                    <td>{school.id}</td>
                    <td>
                      {school.fullname}
                    </td>
                    <td>{school.email}</td>
                    <td>{school.address}</td>
                    <td>{school.about.slice(0,15)+'...'}</td>
                    <td class="project-actions text-right">
                   
                          <Link class="btn btn-info btn-sm" to={`/users/${school.id}`}>
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </Link>
                          <a onClick={(e)=>deleteSchool(e,school.id)} class="btn btn-danger btn-sm" href="#">
                              <i class="fas fa-trash">
                              </i>
                              Delete
                          </a>
                      </td>                  </tr>
                    )}
                  </tbody>
                 
                </table>
              </div>
            </div>
          
        </div>
      </div>
    )
}
