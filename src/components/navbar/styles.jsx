import styled from "styled-components"

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const Logo = styled.img`
  margin: 10px;
  height: 50px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListItem = styled.a`
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;