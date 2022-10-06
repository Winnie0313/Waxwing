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
  @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Lobster&family=Source+Sans+Pro:ital,wght@0,600;1,300&display=swap');

  display: grid;
  align-items: center;
  flex: 50%;
  padding-left: 30px;
  padding-right: 30px;
  
  h1 {
    padding: 20px;
    font-size: 100px;
    font-family: 'Lobster', cursive;
  }

  p {
    font-size: 20px;
    padding-bottom: 30px;
  }

  .fa-icon-heart {
    padding-right: 20px;
  }

  .fa-icon-heart:hover {
    color: red;
  }

  .fa-icon-share:hover {
    color: grey;
    cursor: pointer;
  }
`
export const TopRight = styled.div`

  flex: 50%;
  img {
    width: 100%;
  };
`
export const BottomLeft = styled.div`
  padding: 50px 30px 100px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;

  li {
    text-align: left;
  }
`
export const BottomRight = styled.div`
  padding: 50px 30px 100px;  
  display: flex;
  flex-direction: column;
`