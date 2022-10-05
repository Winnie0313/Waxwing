import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  width: 100vw;
  height: 100vh;
`

// const Top = styled.div`
//   display: flex;
// `
export const TopLeft = styled.div`
  display: grid;
  align-items: center;
  flex: 50%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  
  h1 {
    font-size: 50px;
  }
`
export const TopRight = styled.div`

  flex: 50%;
  img {
    width: 100%;
  };
`
export const BottomLeft = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    text-align: left;
  }
`
export const BottomRight = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
`