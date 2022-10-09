import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import dp from "./../images/dp.gif";
const AppFooter = () => {
  return (
    <div>
      <footer className="footer text-center">
        <div className="col-md-10 mx-auto">
          <Row>
            <Col md="4" sm="6">
              <div className="m-2">
                <div className="foot-dp">
                  <img src={dp} alt="dp" className="dp mr-2"></img>
                  <h3>
                    <Link className="text-success" to="/about">
                      About US
                    </Link>
                  </h3>
                </div>
                <p>MERN Stack APP</p>
              </div>
            </Col>
            <Col md="4" sm="6">
              <div className="m-2">
                <h3>Social </h3>
                <a href="https://github.com/mahi-17" className="text-white p-2">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/mahi17/" className="text-white p-2">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </Col>
            <Col md="4">
              <div className="m-2">
                <h3>Address</h3>
                <p>XYZ City, AA 171717@gmail.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="copyright">
        <p>&copy;2022 Coders Community</p>
      </div>
    </div>
  );
};

export default AppFooter;
