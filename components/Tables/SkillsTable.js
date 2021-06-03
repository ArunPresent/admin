import userEvent from '@testing-library/user-event'
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { deleteUser,deleteSkills,getSkills, getstudentList } from '../../redux/actions/userlist'
import moment from "moment";
import axios from 'axios';
import { Link } from 'react-router-dom';

export const SkillsTable = () => {
  const {auth,list} = useSelector(state => state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getSkills(auth))
  }, []);


    const deleteSkill=(e,id)=>{
      e.preventDefault()
      const yes=window.confirm("delete this skill permanently ?")
      console.log(yes)
      if(yes)
      {
       dispatch((deleteSkills(id,auth,list.skills))) 
      }

    }




    return (
        <div class="row">
            <Link to="/createskills" style={{textAlign:'center'}}>Add a new Skill +</Link>
        <div class="col-12">
    
    <section class="content">

      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Skills</h3>

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
                      <th >
                          Skill Name
                          
                      </th>
                      <th >
                          actions
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {list.skills.map(skill=>
                    
                    <tr>
                      <td>
                          {skill._id}
                      </td>
                      <td>
                          <a>
                            {skill.name}
                          </a>
                      
                      </td>
                      <td class="project-actions text-right">
                          <Link class="btn btn-info btn-sm" to={`/skills/${skill._id}`}>
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </Link>
                          <a onClick={(e)=>deleteSkill(e,skill._id)} class="btn btn-danger btn-sm" href="#">
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
