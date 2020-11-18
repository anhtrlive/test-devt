import styled from 'styled-components';

export const CommentsContent = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 1vw 170px 6vw;
  font-family: Georgia, serif;
  font-size: 1rem;
  line-height: 1.6em;
  background: #fff;
  font-family: 'Roboto', Tahoma;
  p {
    border: 1px solid #4a464640;
    border-radius: 2px;
    padding: 10px;
  }
`;

export const CommentsTextAreaWrapper = styled.div`
  position: relative;
  border: 2px solid rgb(159 159 159);
  padding-bottom: 40px;
  textarea {
    width: 100%;
    padding: 0.5em;
    color: #000;
    background: #fff;
    font-family: Georgia, serif;
    font-size: 1rem;
    line-height: 1.6em;
    border: none;
    border-radius: 3px;
    flex-wrap: nowrap;
    border: 0px;
    outline: 0;
    resize: none;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0.5em;
  padding: 0.25em 1em;
  font-size: 1em;
  border: 2px solid #000;
  border-radius: 3px;
  background: #090a0b;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
