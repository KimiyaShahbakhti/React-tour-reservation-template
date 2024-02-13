import React, { useEffect, useState } from "react";
import "./footer.css";
import Button from "../button/button";
import { Link } from "react-router-dom";
const Footer = () => {
  const [notifyinput, setnotifyinput] = useState(" ");
  const [buttonRes, setbuttonRes] = useState(true);
  useEffect(() => {
    buttonInRes();
  }, []);

  const notifyhandler = (event) => {
    setnotifyinput(event.target.value);
  };
  const validate = () => {
    if (notifyinput === " ") {
      console.log("khalie");
      return false;
    } else if (!notifyinput.includes("@") || !notifyinput.includes(".")) {
      console.log("@ ya . ndre");
      return false;
    }
  };
  const notifybtnhandler = () => {
    const validateResult = validate();
    if (validateResult) {
      console.log("valid hast");
      return true;
    } else {
      console.log("valid nist");
      return false;
    }
  };

  const buttonInRes = () => {
    if (window.innerWidth <= 700) {
      setbuttonRes(false);
    } else {
      setbuttonRes(true);
    }
  };
  window.addEventListener("resize", buttonInRes);
  return (
    <div className="footer">
      <div className="notify">
        <div className="container">
          <h5>
            به خبرنامه ما بپیوندید تا ازآفر تورهای جهانگردی و ایرانگردی مطلع
            شوید.
          </h5>
          <div className="notify-box">
            <input
              type="text"
              autoComplete={false}
              className="notify-input mb-3"
              onChange={notifyhandler}
              placeholder="لطفاآدرس ایمیل خود را وارد نمایید."
            />
            <div className="notify-btn-box">
              <Button
                clicked={notifybtnhandler}
                to="/"
                btnstyle="btn-blue"
                btnsize={buttonRes ? "btn-20" : "btn-90"}
                btnheight="btn-h40"
              >
                ثبت
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="row brand-footer">
            <p>
              <i className="fab fa-typo3"></i>Travel
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p className="feinfooter">درباره ما</p>
              <div className="aboutinfooter">
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <ul>
                  <li>
                    <Link to="/">
                      تماس با ما <i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      همکاری با ما<i className="fa fa-chevron-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <p className="feinfooter">راهنما</p>
              <ul>
                <li>
                  <Link to="/faq">
                    سوالات متداول<i className="fa fa-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    گالری<i className="fa fa-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tourism">
                    رزرو تور های ایرانی<i className="fa fa-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="/tourism">
                    رزرو تور های خارجی<i className="fa fa-chevron-right"></i>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="feinfooter">شبکه های اجتماعی</p>
              <div className="socailinfooter">
                <Link to="/">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-telegram"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-whatsapp"></i>
                </Link>
                <Link to="/">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="copyright">
              <div>
                <p className="text-center">copyright&copy;2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
