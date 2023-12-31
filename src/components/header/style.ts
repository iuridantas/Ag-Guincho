import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to bottom, #2a4065, #bb9135);

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    max-width: 1440px;
  }

  img {
    width: 200px;
    height: 130px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 20px;
  }

  .container-link {
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 24px;
    border-radius: 8px;
    width: auto;
    padding: 10px;
    border: none;
    transform: translate(0px, 0px);
    transition: all 0.3s ease-in-out;
  }

  .container-link:hover {
    box-shadow: 0px 3px 3px#000000;
    transform: translate(0px, -2px);
  }

  button {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    div {
      padding: 32px 16px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      width: 100%;
      top: 194px;
      background: linear-gradient(to bottom, #2a4065, #bb9135);
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 194px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      font-size: 23px;
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 32px;
      background: none;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 900px) {
    div {
      padding: 32px 16px;
    }

    ul {
      padding: 0 20px;
      display: block;
      position: absolute;
      width: 100%;
      top: 194px;
      background: linear-gradient(to bottom, #2a4065, #bb9135);
      right: 0;
      height: 0;
      transition: 0.6s;
      z-index: 1000;
      visibility: hidden;
      overflow-y: hidden;
    }

    nav.active ul {
      height: calc(100vh - 194px);
      visibility: visible;
      overflow-y: auto;
    }

    a {
      padding: 16px 0;
      margin: 16px 0;
    }

    button {
      display: flex;
      font-size: 40px;
      background: none;
      color: #ffffff;
      border: none;
      cursor: pointer;
    }
  }
`;
