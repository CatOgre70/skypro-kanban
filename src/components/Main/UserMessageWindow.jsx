import {DataIsLoading} from "./Main.styled.js";

function ShowMessageWindow({isError, errorMessage}) {
    return (
        isError ?
            (<DataIsLoading>Произошла ошибка: {errorMessage}. Попробуйте, пожалуйста, позже!</DataIsLoading>)
            :
            (<DataIsLoading>Данные загружаются...</DataIsLoading>)
    );
}

export default ShowMessageWindow;