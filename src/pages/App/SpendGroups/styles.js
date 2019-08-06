import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const Card = styled.div`
  width: 100%;
  padding: 5px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05);

  .card-title {
    color: #666;
    padding: 0 5px;
  }
`;
