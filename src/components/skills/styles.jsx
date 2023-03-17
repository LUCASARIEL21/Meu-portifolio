import styled from "styled-components"

export const Section = styled.div`
  height: 100vh;
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

;
`;

export const Title = styled.h2`
  display: flex;
  font-size: 75px;
  font-weight: bold;
  color: white;
  margin-bottom: 100px;
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
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: rebeccapurple;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

export const Right = styled.div`
  flex: 1;
`;
