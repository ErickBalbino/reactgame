import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #4380b1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 0;

  .container__image {
    width: 160px;
    margin: 0 auto;
    object-fit: cover;
    object-position: center;
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
`;

export const Categorias = styled.div`
    
`
