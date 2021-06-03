import { deleteDataAPI, getDataAPI, postDataAPI } from "../../utils/fetchData";
import { GLOBALTYPES } from "./globalTypes";

export const getstudentList=(auth)=>async(dispatch)=>{
    const res = await getDataAPI(`/users`,auth.token);
    console.log(res.data)
    dispatch({type:GLOBALTYPES.STUDENT,payload:res.data})
}

export const getschoolList=(auth)=>async(dispatch)=>{
    const res = await getDataAPI(`/schools`,auth.token);
    console.log(res.data)
    dispatch({type:GLOBALTYPES.SCHOOL,payload:res.data})
}

export const getpostsList=(auth)=>async(dispatch)=>{
    const res = await getDataAPI(`/posts`,auth.token);
    console.log(res.data)
    dispatch({type:GLOBALTYPES.POSTS,payload:res.data})
}

export const createAds=({formData,value,radius,auth})=>async(dispatch)=>{
    console.log(auth.token)
    const res=await postDataAPI(`/ads/${value.label}/${radius}`,formData,auth.token)
    console.log(res)
}

 
export const getAds=(auth)=>async(dispatch)=>{
    const res=await getDataAPI(`/ads`,auth.token)
    dispatch({type:GLOBALTYPES.SHOWADS,payload:res.data})
}


export const deleteUser=(id,auth,student)=>async(dispatch)=>{

    const res=await deleteDataAPI(`/users/${id}`,auth.token)
    const user=student.filter(user=>user.id!==id)
    dispatch({type:GLOBALTYPES.STUDENT,payload:user})
    dispatch({type:GLOBALTYPES.SCHOOL,payload:user})

    console.log(user)
}



export const deletePosts=(id,auth,posts)=>async(dispatch)=>{

    const res=await deleteDataAPI(`/posts/${id}`,auth.token)
    const post=posts.filter(post=>post.id!==id)
    dispatch({type:GLOBALTYPES.POSTS,payload:post})


    console.log(post)
    console.log(res)
}

//Skills

 
export const getSkills=(auth)=>async(dispatch)=>{
    const res=await getDataAPI(`/skills`,auth.token)
    console.log(res)
    dispatch({type:GLOBALTYPES.SHOWSKILLS,payload:res.data})
}



export const createSkills=(value,auth)=>async(dispatch)=>{
    console.log(auth.token)
    const res=await postDataAPI(`/skills`,value,auth.token)
    console.log(res)
}


export const deleteSkills=(id,auth,skill)=>async(dispatch)=>{

    const res=await deleteDataAPI(`/skills/${id}`,auth.token)
    const skills=skill.filter(skill=>skill._id!==id)
    dispatch({type:GLOBALTYPES.SHOWSKILLS,payload:skills})

}



// 