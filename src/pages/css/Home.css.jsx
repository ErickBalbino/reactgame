import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  overflow: hidden;
  background-color: #4380b1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`