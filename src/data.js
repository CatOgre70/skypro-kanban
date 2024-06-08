export const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

export const AppRoutes = {
    HOME: "/",
    LOGIN: "/login",
    LOGOUT: "/exit",
    REGISTER: "/register",
    ADD_NEW_CARD: "/addnewcard",
    EDIT_CARD: "/editcard/:taskId",
    NOT_FOUND: "*",
}

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

export const themeList = [
    {theme: "Web Design", themeStyle: "_orange", active: false},
    {theme: "Research", themeStyle: "_green", active: false},
    {theme: "Copywriting", themeStyle: "_purple", active: false},
];

export function getThemeStyle(theme) {
    for(let themeName of themeList) {
        if (themeName.theme === theme) {
            return themeName.themeStyle;
        }
    }
    return "_gray";
}