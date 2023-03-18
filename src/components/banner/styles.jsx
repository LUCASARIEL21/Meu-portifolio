import styled from "styled-components"

export const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
  height: 100vh;
`;

export const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
  gap: 20px;
  align-items: center;
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
  flex: 3;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  width: 800px;
  height: 500px;
  object-fit: contain;
  position: absolute;
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
