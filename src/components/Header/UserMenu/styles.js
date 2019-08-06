import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  > button {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    padding: 2px;

    &:hover {
      background: #fff;
      color: ${props => props.theme.main};
    }
  }

  ul {
    right: 0;
    top: 100%;
    position: absolute;
    min-width: 60px;
    padding: 5px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.05);
    color: #333;

    li {
      list-style: none;
      font-size: 12px;
      padding: 3px;
    }
  }
`;
