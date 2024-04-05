import Column from "../Column/Column.jsx";

function Main() {
    const readyCard = {
        taskTheme: 'Research',
        taskName: 'Название задачи',
        taskDate: '30.10.23'
    };
    const testingCard = {
        taskTheme: 'Research',
        taskName: 'Название задачи',
        taskDate: '30.10.23'
    };
    const inTheProcessCard = {
            taskTheme: 'Copywriting',
            taskName: 'Название задачи',
            taskDate: '30.10.23'
    };
    const toDoCard = {
            taskTheme: 'Research',
            taskName: 'Название задачи',
            taskDate: '30.10.23'
    };
    const withoutStatusCard = {
            taskTheme: 'Web Design',
            taskName: 'Название задачи',
            taskDate: '30.10.23'
    };
    return (<main className="main">
        <div className="container">
            <div className="main__block">
                <div className="main__content">
                    <Column columnTitle={'Без статуса'} card={withoutStatusCard} />
                    <Column columnTitle={'Нужно сделать'} card={toDoCard} />
                    <Column columnTitle={'В работе'} card={inTheProcessCard} />
                    <Column columnTitle={'Тестирование'} card={testingCard} />
                    <Column columnTitle={'Готово'} card={readyCard}/>
                </div>

            </div>
        </div>
    </main>);
}

export default Main;