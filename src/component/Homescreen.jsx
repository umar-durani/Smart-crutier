import React from "react";
import "./Homescreen.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import jazzimg from "../assets/img/jazz.png";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import card1 from "../assets/img/image 10.png";
import card2 from "../assets/img/image 11.png";
import card3 from "../assets/img/image 12.png";
import { NavLink } from "react-router-dom";

const Homescreen = () => {
  return (
    <>
      <Container fluid className="Homescreen-box">
        <Row>
          <Col md={2}>
            <div className="img-box">
              <img src={logo} alt="" srcset="" />
            </div>
            <div className="unordered">
              <ul>
                <li>
                  <NavLink to="/home">
                    <div className="flex-term">
                      <div>
                        <HomeOutlinedIcon className="icon" />
                      </div>
                      <div>
                        <h6>Home</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/employes">
                    <div className="flex-term">
                      <div>
                        <HomeOutlinedIcon className="icon" />
                      </div>
                      <div>
                        <h6>Employes</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/candidate">
                    <div className="flex-term">
                      <div>
                        <PeopleAltOutlinedIcon className="icon" />
                      </div>
                      <div>
                        <h6>Candidates</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/setting">
                    <div className="flex-term">
                      <div>
                        <BusinessCenterIcon className="icon" />
                      </div>
                      <div>
                        <h6>Jobs</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/setting">
                    <div className="flex-term">
                      <div>
                        <StarBorderPurple500OutlinedIcon className="icon" />
                      </div>
                      <div>
                        <h6>Reports</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/setting">
                    <div className="flex-term">
                      <div>
                        <SettingsIcon className="icon" />
                      </div>
                      <div>
                        <h6>Setting</h6>
                      </div>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </Col>
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

            <Container className="content-box">
              <Row className="relatvie">
                <Col md={4}>
                  <div className="card">
                    <img className="card-img" src={card1} alt="" />
                    <span className="editprofile-head">Edit Porfile</span>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="card">
                    <img className="card-img" src={card2} alt="" />
                    <span className="editprofile-head">Change Team</span>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="card">
                    <img className="card-img" src={card3} alt="" />
                    <span className="editprofile-head">Manage Template</span>
                  </div>
                </Col>
              </Row>
              <div className="card offset-card">
                <img className="card-img" src={card3} alt="" />
                <span className="editprofile-head">Customize jobs</span>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Homescreen;
