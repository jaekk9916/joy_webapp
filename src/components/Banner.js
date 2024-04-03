import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "AI engineers", "Web Developer", "Collaborative" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jaekyeong(Joy)`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p><b>A student who is studying Software Engineering Technology - AI</b><br></br>
                    School:  Centennial College<br></br>
                    Expected Graduation: December 2025<br></br><br></br>
                    <b>[Experience - Co-op/worker]</b><br></br>
                    Role: Co-op developer<br></br>
                    Company: Children, Youth & Social Services, Government Administration, Toronto<br></br>
                    Period: Jan, 2024 - April, 2024<br></br><br></br>
                    3 years+ of experience as a back-end developer in the big data, security field in South Korea<br></br><br></br>
                    <b>[Interests]</b><br></br>
                    AI engineer, Software Web Development<br></br><br></br>
                    <b>[Skills]</b><br></br>
                    Web: HTML, CSS, JavaScript, C#, Java, Python,MySQL/SQL, MariaDB,<br></br>
                    Operating Systems(OS): Linux/Unix (CentOS), Window<br></br>
                    Languages: Java, Python </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
