import styled from 'styled-components';

export const AssistanceSession = styled.div`
  .container {
    display: flex;
    max-width: 1440px;
    margin: 5px auto;
  }

  .assistance {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin: auto;
  }

  h2 {
    font-size: 30px;
    margin: 20px auto;
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
    margin: 0 20px;
  }

  @media only screen and (max-width: 600px) {
    .assistance {
      display: flex;
      flex-direction: column;
    }

    h2 {
      font-size: 20px;
      text-align: center;
      margin: 10px;
    }

    p {
      margin: 5px 20px;
      font-size: 16px;
      text-align: justify;
    }

    .info {
      margin: 10px auto;
    }
  }
`;
