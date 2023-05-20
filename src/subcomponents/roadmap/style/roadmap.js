import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const AngledBoxContainer = styled.div`
    width: 12%;
    height: 10%;
    margin: 2% 0 0 0;
    transform: rotate(-12deg);    
    -webkit-transform: rotate(-12deg);
    -ms-transform: rotate(-12deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    cursor: pointer;

    p{
        margin: 0;
    }
`;

export const TextDate = styled.p`
    font-size: 24px;
    font-family: "PP Neue Machina";
    font-style: normal;
`;

export const TextTitle = styled.p`
    font-size: 32px;
    font-family: "PP Neue Machina";
    text-decoration: uppercase;
    font-weight: bold;
`;