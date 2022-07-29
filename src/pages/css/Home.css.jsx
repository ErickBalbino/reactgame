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
  flex-direction: column;

  .container__image {
    object-fit: cover;
    object-position: center;
    margin-bottom: 50px;  
    animation: animate 2s ease-in-out infinite; 
    border: 2px solid transparent;   

    .logo {
      width: 150px;
    }

    @keyframes animate {
      0% {
        border-bottom: 2px solid #f5f5f5;
      }

      25% {
        border-right: 2px solid #f5f5f5;
      }

      50% {
        border-top: 2px solid #f5f5f5;
      }
      
      75% {
        border-left: 2px solid #f5f5f5;
      }
    }
  }

  @media (max-width: 560px) {
    height: auto;
    overflow-y: auto;
    padding: 50px 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
