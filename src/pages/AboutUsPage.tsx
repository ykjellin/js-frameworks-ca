import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const AboutUs: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Crabstore</Title>
      <Content>
        Welcome to <Highlight>Crabstore</Highlight>, your destination for
        elegant online auctions and curated shopping experiences. At Crabstore,
        we believe shopping should be both rewarding and fun. Our mission is to
        bring you the best deals while showcasing unique items that cater to
        every taste.
      </Content>
      <Content>
        Founded by enthusiasts passionate about blending technology and
        commerce, Crabstore offers a seamless, user-friendly platform where
        buyers can explore a variety of high-quality products. From discounted
        items to limited-edition collectibles, we’ve got something for everyone.
      </Content>
      <Content>
        At Crabstore, customer satisfaction is at the heart of everything we do.
        We pride ourselves on our intuitive interface, secure transactions, and
        exceptional customer support. Whether you’re bidding on your next prized
        possession or searching for the perfect gift, we’re here to ensure your
        experience is nothing short of excellent.
      </Content>
      <Content>
        Thank you for choosing Crabstore, where every click brings you closer to
        discovering something extraordinary.
      </Content>
    </AboutContainer>
  );
};

export default AboutUs;
