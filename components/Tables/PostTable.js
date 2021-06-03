import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePosts,getpostsList } from '../../redux/actions/userlist'
export const PostTable = () => {
  const {auth,list} = useSelector(state => state)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getpostsList(auth))
    return () => {
      
    };
  }, []);


  const deletePost=(e,id)=>{
    e.preventDefault()
    const yes=window.confirm("delete this post permanently ?")
    console.log(yes)
    if(yes)
    {
     dispatch((deletePosts(id,auth,list.posts))) 
    }

  }

    return (
        <div class="row">
        <div class="col-12">
        <div class="card">
              <div class="card-header">
                <h3 class="card-title">Student Table</h3>
              </div>
              <div class="card-body">
                <table id="example2" class="table table-bordered table-hover">
                  <thead>
                  <tr>
                    <th>Id</th>
                    <th>PostedBy</th>
                    <th>Comments</th>
                    <th>Likes</th>
                    <th>Content</th>
                    <th>Actions</th>
                    
                  </tr>
                  </thead>
                  <tbody>
                    {list.posts.map(post=>
                  <tr>
                    <td>{post.id}</td>
                    <td>
                      {post.user.fullname}
                    </td>
                    <td>{post.likes.length}</td>
                    <td>{post.comments.length}</td>
                    <td>{post.content}</td>
                    <td class="project-actions text-right">
      
                          <Link class="btn btn-info btn-sm" to={`/post/${post.id}`}>
                              <i class="fas fa-pencil-alt">
                              </i>
                              Edit
                          </Link>
                          <a onClick={(e)=>deletePost(e,post.id)} class="btn btn-danger btn-sm" href="#">
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
          
        </div>
      </div>
    )
}
