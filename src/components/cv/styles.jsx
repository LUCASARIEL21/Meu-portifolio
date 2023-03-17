import styled from "styled-components"

export const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #80d0c7;
    background-image: linear-gradient(180deg, #80d0c7 0%, #6284FF 50%, #FF0000 100%);

`;

export const Title = styled.h1`
    font-size: 28px;
`;

export const Summary = styled.p`
    font-size: 20px;
    margin: 20px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const LInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const RInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Right = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;