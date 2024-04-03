import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from '../assets/img/github-mark-white.svg';
import navIcon3 from '../assets/img/github_blog.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/*<img src={logo} alt="Logo" />*/}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jaekyeong-jang/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/jaekk9916"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://jaekk9916.github.io/"><img src={navIcon3} alt="GitHub Blog" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
