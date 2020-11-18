import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  background-color: white;
  padding: 20px;
  margin: auto;
  margin-top: 70px;
  max-width: 1080px;
  flex-wrap: wrap;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background: #090a0b;
  background: #090a0b;
  ul {
    margin: 0 auto;
    padding: 0;
    max-width: 1040px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      position: relative;
      display: block;
      padding: 12px;
      color: #fff;
    }
  }
  a {
    position: relative;
    display: block;
    padding: 12px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
