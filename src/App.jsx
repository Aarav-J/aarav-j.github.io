import "./styles/App.scss";
import Typewriter from "./Components/Typewriter";
import SocialMediaBar from "./Components/SocialMediaBar/SocialMediaBar";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills/Skills";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
function getWindowSize() {
  const { innerWidth, innerHeight } = window;

  return { innerWidth, innerHeight };
}

const firstContent = `I am Aarav Jain `;

const App = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      console.log("helo");
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Aarav Jain</title>
          <link rel="canonical" href="https://aarav-j.github.io" />
          <meta name="description" content="Aarav Jain's Portfolio" />
        </Helmet>

        <div className="main-content">
          <div
            className="first box"
            style={{
              top: 0 + windowSize.innerHeight / 10,
              height: windowSize.innerHeight,
              width: windowSize.innerWidth,
            }}
          >
            <div className="title">
              <Typewriter content={firstContent} speed={300} />
            </div>
            <div className="everything-else">
              <div className="subtitle">
                <p>An amazing species</p>
              </div>
              <div className="about-me">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  ipsam animi expedita veniam corrupti aperiam fuga maiores ut
                  hic omnis optio soluta quisquam? Enim alias adipisci illo
                  nulla. Hic, quod. Lorem ipsum dolor, sit amet consectetur
                  adipisicing elit. Numquam aut et nisi accusantium ex
                  dignissimos quam repellat quas! Corrupti deleniti ea impedit
                  quasi deserunt earum totam omnis soluta veritatis nulla?
                </p>
              </div>

              <div className="socialMediaBar">
                <SocialMediaBar />
              </div>
            </div>
          </div>
          <div
            className="skills box"
            style={{
              top: windowSize.innerHeight + windowSize.innerHeight / 10,
              height: windowSize.innerHeight,
              width: windowSize.innerWidth,
            }}
          >
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
