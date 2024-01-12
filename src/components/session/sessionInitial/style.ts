import styled from 'styled-components';

export const InitialSession = styled.div`
  img {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .carousel-container {
    display: flex;
    overflow: hidden;
    position: relative;
  }

  .carousel-content {
    display: flex;
    transition: transform 1s ease-in-out;
  }

  .text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    z-index: 2;
  }

  .text-center {
    text-align: center;
  }

  .front-heading {
    color: #ffffff;
    font-size: 36px;
    margin: 5px auto;
  }

  .icon {
    font-size: 200px;
    border-radius: 100px;
    background-color: #0000f5;
    padding: 16px;
  }

  .sub-heading {
    color: #ffffff;
    font-size: 30px;
    margin: 5px auto;
    text-decoration: none;
  }

  a {
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    .icon {
      font-size: 100px;
      border-radius: 50px;
      padding: 8px;
    }

    .front-heading {
      font-size: 30px;
    }

    .sub-heading {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    .icon {
      font-size: 100px;
      border-radius: 50px;
      padding: 8px;
    }

    .front-heading {
      font-size: 30px;
    }

    .sub-heading {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 901px) and (max-width: 1024px) {
    .icon {
      font-size: 150px;
      border-radius: 75px;
      padding: 8px;
    }
  }
`;
