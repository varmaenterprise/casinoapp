import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WhatsAppButton from './subfooter';
import fiveImage from '../images/payment.png';
import './footer.css';

function Footer() {
  return (
    <Container>
      {/* First Row with 3 Columns */}
      <Row>
        <Col>Responsible Gaming</Col>
        <Col>visit www.betzhub.co for tools and resources to help you stay in control of the way you play</Col>
        <Col><div class="col">
            <button>Learn More</button>
        </div></Col>
      </Row>

      {/* Second Row with 3 Columns */}
      <Row>
        <Col>betzhub.co is Asia's one of the biggest gaming platform with over 350 games and sports availale
        popular games such as Cricket,Tennis,Football,Basketball,volley ball and many more including Indian card games like Teen patti and Aandar Bahar are also available from various worldwide gaming providers
        with unlimited markets and adds,betzhub.co gives players the best gaming experience in the market</Col>
        <Col>100% safe & Instant payments</Col>
        <Col>
        
          {/* Third Row with 2 Columns */}
          <Row>
            <Col>Accepted Modes of Payments
            <img src="payment.png" alt="Payment Method 1" />
            <img src="image1.jpg" alt="Payment Method 1" />
            </Col>
            <Col>Contact Us
            WhatsApp :919940941959
            calling :919940941959
           </Col>
           
          </Row>
        </Col>
      </Row>

      {/* Last Row with 2 Columns */}
      <Row>
      <Col>      <WhatsAppButton phoneNumber="919940941959" />
      @Copyright 2010 - 2023 Betzhub
</Col>
        <Col>you can make payments and receive earnings instantly via your UPI ID - so you can be sure that your money is safe and secure.
        All UPI platforms are accepted</Col>
        <Col>About us KYC Policy Terms & Condition Responsible Gaming</Col>
      </Row>
    </Container>
  );
}

export default Footer;