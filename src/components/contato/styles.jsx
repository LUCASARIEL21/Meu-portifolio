import styled from "styled-components"

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Left = styled.div`
  display: flex;
  height: 250px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Title = styled.h3`
    font-size: 74px;
    text-align: center;
`;

export const Desc = styled.p`
    font-size: 24px;
    color: lightgray;
    padding: 20px;
    text-align: center;
`;

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
`;
