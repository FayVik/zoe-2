import { React, Fragment } from "react";
// import { a } from "react-router-dom";
import csocial from "../images/cardano-social.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import medium from "../images/medium.png";
import styled from "styled-components";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Social() {
  return (
    <Fragment>
      {/* Mobile View */}
      <div class="d-block d-lg-none">
        <div
          className="container-fluid"
          style={{
            position: "fixed",
            bottom: 8,
            width: "100%",
            right: 0,
            zIndex: 2000,
            background: "rgba(66,31,115,0.7)",
          }}
        >
          <ul class="nav nav-fill">
            <li class="nav-item">
              <a href="https://www.instagram.com/zoepoolz/">
                <ImgM src={instagram} />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://twitter.com/zoepoolz">
                <ImgM src={twitter} />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://zoepool.medium.com">
                <ImgM src={medium} />
              </a>
            </li>
            <li class="nav-item">
              <a href="mailto:proofoflifezoe@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} className="ml-4" />
              </a>
            </li>
            <li class="nav-item">
              <a href="/">
                <ImgM src={csocial} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Browser Wide View */}
      <div class="d-none d-lg-block">
        <div
          class="dropdown dropleft"
          style={{
            position: "absolute",
            top: 20,
            right: 10,
            zIndex: 2000,
            width: "15%",
          }}
        >
          <button
            class="fabar"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Connect <FontAwesomeIcon icon={faBars} className="ml-4" />
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <ul class="nav"> */}
            <li class="nav-item">
              <a href="https://www.instagram.com/zoepoolz/">
                <ImgM src={instagram} />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://twitter.com/zoepoolz">
                <ImgM src={twitter} />
              </a>
            </li>
            <li class="nav-item">
              <a href="https://zoepool.medium.com">
                <ImgM src={medium} />
              </a>
            </li>
             <li class="nav-item">
              <a href="mailto:proofoflifezoe@gmail.com">
                <FontAwesomeIcon icon={faEnvelope}/>
              </a>
            </li>
            <li class="nav-item">
              <a href="/">
                <ImgM src={csocial} />
              </a>
            </li>
            {/* </ul>  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// const Img = styled.img`
//   height: 80px;
//   padding-right: 1em;
//   padding-bottom: 0.5em;
//   padding-top: 0.5em;
// `;

const ImgM = styled.img`
  height: 35px;
  padding-left: 0.1em;
  padding-bottom: 0.1em;
  padding-top: 0.1em;
`;

export default Social;
