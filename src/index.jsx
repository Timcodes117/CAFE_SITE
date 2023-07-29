import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowRight,
  faBarsStaggered,
  faChevronLeft,
  faChevronRight,
  faClose,
  faContactCard,
  faCopyright,
  faCutlery,
  faHome,
  faHotdog,
  faInfoCircle,
  faLightbulb,
  faMailBulk,
  faMoon,
  faMouse,
  faPaperPlane,
  faPlane,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import image1 from "./assets/images/img5.jpg";
import image2 from "./assets/images/events.jpg";
import image3 from "./assets/images/reserve.jpg";
import image4 from "./assets/images/snacks.jpg";
import image5 from "./assets/images/treats.jpg";
import image6 from "./assets/images/dev.jpg";
// import {faBounce} from 'font-awesome-animation/css'
import { library } from "@fortawesome/fontawesome-svg-core";
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import "./style.css";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(faFacebook);
function Index() {
  const [theme, setTheme] = useState("light");
  const [nav, setnav] = useState("hide");
  const [themeState, setThemeState] = useState(false);
  const [navState, setnavState] = useState(true);

  var deivceWidth = document.documentElement.clientWidth;
  // console.log(deivceWidth)

  const toggleTheme = () => {
    setThemeState((status) => !status);
    if (themeState === true) {
      setTheme("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
    } else {
      setTheme("dark");
      document.body.style.background = "#0b0f13";
      document.body.style.color = "white";
    }
  };

  const toggleNav = () => {
    setnavState((status) => !status);
    if (navState === true && deivceWidth < 900) {
      setnav("show");
    } else {
      setnav("hide");
    }
  };

  return (
    <>
      {/*theme === 'light' ? {background: 'white', color: 'black', backgroundPosition: 'fixed'} : {background: '', color: 'gainsboro', backgroundSize: 'cover', backgroundPosition: '', backgroundAttachment: 'fixed'}*/}
      <header>
        <div style={{ marginLeft: 20 }}>
          <FontAwesomeIcon
            icon={faHotdog}
            size={100}
            style={{ marginRight: 5, fontSize: 30 }}
          />
          <label style={{ fontSize: 30, fontFamily: "logo" }}>CAFE</label>
        </div>
        {(nav === "show" && deivceWidth < 900) || deivceWidth > 900 ? (
          <div className="nav-bars">
            {deivceWidth > 900 ? (
              <>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Intro
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  about
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  products
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  services
                </a>
              </>
            ) : (
              <>
                <div onClick={toggleNav} style={{ textAlign: "left" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faContactCard}
                    size={50}
                    style={{ color: "gainsboro", fontSize: 20 }}
                  />
                  <label htmlFor="">Intro</label>
                </div>
                <div onClick={toggleNav} style={{ textAlign: "left" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faCutlery}
                    size={50}
                    style={{ color: "gainsboro", fontSize: 20 }}
                  />
                  <label htmlFor="">about us</label>
                </div>
                <div onClick={toggleNav} style={{ textAlign: "left" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    size={50}
                    style={{ color: "gainsboro", fontSize: 20 }}
                  />
                  <label htmlFor="">services</label>
                </div>
                <div onClick={toggleNav} style={{ textAlign: "left" }}>
                  {" "}
                  <FontAwesomeIcon
                    icon={faHome}
                    size={50}
                    style={{ color: "gainsboro", fontSize: 20 }}
                  />
                  <label htmlFor="">contact</label>{" "}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="nav-bars" style={{ height: 0 }}></div>
        )}
        <div className="controls">
          <div onClick={toggleTheme} style={{ marginRight: 10 }}>
            {theme === "light" ? (
              <FontAwesomeIcon
                icon={faMoon}
                size={50}
                style={{ color: "gainsboro", fontSize: 20 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faLightbulb}
                size={50}
                style={{ color: "gainsboro", fontSize: 20 }}
              />
            )}
          </div>
          <div onClick={toggleNav}>
            {nav === "hide" ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                size={50}
                className="barTrigger"
                style={{ color: "gainsboro", fontSize: 20, marginTop: -5 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faClose}
                size={50}
                className="barTrigger"
                style={{ color: "gainsboro", fontSize: 20, marginTop: -5 }}
              />
            )}
          </div>
        </div>
      </header>

      <div className="Hero-content">
        <div className="lft">
          <label style={{ fontSize: 60, width: "30%" }} className="mabld">
            QUALITY EXPERIENCE...
          </label>
          <label style={{ width: "35%", fontSize: 13 }} className="mds">
            we bring quality beverages and deserts from our cuisines to our
            neighborhoods globally...
          </label>
          <br />
          <div
            style={theme === "light" ? null : { background: "#ffffff15" }}
            className="button"
          >
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 50,
                alignSelf: "center",
                justifySelf: "flex-start",
              }}
              className="cu"
            >
              contact us
            </label>
            <div className="inner-button">
              <FontAwesomeIcon icon={faArrowRight} size={20} />
            </div>
          </div>
          <div className="scrollIndicator">
            <FontAwesomeIcon icon={faMouse} /> scroll down{" "}
            <FontAwesomeIcon icon={faArrowDown} style={faArrowDown} />
          </div>
          <div className="social-icons">
            <FontAwesomeIcon
              icon={faFacebook}
              size={50}
              style={{ color: "gainsboro", fontSize: 15 }}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              size={50}
              style={{ color: "gainsboro", fontSize: 15 }}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size={50}
              style={{ color: "gainsboro", fontSize: 15 }}
            />
          </div>
        </div>
        <div className="rht">
          <div className="img"></div>
        </div>
      </div>
      <br />
      {/* <br /> */}
      {/* <div className="contents"> */}
      <br />
      {/* <br /> */}
      {/* first section */}
      <div
        className="section"
        style={{ flexDirection: "row", minHeight: "80vh" }}
      >
        <div className="sl">
          <img
            src={require("./assets/images/refreshing-hot-cup-of-coffee-at-a-cafe.jpg")}
            alt=""
            className="ab"
          />
        </div>
        <div className="sr">
          <strong
            style={{
              fontSize: 30,
              marginTop: 20,
              paddingLeft: 15,
              wordWrap: "normal",
              width: "90%",
            }}
            className="abtus"
          >
            {" "}
            About us
          </strong>
          <label
            htmlFor=""
            style={{
              width: "90%",
              marginTop: 50,
              paddingLeft: 15,
              wordWrap: "normal",
            }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            eum obcaecati nam? Praesentium, aspernatur? Fugiat tempora
            perspiciatis deleniti minus quaerat cum quos vero distinctio
            consequuntur laudantium, nisi earum aperiam! Veritatis. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolores eum obcaecati
            nam? Praesentium, aspernatur? Fugiat tempora perspiciatis deleniti
            minus quaerat cum quos vero distinctio consequuntur laudantium, nisi
            earum aperiam! Veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Dolores eum obcaecati nam? Praesentium,
            aspernatur? Fugiat tempora perspiciatis deleniti minus quaerat cum
            quos vero distinctio consequuntur laudantium, nisi earum aperiam!
            Veritatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dolores eum obcaecati nam? Praesentium, aspernatur? Fugiat tempora
            perspiciatis deleniti minus quaerat cum quos vero distinctio
            consequuntur laudantium, nisi earum aperiam! Veritatis. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Dolores eum obcaecati
            nam? Praesentium, aspernatur? Fugiat tempora perspiciatis deleniti
            minus quaerat cum quos vero distinctio consequuntur laudantium, nisi
            earum aperiam! Veritatis.
          </label>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <strong className="proSec">Products</strong>
      <br />
      <label
        style={{ marginLeft: 20, fontSize: 10, color: "gray", width: "30%" }}
      >
        some of our customers most ordered products on the top shelf..
      </label>
      <br />
      <br />
      <br />
      <div className="product-section">
        <div className="product-view">
          <div className="thumbnail">
            <img src={require("./assets/images/img(3).jpg")} alt="" />
          </div>
          <br />
          <strong style={{ fontSize: 10, color: "gold" }}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </strong>
          <strong style={{ fontSize: 30 }}>Cappuccino</strong>
          <label style={{ fontSize: 10, color: "gray" }}>
            An Hot sweet beverage...
          </label>
          <label style={{ textAlign: "right", fontSize: 25, color: "gray" }}>
            $4.36
          </label>
        </div>
        <div className="product-view">
          <div className="thumbnail">
            <img
              src={require("./assets/images/yummy-donut-and-paper-cup-on-wooden-table-against-brown-background.jpg")}
              alt=""
            />
          </div>
          <br />
          <strong style={{ fontSize: 10, color: "gold" }}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </strong>
          <strong style={{ fontSize: 30 }}>BreakSnack</strong>
          <label style={{ fontSize: 10, color: "gray" }}>
            Sugar iced-donuts with an Hot sweet beverage...
          </label>
          <label style={{ textAlign: "right", fontSize: 25, color: "gray" }}>
            $8.05
          </label>
        </div>
        <div className="product-view">
          <div className="thumbnail">
            {/*  npx browserslist@latest --update-db */}
            <img src={require("./assets/images/food11.jpg")} alt="" />
          </div>
          <br />
          <strong style={{ fontSize: 10, color: "gold" }}>
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
          </strong>
          <strong style={{ fontSize: 30 }}>Brownies</strong>
          <label style={{ fontSize: 10, color: "gray" }}>
            An home made chocolate brownie
          </label>
          <label style={{ textAlign: "right", fontSize: 25, color: "gray" }}>
            $3.00
          </label>
        </div>
      </div>
      <br />
      <br />
      <strong className="proSec">Services</strong>
      <br />
      <label
        style={{ marginLeft: 20, fontSize: 10, color: "gray", width: "30%" }}
      >
        scroll / swipe Left-Right to view more...
      </label>
      <br />
      <br />

      <div className="services">
        <FontAwesomeIcon
          icon={faChevronLeft}
          style={{ position: "absolute", left: 20 }}
        />
        <FontAwesomeIcon
          icon={faChevronRight}
          style={{ position: "absolute", right: 20 }}
        />
        <div className="serView">
          <div className="serViewContent">
            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image1})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  Delivery
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image2})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  Events
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image3})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  Reservations
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image4})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  Snacks
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image5})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  More Treats..
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            <div
              className="serViewImg"
              style={{ backgroundImage: `url(${image6})` }}
            >
              <div className="serViewDetails">
                <label htmlFor="" style={{ marginLeft: 10 }}>
                  Special Delivery
                </label>
                <label
                  htmlFor=""
                  style={{ width: "80%", fontSize: 10, marginLeft: 10 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                  nulla. Perferendis nam eos rerum.
                </label>
                <br />
                <br />
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* </div> */}

      <div className="contactForm">
        <strong className="cfd">Contact Us </strong>
        <br />
        <label
          style={{ marginLeft: 20, fontSize: 10, color: "gray", width: "30%" }}
        >
          You can drop a message / report via email...
        </label>
        <div className="contact">
          <div className="SocialContact">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#1a73e8" }} />
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#1ca8f9" }} />
            <FontAwesomeIcon icon={faInstagram} style={{ color: "hotpink" }} />
          </div>
          <div className="FormContact">
            <form action="">
              <strong style={{ fontSize: 30 }}>
                Send us a mail <FontAwesomeIcon icon={faMailBulk} />
              </strong>
              <fieldset>
                <legend>email</legend>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="input your email address"
                  required
                />
              </fieldset>
              <br />
              <fieldset>
                <legend>username</legend>
                <input
                  type="text"
                  name=""
                  id=""
                  minLength={2}
                  placeholder="insert your name"
                  required
                />
              </fieldset>
              <br />
              <fieldset>
                <legend>message</legend>
                <textarea
                  name=""
                  id=""
                  cols="65"
                  rows="5"
                  minLength={10}
                  placeholder="type your message here.."
                  required
                ></textarea>
              </fieldset>
              <button type="submit">
                Send Message <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer>
        <br />
        <div style={{ marginLeft: 20 }}>
          <FontAwesomeIcon
            icon={faHotdog}
            size={100}
            style={{ marginRight: 5, fontSize: 30 }}
          />
          <label style={{ fontSize: 30, fontFamily: "logo" }}>CAFE</label>
        </div>
        <label style={{ color: "gray", marginLeft: 20, fontSize: 10 }}>
          coffee and more..
        </label>
        <br />
        <br />
        <br />

        <div className="footcont">
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 10,
              color: "gray",
              fontSize: 15,
            }}
          >
            <a href="">About us</a>
            <a href="">Products</a>
            <a href="">Services</a>
            <a href="mailto:test@gmail.com">Mail us</a>
          </div>
          <br />
          <div className="sm">
            <div className="smcnt">
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div className="smcnt">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="smcnt">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

          <br />
          <label htmlFor="">Timothy Adebogun</label>
          <br />
          <label htmlFor="">
            <FontAwesomeIcon icon={faCopyright} style={{ color: "gray" }} />{" "}
            2022
          </label>
        </div>
        <br />
        <br />
      </footer>

      <div className="floatingButtons"></div>
    </>
  );
}

// npx browserslist@latest --update-db

export default Index;
