import styled from 'styled-components';

export const AssistanceSession = styled.div`
  display: flex;
  flex-direction: column;

  .container {
    display: flex;
    max-width: 1440px;
    margin: 20px auto;
  }

  .assistance {
    display: flex;
    justify-content: space-around;
  }

  h2 {
    font-size: 30px;
    margin: 20px auto;
  }

  h3 {
    font-size: 30px;
    margin: 10px 0;
    text-align: center;
  }

  p {
    font-size: 20px;
    margin: 10px 0;
    text-align: justify;
  }

  .icon {
    font-size: 150px;
  }

  .info {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 40px;
  }

  @media only screen and (max-width: 600px) {
    .assistance {
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-size: 20px;
      margin: 5px;
      text-align: center;
    }

    h3 {
      font-size: 20px;
      margin: 5px 20px;
    }

    p {
      margin: 5px 20px;
      font-size: 16px;
      text-align: justify;
    }

    .info {
      flex: none;
      max-width: none;
      margin: 10px auto;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .info {
      margin: 10px auto;
    }
  }
`;
