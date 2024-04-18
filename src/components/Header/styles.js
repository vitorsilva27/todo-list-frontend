import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #171717;
  border-bottom: 5px solid #e6cf09;

  display: flex;
`;
export const LeftSide = styled.div`
  width: 50%;
  height: 70px;

  display: flex;
  align-items: center;
  padding-left: 12px;
`;
export const RightSide = styled.div`
  width: 50%;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;

  a {
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    margin: 0 12px;

    &:hover {
      color: #e6cf09;
    }
  }

  #notification {
    span {
      background: #fff;
      color: #e6cf09;
      padding: 6px 10px;
      border-radius: 50%;

      position: relative;
      top: -20px;
      right: 16px;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  .dividir::after {
    content: "|";
    margin: o 10px;
    color: #fff;
  }
`;
