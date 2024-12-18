import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import error from "../../../assets/error.svg";

const FormCont = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstname) errors.firstname = "First Name cannot be empty";
    else if (!/^[a-zA-Z]+$/.test(values.firstname)) {
      errors.firstname = "First Name must contain only letters!";
    }

    if (!values.lastname) errors.lastname = "Last Name cannot be empty";
    else if (!/^[a-zA-Z]+$/.test(values.lastname)) {
      errors.lastname = "Last Name must contain only letters!";
    }

    if (!values.password) errors.password = "Password cannot be empty";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password = "invalid password format!";
    }

    if (!values.email) errors.email = "Looks like this is not an email";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
      errors.email = "Please enter a valid email address!";
    }

    return errors;
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-4 bg-white rounded-[10px] shadow-custom p-10">
            <div className="flex flex-col gap-1">
              <div className="flex relative">
                <Field
                  name="firstname"
                  placeholder="First Name"
                  className={`w-full rounded-[5px] px-8 py-4 text-[14px] text-[#3D3B48] font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.firstname && touched.firstname
                      ? "border-[#FF7979] border-2"
                      : "border border-1-[#DEDEDE]"
                  } `}
                />
                {errors.firstname && touched.firstname && (
                  <img
                    src={error}
                    alt="error icon"
                    className="absolute top-4 right-3"
                  />
                )}
              </div>
              <ErrorMessage
                name="firstname"
                component="nav"
                className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex relative">
                <Field
                  name="lastname"
                  placeholder="Last Name"
                  className={`rounded-[5px] border border-1-[#DEDEDE] w-full px-8 py-4 text-[14px] text-[#3D3B48] font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.lastname && touched.lastname
                      ? "border-[#FF7979] border-2"
                      : "border border-1-[#DEDEDE]"
                  }`}
                />
                {errors.lastname && touched.lastname && (
                  <img
                    src={error}
                    alt="error icon"
                    className="absolute top-4 right-3"
                  />
                )}
              </div>
              <ErrorMessage
                name="lastname"
                component="nav"
                className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex relative">
                <Field
                  name="email"
                  placeholder="Email Address"
                  className={` rounded-[5px] border border-1-[#DEDEDE] w-full px-8 py-4 text-[14px] text-[#3D3B48] font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.email && touched.email
                      ? "border-[#FF7979] border-2"
                      : "border border-1-[#DEDEDE]"
                  }`}
                />
                {errors.email && touched.email && (
                  <img
                    src={error}
                    alt="error icon"
                    className="absolute top-4 right-3"
                  />
                )}
              </div>
              <ErrorMessage
                name="email"
                component="nav"
                className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex relative">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className={` rounded-[5px] border border-1-[#DEDEDE] w-full px-8 py-4 text-[14px] text-[#3D3B48] font-semibold leading-[26px] font-poppins opacity-75 ${
                    errors.password && touched.password
                      ? "border-[#FF7979] border-2"
                      : "border border-1-[#DEDEDE]"
                  }`}
                />
                {errors.password && touched.password && (
                  <img
                    src={error}
                    alt="error icon"
                    className="absolute top-4 right-3"
                  />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="nav"
                className="text-right text-[#FF7979] font-poppins text-[11px] italic font-medium"
              />
            </div>
            <button
              type="submit"
              className="rounded-[5px] bg-[#38CC8B] hover:bg-[#77E2B3] shadow-formBtn tracking-[1px] text-white font-poppins text-[15px] font-semibold leading-[26px] p-4 md:pb-2 md:pt-6 px-5 lg:px-16"
            >
              CLAIM YOUR FREE TRIAL
            </button>
            <span className="text-[#BAB7D4] font-poppins text-[11px] font-medium leaeding-[21px] md:leading-[26px] text-center cursor-pointer">
              By clicking the button, you are agreeing to our
              <span className="text-[#FF7979] font-bold pl-1">
                Terms and Services
              </span>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCont;
