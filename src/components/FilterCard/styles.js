import styled from "styled-components";

export const Container = styled.div`
  width: 260px;
  height: 80px;
  padding: 0 10px;
  background: ${(props) => (props.actived ? "#e6cf09" : "#171717")};

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    font-size: 18px;
  }

  &:hover {
    background: #e6cf09;
  }
`;
