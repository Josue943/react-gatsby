import styled from "@emotion/styled"

export const Content = styled.div`
  min-height: 80.9vh;
  h2 {
    text-align: center;
    font-size: 3.2rem;
    margin-top: 3rem;
    text-transform: capitalize;
  }

  div {
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: auto;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 100px;
    }
    p {
      line-height: 2;
    }
  }
`
