import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { createSkills } from "../../redux/actions/userlist";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.skill) {
    errors.skill = "Enter  skill!";
  } 
  return errors;
};

const CreateSkills = () => {
  const { auth } = useSelector((state) => state);

  const history = useHistory();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      skill: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(createSkills(values,auth));
      history.push('/skills')
    },
  });

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
              Add skill 
            </h1>
            {/* <div className="social-login">
                                <button className="btn facebook-btn social-btn" type="button"><span><i className="fab fa-facebook-f"></i> Sign in with Facebook</span> </button>
                                <button className="btn google-btn social-btn" type="button"><span><i className="fab fa-google-plus-g"></i> Sign in with Google+</span> </button>
                            </div>
                            <p style={{ textAlign: "center" }}> OR  </p> */}
            <div className="form-group">
              <input
                type="skill"
                id="inputskill"
                name="skill"
                className="form-control"
                placeholder="skill address"
                onChange={formik.handleChange}
              />
              {formik.errors.skill ? (
                <small className="text-danger">{formik.errors.skill}</small>
              ) : null}
            </div>
            <button className="btn btn-success btn-block" type="submit">
              <i className=""></i> Add Skill
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateSkills;
