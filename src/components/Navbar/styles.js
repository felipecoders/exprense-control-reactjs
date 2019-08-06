import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  width: 48px;
  background: #fff;
  color: ${props => props.theme.main};
  display: flex;
  flex-direction: column;

  hr {
    width: 100%;
    margin-bottom: 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
  }

  .nav-item {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:first-of-type {
      height: 60px;
    }

    > * {
      font-size: 22px;
      color: #aaa;
    }

    &.active {
      > * {
        color: ${props => props.theme.main};
      }
    }

    &:hover {
      background: ${props => props.theme.main};
      > * {
        color: #fff;
      }
    }
  }
`;
