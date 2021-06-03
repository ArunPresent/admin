import React, { useEffect, useState } from "react";
import { Link,useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { getDataAPI, putDataAPI } from "../../utils/fetchData";

const validate = (values) => {
  const errors = {};
  return errors;
};

export const Edit = (match) => {
    let {edits,id}= useParams();
    console.log(edits,id)
    const [Data, setData] = useState({});
    const { auth } = useSelector((state) => state);

  const history = useHistory();

  useEffect(() => {
    getData()
  }, []);

  const getData=async()=>{
      const res=await getDataAPI(`${edits}/${id}`,auth.token)
      console.log("this is data",res.data)
      setData(res.data)

  }
  const putdata=async(data)=>{
    const res=await putDataAPI(`${edits}/${id}`,data,auth.token)
    console.log(res)
    if(res.status==200)
    {
        history.push('/')
    }
}

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
        ...Data
    },
    validate,
    onSubmit: (values) => {

        putdata({...Data,...values})
    },

  });

const datas=[]
  if(Data)
{
    for(let i in Data)
    {
        datas.push(i)
    }
}

  return (
    <section id="welcome-section">
      <div className="container">
        <div id="logreg-forms">
          <form className="form-signin" onSubmit={formik.handleSubmit}>
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ textAlign: "center" }}
            >
              {" "}
                Edit Data
            </h1>
  {datas.map(i=>
            <div className="form-group">
                <h6>{i}</h6>
              <input
                type={i}
                id="inputEmail"
                name={i}
                value={Data[i]}
                className="form-control"
                placeholder={i}
                onChange={formik.handleChange}
              />
                       <h6>change--{i}</h6>
              <input
                type={i}
                id="inputEmail"
                name={i}
                className="form-control"
                placeholder={i}
                onChange={formik.handleChange}
              />
              
              {formik.errors.email ? (
                <small className="text-danger">{formik.errors.email}</small>
              ) : null}
            </div>
  )}
            <button className="btn btn-success btn-block" type="submit">
              <i className="fas fa-sign-in-alt"></i> Submit
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

