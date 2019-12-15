import styled from 'styled-components';

export const Button = styled.button`
    background-color: #facf04;
    text-transform: uppercase;
    padding: 6px 30px;
    font-size: 1rem;
    color: #0a1720;
    font-weight: bold;
    border-color: #facf04;
    line-height: 2rem;
    border-radius: 5px;
    @media only screen and (max-width: 480px) {
        padding: 3px 15px;
        font-size: 1rem;
        line-height: 1rem;
    }
`