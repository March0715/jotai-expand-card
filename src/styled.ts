import styled from "styled-components";

export const CardsWrapper = styled('div')`
  width: 100%;
  height: 450px;
`;

export const CardWrapper = styled('div')<{expanded: boolean}>`
  width:${({expanded}) => {
    return expanded ? "600px" : "100px";
  }};
  height: 400px;
  border-radius: 20px;
  margin: 10px;
  overflow: hidden;
  float: left;
  transition: .5s;
`;

export const StyledImg = styled('img')<{expanded: boolean}>`
  width: 600px;
  height: 400px;
  transform:${({expanded}) => {
    return expanded ? "translate(0)" : "translate(-50%)";
  }};
  transition: .5s;
`;