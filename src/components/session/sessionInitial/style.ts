import styled from 'styled-components';

export const InitialSession = styled.div`
  img {
    width: 100%;
    height: 700px;
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
    text-align: center;
    z-index: 2;
  }

  .text-center {
    text-align: center;
  }

  .front-heading {
    color: #ffffff;
    font-size: 3rem;
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
    font-size: 2rem;
    margin: 5px auto;
  }

  @media only screen and (max-width: 600px) {
    img {
      height: 250px;
    }

    .text-container {
      top: 50px;
    }

    .front-heading {
      font-size: 2rem;
    }

    .sub-heading {
      font-size: 1.2rem;
    }
  }
`;
