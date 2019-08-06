import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${props => props.theme.main};
  color: #fff;

  main {
    width: 400px;
    text-align: center;

    h1 {
      font-size: 120px;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: #fff;
      padding-left: 5px;
    }
  }
`;
