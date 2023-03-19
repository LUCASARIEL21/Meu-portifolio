import styled from "styled-components"

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 74px;
  text-align: center;
`;

export const txtapres = styled.h3`
  font-size: 24px;
  color: lightgray;
  padding: 20px;
  text-align: center;
`;

export const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  padding: 20px;
  text-align: center;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 800px;
  height: 500px;
  object-fit: contain;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
