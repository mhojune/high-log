import styled from "styled-components";

export const DefaultButtonContainer = styled.button<{type : string, width : number}>`
    display: flex;
    width: ${({width}) => (width ? `${width}px` : '174px')};
    padding: 8px 0px;
    justify-content: center;
    align-items: center;
    border : none;
    border-radius : 8px;
    background-color : ${({theme,type}) => 
        type === "primary" ? theme.colors.primary["00"] : 
        type === "secondary" ? theme.colors.secondary["08"] : 
        theme.colors.grayScale["08"]
    };
    cursor : pointer;
`

export const ButtonText = styled.p<{ type : string}>`
    color : ${({theme,type}) => 
        type === "primary" ? theme.colors.grayScale["11"] : 
        type === "secondary" ? theme.colors.secondary["05"] : 
        theme.colors.grayScale["04"]
    };
    ${({theme}) => theme.typography.body.M2};
`

export const UnderBarButtonText = styled.p`
    color : ${({theme}) => theme.colors.secondary["01"]};
    ${({theme}) => theme.typography.body.L2};
    text-decoration-line : underline;
    text-decoration-style : solid;
    text-decoration-skip-ink: none;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
    cursor : pointer;
`
