import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const FilterArea = styled.div`
  width: 100%;
  margin-top: 30px;

  display: flex;
  justify-content: space-around;

  button {
    background: none;
    border: none;
  }
`;

export const Title = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1::after,
  h1::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin: 0 20px;
    background-color: #777;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
