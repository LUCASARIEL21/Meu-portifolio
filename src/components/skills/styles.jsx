import styled from "styled-components"

export const Section = styled.div`
  padding: 20px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  background-color: #4158d0;
  background-image: linear-gradient(160deg, #4158d0 0%, #c850c0 33%, #00dbde 66%);
`;

export const Title = styled.h2`
  display: flex;
  font-size: 75px;
  font-weight: bold;
  cursor: none;
  color: transparent;
  -webkit-text-stroke: 3px black;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  margin: 10px;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 2px black;
  position: relative;
`;

export const Right = styled.div`
  flex: 1;
`;
