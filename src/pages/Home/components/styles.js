import styled from "styled-components";

export const TaskFilterWrapper = styled.div`
    //border: 1px solid red;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px 20px;
    
`;

export const FilterStatusTaskWrapper = styled.div`
    font-size: 1.1.em;
    color: ${props => props.active ? '#0066FF' : '#777'};
    font-weight: ${props => props.active ? 'bold' : '300'};
    cursor: pointer;
    &:hover{
        color: #0066FF;
    }
`;

