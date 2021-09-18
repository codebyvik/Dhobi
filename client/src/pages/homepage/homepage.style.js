import styled from "styled-components";

export const Welcome = styled.div`
  height: 20rem;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    opacity: 0.3;
  }
  h1 {
    font-size: 72px;
    font-weight: bold;
  }
`;
