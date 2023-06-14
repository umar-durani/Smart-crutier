import React from "react";
import "./Condidate.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import jazzimg from "../assets/img/jazz.png";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";

const Candidate = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={2}>
            <div className="img-box">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="unordered">
              <ul>
                <li>
                  <div className="flex-term" style={{background: '#E3F3FF'}}>
                    <div>
                      <HomeOutlinedIcon className="icon" />
                    </div>
                    <div>
                      <h6>Home</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex-term">
                    <div>
                      <HomeOutlinedIcon className="icon" />
                    </div>
                    <div>
                      <h6>Employes</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex-term">
                    <div>
                      <PeopleAltOutlinedIcon className="icon" />
                    </div>
                    <div>
                      <h6>Candidates</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex-term">
                    <div>
                      <BusinessCenterIcon className="icon" />
                    </div>
                    <div>
                      <h6>Jobs</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex-term">
                    <div>
                      <StarBorderPurple500OutlinedIcon className="icon" />
                    </div>
                    <div>
                      <h6>Reports</h6>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex-term">
                    <div>
                      <SettingsIcon className="icon" />
                    </div>
                    <div>
                      <h6>Setting</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          {/* Insert Navbar  */}
          <Col>
            <div className="flex-box">
              <div className="home">
                <li>
                  <HomeOutlinedIcon
                    className="icon"
                    style={{ color: "blue" }}
                  />
                  <span style={{ color: "blue" }}>Home</span>
                </li>
              </div>
              <div className="flex-box">
                <div className="icon">
                  <NotificationsActiveOutlinedIcon style={{ color: "blue" }} />
                </div>
                <div className="icon">
                  <img src={jazzimg} alt="" srcset="" />
                </div>
              </div>
            </div>

            {/* Insert content  box */}
            <Container className="content-box">
              <Row>
                <Col md={{ span: 4, offset: 2 }}>
                 <div className="parent-flex-candidate">
                 <div className="img-candidate">
                    <img src={jazzimg} alt="" srcset="" />
                  </div>
                  <div className="update-btn mt-3">
                    <button>Update Profile</button>
                  </div>
                 </div>
                 {/* Insert text area */}
                 <div className="discription-parent">
                    <div className="head-5">
                        <h5>Discription</h5>
                    </div>
                    <div className="textarea p-4 mt-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.   possimus doloremque eaque voluptates error recusandae!
                    </div>
                 </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Candidate;
