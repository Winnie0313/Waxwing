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
    cursor: pointer;
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
  padding: 50px 30px 70px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: left;
  }
`
export const BottomRight = styled.div`
  padding: 50px 30px 70px;  
  display: flex;
  flex-direction: column;
`
export const Video = styled.div`
  height: 50rem;
  width: 200%;
  margin-bottom: 13rem;
  grid-column-start: 1;
  grid-column-end: 2;
`
export const Iframe = styled.iframe`
  width: 70%;
  height: 70%;
`