import styled from 'styled-components';

export const PostCard = styled.article`
  position: relative;
  flex: 1 1 301px;
  flex-direction: column;
  overflow: hidden;
  margin: 0 0 40px;
  padding: 0 20px 40px;
  min-height: 220px;
  border-bottom: 1px solid #e9eef1;
  background-size: cover;
  a {
    text-decoration: none;
  }
`;

export const HeaderPostCard = styled.header`
  margin: 15px 0 0;
  img {
    width: 100%;
    height: 200px;
    background: #c5d2d9 no-repeat 50%;
    border-radius: 3px;
    object-fit: cover;
  }
  h2 {
    margin: 0 0 0.4em;
    line-height: 1.15em;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    color: #15171a;
  }
`;

export const SectionPostCard = styled.section`
  max-width: 56em;
  color: #738a94;
  font-family: Georgia, serif;
  .p {
    margin: 0 0 1.5em;
    margin-bottom: 1em;
  }
`;
