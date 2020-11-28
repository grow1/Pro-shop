import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center py-3">
          <Col>Copyright &copy; Pro-shop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
