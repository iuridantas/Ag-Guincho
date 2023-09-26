import styled from 'styled-components';

export const AboutUsSession = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  max-width: 1440px;

  h2 {
    font-size: 30px;
    margin: 0 auto 20px auto;
    text-align: center;
  }

  p {
    margin: 10px auto;
    text-align: justify;
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    h2 {
      font-size: 20px;
      margin: 10px;
    }

    p {
      margin: 5px 20px;
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    h2 {
      margin: 10px;
    }

    p {
      margin: 5px 20px;
    }
  }
`;
