import {Link} from "react-router-dom";
import {AppRoutes} from "../../../data.js";
import CalendarNew from "../../Calendar/CalendarNew.jsx";
import {useState} from "react";
import {
    PopBrowseBlock,
    PopBrowseContainer,
    PopBrowseContent,
    PopBrowseStyled, PopBrowseTitle,
    PopBrowseTopBlock
} from "./PopBrowse.styled.js";

function PopBrowse({card}) {
    const [selectedDay, setSelectedDay] = useState(new Date());
    return (
            <PopBrowseStyled>
                <PopBrowseContainer>
                    <PopBrowseBlock>
                        <PopBrowseContent>
                            <PopBrowseTopBlock>
                                <PopBrowseTitle>Название задачи</PopBrowseTitle>
                                <div className="categories__theme theme-top _orange _active-category">
                                    <p className="_orange">Web Design</p>
                                </div>
                            </PopBrowseTopBlock>
                          <div className="pop-browse__status status">
                              <p className="status__p subttl">Статус</p>
                              <div className="status__themes">
                                  <div className="status__theme _hide">
                                      <p>Без статуса</p>
                                  </div>
                                  <div className="status__theme _gray">
                                      <p className="_gray">Нужно сделать</p>
                                  </div>
                                  <div className="status__theme _hide">
                                      <p>В работе</p>
                                  </div>
                                  <div className="status__theme _hide">
                                      <p>Тестирование</p>
                                  </div>
                                  <div className="status__theme _hide">
                                      <p>Готово</p>
                                  </div>
                              </div>
                          </div>
                          <div className="pop-browse__wrap">
                              <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                  <div className="form-browse__block">
                                      <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                      <textarea className="form-browse__area" name="text" id="textArea01" readOnly
                                                placeholder="Введите описание задачи..."></textarea>
                                  </div>
                              </form>
                              <CalendarNew setSelectedDay={setSelectedDay}/>
                          </div>
                          <div className="theme-down__categories theme-down">
                              <p className="categories__p subttl">Категория</p>
                              <div className="categories__theme _orange _active-category">
                                  <p className="_orange">Web Design</p>
                              </div>
                          </div>
                          <div className="pop-browse__btn-browse ">
                              <div className="btn-group">
                                  <button className="btn-browse__edit _btn-bor _hover03"><a href="#">Редактировать
                                      задачу</a></button>
                                  <button className="btn-browse__delete _btn-bor _hover03"><a href="#">Удалить
                                      задачу</a></button>
                              </div>
                              <button className="btn-browse__close _btn-bg _hover01"><Link to={AppRoutes.HOME}>Закрыть</Link>
                              </button>
                          </div>
                          <div className="pop-browse__btn-edit _hide">
                              <div className="btn-group">
                                  <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a>
                                  </button>
                                  <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a>
                                  </button>
                                  <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить
                                      задачу</a></button>
                              </div>
                              <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
                          </div>

                        </PopBrowseContent>
                    </PopBrowseBlock>
                </PopBrowseContainer>
            </PopBrowseStyled>);
}

export default PopBrowse;