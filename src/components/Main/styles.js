import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;

  > div:first-child {
    flex: 0 0 48px;
    background: #fff;
  }

  > main {
    flex: 1;
  }
`;
