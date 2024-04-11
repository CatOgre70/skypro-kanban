import styled from "styled-components";

export const themeStyles = {
    _purple: {
        backgroundColor: "#e9d4ff",
        color: "#9a48f1",
    },
    _orange: {
        backgroundColor: "#ffe4c2",
        color: "#ff6d00",
    },
    _green: {
        backgroundColor: "#b4fdd1",
        color: "#06b16e",
    },
    _gray: {
        backgroundColor: "#94a6be",
        color: "#ffffff",
    },
}

export const ThemeText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

export const CardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    background-color: ${({ $themeColor }) => themeStyles[$themeColor]?.backgroundColor || "#b4fdd1"};

    ${ThemeText} {
        color: ${({ $themeColor }) => themeStyles[$themeColor]?.color || "#06b16e"};
    }
`;

export const themeList = [
    {theme: "Web Design", themeStyle: "_orange"},
    {theme: "Copywriting", themeStyle: "_purple"},
    {theme: "Research", themeStyle: "_green"},
];

export function getThemeStyle(theme) {
    for(let themeName of themeList) {
        if (themeName.theme === theme) {
            return themeName.themeStyle;
        }
    }
    return "_gray";
}