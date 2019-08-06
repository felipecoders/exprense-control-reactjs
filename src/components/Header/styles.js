import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 61px;
  background: ${props => props.theme.main};
  padding: 0 15px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #cdcdcd;

  h2 {
    font-size: 18px;
  }
`;
