import styled from 'styled-components';

export const SectionPost = styled.section`
  width: 100%;
  h1,
  textarea {
    position: relative;
    margin: 0 auto;
    padding: 60px 50px 50px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    margin: 0 0 0.2em;
    color: #090a0b;
    font-size: 3.5rem;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  textarea {
    width: 100%;
    padding: 20px;
    resize: none;
    margin-bottom: -50px;
  }
`;

export const SectionText = styled.section`
  position: relative;
  margin: 0 auto;
  padding: 0 100px 1vw;
  min-height: 230px;
  font-family: Georgia, serif;
  font-size: 2rem;
  line-height: 1.6em;
  background: #fff;
  p,
  textarea {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;
    margin: 0 0 1.5em;
    color: #313b3f;
    font-size: 0.8em;
    font-weight: normal;
    line-height: 1.6em;
    font-family: Georgia, serif;
    min-width: 100%;
    margin: 0 0 1.5em;
    color: #313b3f;
    font-size: 0.8em;
  }
  textarea {
    padding-bottom: 60px;
  }
`;

export const ChangePostBtn = styled.button`
  position: absolute;
  right: 210px;
  bottom: 60px;
  margin: 0.5em;
  padding: 0.25em 1em;
  font-size: 0.5em;
  border: 2px solid #000;
  border-radius: 3px;
  background: #090a0b;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export const CancelChangePostBtn = styled.button`
  position: absolute;
  right: 110px;
  bottom: 60px;
  margin: 0.5em;
  padding: 0.25em 1em;
  font-size: 0.5em;
  border: 2px solid #000;
  border-radius: 3px;
  background: #090a0b;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;

export const EditPostBtn = styled.button`
  position: absolute;
  right: 170px;
  bottom: 0px;
  margin: 0.5em;
  padding: 0.25em 1em;
  font-size: 0.5em;
  border: 2px solid #000;
  border-radius: 3px;
  background: #090a0b;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
