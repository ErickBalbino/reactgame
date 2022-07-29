import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 32vw;
  height: 300px;
  border: 2px solid #f5f5f5;
  border-radius: 10px;
  margin: 0 50px;
  overflow: hidden;
  cursor: pointer;

  div {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      -o-object-fit: cover;
      -o-object-position: center;
      filter: brightness(70%);
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: #f5f5f5;
        color: #4380b1;
        font-size: 1.4rem;
        font-weight: 500;
        padding: 6px 10px;
        transition: 0.3s all;
    }
  }

  @media (max-width: 560px) {
    width: 90vw;
    margin-bottom: 40px;
  }

  @media (min-width: 561px) and (max-width: 760px) {
    width: 60vw;
  }

  &:hover {
    div {
        h2 {
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #f5f5f5ca;
            font-size: 1.6rem;
        }
    }
  }
`;
