import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../formatted.css'; // Adjust the path according to your file structure

const HomePage = () => {
  useEffect(() => {
    AOS.init();

    const loader = document.getElementById("preloader");

    const onLoad = () => {
      if (loader) {
        loader.style.display = "none";
      }
      const heyElement = document.querySelector('.hey');
      if (heyElement) {
        heyElement.classList.add('popup');
      }
    };

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    const pupilsArr = Array.from(document.getElementsByClassName('footer-pupil'));
    let pupilStartPoint = -10;
    let pupilRangeX = 20;
    let pupilRangeY = 15;
    let mouseXStartPoint = 0;
    let mouseXEndPoint = window.innerWidth;
    let mouseYEndPoint = window.innerHeight;
    let mouseXRange = mouseXEndPoint - mouseXStartPoint;

    const mouseMove = (event) => {
      let currentXPosition = event.clientX - mouseXStartPoint;
      let fracXValue = currentXPosition / mouseXRange;
      let currentYPosition = event.clientY;
      let fracYValue = currentYPosition / mouseYEndPoint;
      let pupilXCurrrentPosition = pupilStartPoint + (fracXValue * pupilRangeX);
      let pupilYCurrrentPosition = pupilStartPoint + (fracYValue * pupilRangeY);
      pupilsArr.forEach((curPupil) => {
        curPupil.style.transform = `translate(${pupilXCurrrentPosition}px, ${pupilYCurrrentPosition}px)`;
      });
    };

    const windowResize = () => {
      mouseXEndPoint = window.innerWidth;
      mouseYEndPoint = window.innerHeight;
      mouseXRange = mouseXEndPoint - mouseXStartPoint;
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  const settingtoggle = () => {
    const settingContainer = document.getElementById("setting-container");
    const visualModeContainer = document.getElementById("visualmodetogglebuttoncontainer");
    const soundToggleContainer = document.getElementById("soundtogglebuttoncontainer");

    if (settingContainer) {
      settingContainer.classList.toggle('settingactivate');
    }
    if (visualModeContainer) {
      visualModeContainer.classList.toggle('visualmodeshow');
    }
    if (soundToggleContainer) {
      soundToggleContainer.classList.toggle('soundmodeshow');
    }
  };

  const visualmode = () => {
    document.body.classList.toggle('light-mode');
    const elements = document.querySelectorAll('.needtobeinvert');
    elements.forEach(element => {
      element.classList.toggle('invertapplied');
    });
  };

  return (
    <section className="landing-page-container" id="home">
      <div className="blob"></div>
      <div className="text-content">
        <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
          <p className="jello">H</p>
          <p className="jello">e</p>
          <p className="jello">l</p>
          <p className="jello">l</p>
          <p className="jello">o</p>
          <p className="jello">(</p>
          <p className="jello">)</p>
          <p className="jello">;</p>
          &nbsp;
          <p className="jello">I</p>
          <p className="jello">'</p>
          <p className="jello">m</p>
        </article>
        <article id="name" data-aos="fade-up" data-aos-delay="200">
          <p className="jello">J</p>
          <p className="jello">a</p>
          <p className="jello">n</p>
          <p className="jello">a</p>
          <p className="jello">n</p>
          <p className="jello">i</p>
          &nbsp;
          <p className="jello">W</p>
          <p className="jello">i</p>
          <p className="jello">t</p>
          <p className="jello">h</p>
          <p className="jello">a</p>
          <p className="jello">n</p>
          <p className="jello">a</p>
          <p className="jello">.</p>
        </article>
        <article id="work" data-aos="fade-up" data-aos-delay="400">
          <div>
            <p className="jello">I</p>
          </div>
          <div>
            <p className="jello">c</p>
            <p className="jello">o</p>
            <p className="jello">d</p>
            <p className="jello">e</p>
          </div>
          <div>
            <p className="jello">f</p>
            <p className="jello">o</p>
            <p className="jello">r</p>
          </div>
          <div>
            <p className="jello">w</p>
            <p className="jello">e</p>
            <p className="jello">b</p>
          </div>
          <div>
            <p className="jello">&</p>
          </div>
          <div>
            <p className="jello">m</p>
            <p className="jello">o</p>
            <p className="jello">b</p>
            <p className="jello">i</p>
            <p className="jello">l</p>
            <p className="jello">e</p>
            <p className="jello">.</p>
          </div>

        </article>
        <p id="info-para" data-aos="fade-up" data-aos-delay="600">
          <strong>Mobile Developer (React Native)</strong> specializing in iOS and Android mobile applications. I enjoy creating engaging UI, building scalable cross-platform solutions, and bringing products to life.
          <br /><br />
          As a <strong>Mobile Developer (React Native)</strong>, I value simplicity in content, clarity in design, and thoughtful user interactions, ensuring a seamless user experience across both platforms.
        </p>
        <div className="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
          <a href="mailto:jananijayasuriya330@gmail.com" tabIndex="-1">
            <button className="letsTalkBtn">
              <p className="letsTalkBtn-text">Let's Talk!</p>
              <span className="letsTalkBtn-BG"></span>
            </button>
          </a>
          <div className="setting-container" id="setting-container">
            <input type="checkbox" id="switchforsetting" onClick={settingtoggle} />
            <label htmlFor="switchforsetting" className="needtobeinvert" id="labelforsetting" tabIndex="0"
              aria-label="settings for sound and appearance"></label>
            <div className="visualmodetogglebuttoncontainer" id="visualmodetogglebuttoncontainer">
              <input type="checkbox" id="switchforvisualmode" onClick={visualmode} />
              <label htmlFor="switchforvisualmode" id="labelforvisualmode" tabIndex="0"
                aria-label="switch appearance"></label>
            </div>
            {/* <div className="soundtogglebuttoncontainer" id="soundtogglebuttoncontainer">
              <input type="checkbox" id="switchforsound" onClick={playpause} />
              <label htmlFor="switchforsound" id="labelforsound" tabIndex="0" aria-label="switch sound"
                className="needtobeinvert"></label>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
