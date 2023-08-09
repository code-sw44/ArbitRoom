import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import img from "../../img/icon/header/Logo.svg";
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  const goToLoginModal = () => {
    setIsModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <div style={{ display: isVisible ? 'none' : 'block' }} className="burger__menu">

        <button className="exit__btn" onClick={() => setIsVisible(!isVisible)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
            <path d="M8 1L1 8M1 8L8 15M1 8H17" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg></button>
        {/* {isVisible && <div>This is the content.</div>} */}

        <div className="burger__container">
          <li className="header__menu-link header__menu-link-red">
            <Link to={"/"} onClick={() => setIsVisible(!isVisible)}>Главная</Link>
          </li>
          <li className="header__menu-link">
            <Link to={"/liquidity"} onClick={() => setIsVisible(!isVisible)} >Пул ликвидности</Link>
          </li>

          <button className="burger__btn" onClick={openModal}>
            Вход/Регистрация
          </button>
        </div>


      </div>

      <header className="header">
        <div className="wrapper">
          <div className="header__all">
            <img className="header__logo" width={197} src={img} />
            <ul className="header__menu">
              <li className="header__menu-link header__menu-link-red">
                <Link to={"/"}>Главная</Link>
              </li>
              <li className="header__menu-link">
                <Link to={"/liquidity"}>Пул ликвидности</Link>
              </li>
              <li className="header__menu-link">
                <Link to={"/FAQ"}>FAQ</Link>
              </li>
            </ul>
            <div className="header__buttom">
              <button className="btn" onClick={openModal}>
                Вход/Регистрация
              </button>

              <div className="burger__open__box" onClick={() => setIsVisible(false)}>
                <span className="open__burger" onClick={() => setIsVisible(false)} ></span>
                <span className="open__burger" onClick={() => setIsVisible(false)} ></span>
                <span className="open__burger" onClick={() => setIsVisible(false)} ></span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="headerFunc">

      </div>
      {isModalOpen && (
        <div className="modal2">
          <div className="modal-content">
            <div className="modal__nav">
              <a className="modal__a" href="#">
                Войти
              </a>
              <a className="modal__a" onClick={openRegisterModal}>
                Зарегистрироваться
              </a>
            </div>

            <div className="modal__box">
              <h4 className="modal__h4">Имя пользователя / Электронная почта</h4>
              <input className="modal__input" type="email" />
              <h4 className="modal__h4">Пароль</h4>
              <input className="modal__input" type="password" />

              <button className="modal__btn">Войти</button>
              <a className="modal__a" href="#">
                Уже есть аккаунт? Войти
              </a>
            </div>

            <button className="exit__btnn" onClick={closeModa - l}>
              {/* <img src={x} alt="" /> */}
              <h3>x</h3>
            </button>
          </div>
        </div>
      )}
      {isRegisterModalOpen && (
        <div className="modal2 modal--register">
          <div className="modal-content modal-content--register">
            <div className="modal__nav">
              <a className="modal__a" href="#" onClick={goToLoginModal}>
                Войти
              </a>
              <a className="modal__a" href="#" onClick={openRegisterModal}>
                Зарегистрироваться
              </a>
            </div>

            <div className="modal__box modal__box--register">
              <button className="modal__btn">
                Зарегистрироваться
              </button>
            </div>

              /*  Здесь Бургер Меню Будет */

            <div className="navbar__toggle" onClick={() => setIsModalOpen(!isModalOpen)}>
              <span className="navbar__burger__span"></span>
              <span className="navbar__burger__span"></span>
              <span className="navbar__burger__span"></span>
              <span className="navbar__burger__span"></span>
            </div>

            <button className="exit__btnn" onClick={closeModal}>
              {/* <img src={x} alt="" /> */}
              <h3>x</h3>
            </button>
          </div>
        </div>
      )}
    </>

  );
}

export default Header;
