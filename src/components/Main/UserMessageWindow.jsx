import { DataError, DataIsLoading } from "./Main.styled.js";

function ShowMessageWindow({ isError, errorMessage }) {
  return isError ? (
    <DataError>
      Произошла ошибка: {errorMessage}. Попробуйте, пожалуйста, позже!
    </DataError>
  ) : (
    <DataIsLoading>Данные загружаются...</DataIsLoading>
  );
}

export default ShowMessageWindow;
