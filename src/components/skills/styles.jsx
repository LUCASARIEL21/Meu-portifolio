import styled from "styled-components"

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  padding: 10px;
  font-size: 14px;
  font-weight: 300;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 75px;
  font-weight: bold;
  cursor: none;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: lightgray;
  -webkit-text-stroke: 2px black;
  position: relative;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
