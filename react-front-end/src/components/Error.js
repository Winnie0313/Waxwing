import React from "react";
import styled from "styled-components";

function Error(props) {
  return (
    <Box>
      <div>
        <h2>{props.message} </h2>
      </div>
    </Box>
  );
}

export default Error;

/// styling of the error message
const Box = styled.div`
  background-color: #fce4e4;
  border: 1px solid #fcc2c3;
  float: left;
  padding: 20px 30px;
  & h2 {
    color: #cc0033;
  }
`;
