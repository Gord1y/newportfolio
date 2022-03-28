import about from "./img/about.jpg";
import pers from "./img/pers.png";
import work from "./img/work1.jpg";
import work2 from "./img/work4.jpg";
import work3 from "./img/work2.jpg";
import work1 from "./img/work6.jpg";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Body() {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tljsarq",
        "template_ktntd3p",
        formRef.current,
        "Z8cRNXi3ML11P7iJM"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          document.getElementById("contact__form").reset();
        },
        (error) => {
          console.log(error.text);
          document.getElementById("contact__form").reset();
        }
      );
  };

  return (
    <>
      <div className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">
              Hello,
              <br />
              I'am <span className="home__title-color">Danya</span>,
              <br />
              Web Developer
            </h1>

            <a href="#contact" className="button">
              Contact
            </a>
          </div>

          <div className="home__social">
            <a href="https://github.com/Gord1y" className="home__social-icon">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01bbfaceffedad6be1?viewMode=1"
              className="home__social-icon"
            >
              <i class="bx bx-briefcase"></i>
            </a>
            <a href="https://t.me/Gord1yy" className="home__social-icon">
              <i className="bx bxl-telegram"></i>
            </a>
          </div>

          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
              xmlns-xlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                <image className="home__blob-img" x="15" y="15" href={pers} />
              </g>
            </svg>
          </div>
        </section>

        <section className="about section " id="about">
          <h2 className="section-title">About</h2>

          <div className="about__container bd-grid">
            <div className="about__img">
              <img src={about} alt="" />
            </div>

            <div>
              <h2 className="about__subtitle">I'am Gord1y</h2>
              <p className="about__text">
                I’m a Frontend developer. I work smoothly under deadline
                pressure and constantly upgrade my skills. I am an easy person
                to integrate with a team, and responsible enough. I am
                detail-oriented, but even more client-oriented, that's why I am
                always trying to find the best possible solution for any issue.
              </p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>

          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Profesional Skills</h2>
              <p className="skills__text">
                If you need high-quality work that needs to be done on time,
                please send me a layout or image of the work that needs to be
                done for you. After that I will give you a rough estimate of how
                much time it will take for me to complete this work.
                <br /> <b>It will save a bit of your time.</b>
              </p>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-html5 skills__icon"></i>
                  <span className="skills__name">HTML5</span>
                </div>
                <div className="skills__bar skills__html"></div>
                <div>
                  <span className="skills__percentage">95%</span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-css3 skills__icon"></i>
                  <span className="skills__name">CSS3, scss</span>
                </div>
                <div className="skills__bar skills__css"></div>
                <div>
                  <span className="skills__percentage">85%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxl-react skills__icon"></i>
                  <span className="skills__name">REACT.js</span>
                </div>
                <div className="skills__bar skills__react"></div>
                <div>
                  <span className="skills__percentage">90%</span>
                </div>
              </div>
              <div className="skills__data">
                <div className="skills__names">
                  <i className="bx bxs-file-js skills__icon"></i>
                  <span className="skills__name">JAVASCRIPT</span>
                </div>
                <div className="skills__bar skills__js"></div>
                <div>
                  <span className="skills__percentage">75%</span>
                </div>
              </div>
            </div>

            <div>
              <img src={work} alt="" className="skills__img" />
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>

          <div className="work__container bd-grid">
            <a
              href="https://www.upwork.com/freelancers/~01bbfaceffedad6be1?viewMode=1"
              className="work__img"
            >
              <img src={work1} alt="" />
              <div className="work__txt">UpWork portfolio</div>
            </a>

            <a href="http://activedocks.fun/secport" className="work__img">
              <img src={work2} alt="" />
              <div className="work__txt">Last job I had</div>
            </a>
            <a href="http://activedocks.fun/app" className="work__img">
              <img src={work3} alt="" />
              <div className="work__txt">Hardest project</div>
            </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form
              id="contact__form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact__form"
            >
              <input
                required
                type="text"
                minLength="2"
                placeholder="Name"
                name="user_name"
                className="contact__input"
              />
              <input
                required
                type="email"
                placeholder="Email"
                name="user_email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                className="contact__input"
              />
              <textarea
                required
                cols="0"
                rows="10"
                placeholder="Describe your project"
                name="message"
                className="contact__input"
              ></textarea>
              <button className="contact__button button">Submit</button>
              <br />
              {done && "Thank you..."}
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Body;
