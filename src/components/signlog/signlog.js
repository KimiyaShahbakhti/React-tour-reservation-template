import React from "react";
import "./signlog.css";
import Button from "../button/button";
import { useState } from "react";
const Signlog = () => {
  const [name, setname] = useState(" ");
  const [lastname, setlastname] = useState(" ");
  const [tell, settell] = useState(" ");
  const [email, setemail] = useState(" ");
  const [username, setusername] = useState(" ");
  const [password1, setpassword1] = useState(" ");
  const [password2, setpassword2] = useState(" ");
  const [alreadyReg, setalreadyReg] = useState(false);

  const nameHandler = (event) => {
    setname(event.target.value);
  };
  const lastnameHandler = (event) => {
    setlastname(event.target.value);
  };
  const emailHandler = (event) => {
    setemail(event.target.value);
  };
  const tellHandler = (event) => {
    settell(event.target.value);
  };
  const usernameHandler = (event) => {
    setusername(event.target.value);
  };
  const passwordHandler = (event) => {
    setpassword1(event.target.value);
  };
  const passwordconfirmHandler = (event) => {
    setpassword2(event.target.value);
  };

  const validate = () => {
    if (
      name === " " ||
      lastname === " " ||
      tell === " " ||
      username === " " ||
      username === " " ||
      password1 === " " ||
      password2 === " "
    ) {
      console.log("yeki az field hha khalie");
      return false;
    } else if (!email.includes("@") || !email.includes(".")) {
      console.log("email @ ya . ndre");
      return false;
    } else if (password1 !== password2) {
      console.log("password ha yeki nistan");
      return false;
    } else if (tell.length < 10) {
      console.log("shomare tedad kame");
      return false;
    }
    return true;
  };
  const regHandler = () => {
    const validateResult = validate();
    if (validateResult) {
      console.log("valid hast");
      return true;
    } else {
      console.log("valid nist");
      return false;
    }
  };
  const loginHandler = () => {};
  const alreadyRegHandler = () => {
    console.log(alreadyReg);
    if (!alreadyReg) {
      setalreadyReg(true);
    } else {
      setalreadyReg(false);
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row p-5 align-items-center">
          <div className="col-md-7 col-lg-6 ml-auto">
            {alreadyReg ? (
              <form action="#">
                <div className="row ">
                  <div className="input-group mb-3">
                    <input
                      onChange={usernameHandler}
                      id="username-login"
                      type="text"
                      name="username"
                      placeholder="نام کاربری"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={passwordHandler}
                      id="password-login"
                      type="password"
                      name="password"
                      autoComplete="false"
                      placeholder="رمز عبور"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3 col-lg-12 mx-auto mb-0">
                    <Button
                      clicked={loginHandler}
                      btnheight="btn-h40"
                      btnsize="btn-100"
                      to="/signup"
                      btnstyle="btn-blue"
                    >
                      ورود
                    </Button>
                  </div>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"></div>
                    <div className="or px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </div>

                    <div className="border-bottom w-100 mr-5"></div>
                  </div>
                  <div className="form-group col-lg-12 mx-auto">
                    <p className="already-reg text-muted font-weight-bold">
                      حساب کاربری ندارید؟
                      <a
                        onClick={alreadyRegHandler}
                        href="#"
                        className="text-primary ml-2"
                      >
                        ثبت نام کنید
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            ) : (
              <form action="#">
                <div className="row ">
                  <div className="input-group mb-3">
                    <input
                      onChange={nameHandler}
                      type="text"
                      className="form-control"
                      placeholder="نام"
                      aria-label="fistname"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={lastnameHandler}
                      id="lastName"
                      type="text"
                      name="lastname"
                      placeholder="نام خانوادگی"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={emailHandler}
                      id="email"
                      type="email"
                      name="email"
                      placeholder="آدرس ایمیل"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={tellHandler}
                      id="phoneNumber"
                      type="tel"
                      name="phone"
                      placeholder="شماره تلفن"
                      className="form-control phone-input"
                    />
                    <select
                      id="countryCode"
                      name="countryCode"
                      className="phone-select custom-select form-control "
                    >
                      <option value="">+12</option>
                      <option value="">+10</option>
                      <option value="">+15</option>
                      <option value="">+18</option>
                    </select>
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={usernameHandler}
                      id="username"
                      type="text"
                      name="usename"
                      placeholder="نام کاربری"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={passwordHandler}
                      id="password"
                      type="password"
                      name="password"
                      autoComplete="false"
                      placeholder="رمز عبور"
                      className="form-control"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <input
                      onChange={passwordconfirmHandler}
                      id="passwordConfirmation"
                      type="text"
                      autoComplete="false"
                      name="passwordConfirmation"
                      placeholder="تکرار رمزعبور"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group mt-3 col-lg-12 mx-auto mb-0">
                    <Button
                      clicked={regHandler}
                      btnheight="btn-h40"
                      btnsize="btn-100"
                      to="/signup"
                      btnstyle="btn-blue"
                    >
                      ثبت نام
                    </Button>
                  </div>
                  <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div className="border-bottom w-100 ml-5"></div>
                    <div className="or px-2 small text-muted font-weight-bold text-muted">
                      OR
                    </div>

                    <div className="border-bottom w-100 mr-5"></div>
                  </div>
                  <div className="form-group col-lg-12 mx-auto">
                    <p className="already-reg text-muted font-weight-bold">
                      قبلا ثبت نام کردید؟
                      <a
                        onClick={alreadyRegHandler}
                        href="#"
                        className="text-primary ml-2"
                      >
                        ورود
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="col-md-5 mb-md-0">
            <img
              src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg"
              alt=""
              className="img-fluid mb-3 d-none d-md-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signlog;
