import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
  width: 100vw;

  > img {
    max-height: 90vh;
  }

  > div {
    > a {
      > img {
        margin: 0 15px;
      }
    }
  }

  @media (max-width: 900px) {
    > img {
      min-height: 80vh;
      max-width: 100vw;
    }

    > div {
      > a {
        > img {
          max-width: 20vw;
          margin: 0 9px;
        }
      }
    }
  }
`;
