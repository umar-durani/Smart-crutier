import React from "react";
import "./Employes.css";
import { Container, Row, Col } from "react-bootstrap";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import jazzimg from "../assets/img/jazz.png";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Icon } from "@iconify/react";

const Employes = () => {
  return (
    <Container fluid id="employes-box">
      <Row>
        <Col md={2}>
          <div className="unordered">
            <ul>
              <li>
                <div className="flex-term">
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

        <Col>
          <div className="flex-box">
            <div className="home">
              <li>
                <HomeOutlinedIcon className="icon" style={{ color: "blue" }} />
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
          {/* Insert content-box */}
          <Container className="content-box">
            <Row>
              <Col md={12} className="Content-col">
                {/* input function */}
                <div className="parent-input">
                  <div className="head-5 mt-3">
                    <h5>Basic</h5>
                  </div>
                  <br />
                  <div className="flex-input d-flex gap-5">
                    <div className="first-input">
                      <div className="input">
                        <label htmlFor="textformat">Name</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="textformat"
                          id="textformat"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="second-input">
                      <div className="input">
                        <label htmlFor="textformat">Phone N0:</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="textformat"
                          id="textformat"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="input mt-3">
                      <label htmlFor="textformat">Website</label>
                    </div>
                    <input
                      type="text"
                      name="textformat"
                      id="textformat"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Insert seocnd input section */}
                <div className="parent-input mt-4">
                  <div className="head-5">
                    <h5>Contact</h5>
                  </div>
                  <br />
                  <div className="flex-input d-flex gap-5">
                    <div className="first-input">
                      <div className="input">
                        <label htmlFor="textformat">Address</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="textformat"
                          id="textformat"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="second-input">
                      <div className="input">
                        <label htmlFor="textformat">City</label>
                      </div>
                      <div>
                        <input
                          type="text"
                          name="textformat"
                          id="textformat"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="input mt-3">
                      <label htmlFor="textformat">Country</label>
                    </div>
                    <input
                      type="text"
                      name="textformat"
                      id="textformat"
                      placeholder=""
                    />
                  </div>
                </div>

                {/* Insert depart  section */}
                <div className="department-box mt-5">
                  <div className="head-5">
                    <h5>Department</h5>
                  </div>
                  <div className="section-department mt-3">
                    <div className="button-flex d-flex mt-4">
                      <div className="head-5">
                        <h5>1- App Developement</h5>
                      </div>

                      <div className="button-flex d-flex gap-3">
                        <div className="btn">
                          <button>Edit</button>
                        </div>
                        <div className="btn">
                          <button>Profile</button>
                        </div>
                      </div>
                    </div>
                    <div className="addnew-btn">
                      <button>Add New</button>
                    </div>
                  </div>
                </div>

                {/* Insert social link */}
                <div className="social-link-box mt-4">
                  <div className="head-5">
                    <h5>Social Link</h5>
                  </div>
                  <div className="social-flex-icon mt-4">
                    <div className="icon-flex d-flex ">
                      <div className="d-flex gap-1 align-item-center">
                        <div>
                          <Icon
                            icon="logos:facebook"
                            className="facebook-icon"
                          />
                        </div>
                        <div>
                          <input type="text" name="text" placeholder="" />
                        </div>
                      </div>
                      <div className="d-flex gap-1 align-item-center">
                        <div>
                          <Icon
                            icon="skill-icons:instagram"
                            className="facebook-icon"
                          />
                        </div>
                        <div>
                          <input type="text" name="text" placeholder="" />
                        </div>
                      </div>
                    </div>

                    <div className="icon-flex d-flex mt-3">
                      <div className="d-flex gap-1 align-item-center">
                        <div>
                          <Icon
                            icon="openmoji:youtube"
                            className="facebook-icon"
                          />
                        </div>
                        <div>
                          <input type="text" name="text" placeholder="" />
                        </div>
                      </div>
                      <div className="d-flex gap-1 align-item-center">
                        <div>
                          <Icon
                            icon="skill-icons:twitter"
                            className="facebook-icon"
                          />
                        </div>
                        <div>
                          <input type="text" name="text" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="addnew-botn">
                    <button>Update</button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Employes;
