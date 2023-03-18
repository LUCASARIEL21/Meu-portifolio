import styled from "styled-components"

export const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  background-color: #1c1a1c;
  background-image: linear-gradient(300deg, #1c1a1c 0%, #f4771b 100%);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
`;

export const Left = styled.div`
  display: flex;
  height: 250px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  justify-content: center;
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
