import styled, { css } from "styled-components";

export const ButtonContainer = styled.button `
    background: #565656;
    border-radius: 22px;
    color: #fff;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: 0;

    ${({variant}) => variant !== "primary" && css `
        min-width: 167px;
        height: 33px;
        background: #E4105D;
        cursor: pointer;

        &:hover{ 
            opacity: 0.6;
        }

        &::after{ 
            content: '';
            position: absolute;
            border: 1px solid #e4105D;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            heigth: calc(100% + 10px);
            border-radius: 22px;
        }
    `
}
`