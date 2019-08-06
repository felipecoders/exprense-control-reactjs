import styled from "styled-components";

export const Container = styled.div`
  flex: 0 0 320px;
  display: flex;
  flex-direction: column;

  > h1 {
    margin-bottom: 10px;
    font-weight: 300;
    color: ${props => props.theme.main};
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      color: ${props => props.theme.main};
      border: 1px solid ${props => props.theme.main};
      border-radius: 100%;
      margin-left: 5px;

      > * {
        font-size: 16px;
      }
    }
  }

  .cards-content {
    display: flex;
    flex-direction: column;
  }
`;
