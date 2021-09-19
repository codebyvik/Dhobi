import styled from "styled-components";

export const StyledSideBar = styled.div`
  background-color: #232343;
  position: fixed;
  width: 15rem;
  color: white;
  height: calc(100vh - 62px);
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  a {
    display: flex;
    text-decoration: none;
    color: white;
  }
  h6 {
    color: white;
    margin: 0 0.4rem 0 2rem;
  }
`;
