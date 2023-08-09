import React from 'react';
import { Link } from "react-router-dom";
import '../MainSection/MainSection.css'
import image from "../../../img/icon/home/Vector.svg";
import image1 from "../../../img/icon/home/Vector1.svg";
import image2 from "../../../img/icon/home/Vector2.svg";
import image3 from "../../../img/icon/home/Vector3.svg";
import icon from "../../../img/icon/home/Vector4.svg"
import icon1 from "../../../img/icon/home/Vector5.svg"
import icon2 from "../../../img/icon/home/Vector6.svg"
import png from '../../../img/image/friendly.png'
import gblogo from "../../../img/icon/home/bgBombers.svg";

const MainSection = () => {
  return (
    <>

      <section className="cryptocurrencies">
        <div className="wrapper">
          <div className="cryptocurrencies__content">
            <h2 className="cryptocurrencies__content-title">
              Прибыльный Арбитраж Криптовалют
            </h2>
            <p className="cryptocurrencies__content-text">
              Arbitroom — платформа, которая использует для работы автоматизированных
              <br /> ботов для получения максимальной прибыли с арбитражной торговли
            </p>
            <button className="cryptocurrencies__content-btn">Начать сейчас</button>
          </div>
          <div className="wrap">
            <div className="row">
              <div className="cryptocurrencies__col-3">
                <div className="cryptocurrencies__boximage">
                  <img className="cryptocurrencies__image" src={image} alt="Image1" />
                </div>
                <p className="cryptocurrencies__text">
                  Межбиржевой и внутрибиржевой арбитраж
                </p>
              </div>
              <div className="cryptocurrencies__col-3">
                <div className="cryptocurrencies__boximage">
                  <img className="cryptocurrencies__image" src={image1} alt="Image2" />
                </div>
                <p className="cryptocurrencies__text">
                  Гарантированная прибыль в том числе и на падающем рынке
                </p>
              </div>
              <div className="cryptocurrencies__col-3">
                <div className="cryptocurrencies__boximage">
                  <img className="cryptocurrencies__image" src={image2} alt="Image3" />
                </div>
                <p className="cryptocurrencies__text">
                  Возврат инвестиции по окончанию контракта
                </p>
              </div>
              <div className="cryptocurrencies__col-3">
                <div className="cryptocurrencies__boximage">
                  <img className="cryptocurrencies__image" src={image3} alt="Image4" />
                </div>
                <p className="cryptocurrencies__text">
                  Круглосуточная поддержка в чате
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='advanteges'>
        <div className="wrapper">
          <div className="advanteges__logo">
            <h2 className="advanteges__logo-title">Основные<br /> преимущества</h2>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="advanteges__content">
                <p className="advanteges__content-text">Моментальное открытие и закрытие сделок при помощи
                  ArbitroomBot</p>
                <div className="advanteges__content-block">
                  <img className='value' src={icon} alt="" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="advanteges__content">
                <p className="advanteges__content-text">Отсутствие рисков связанных с просадкой вашего портфеля или всего крипторынка в целом</p>
                <div className="advanteges__content-block">
                  <img className='value' src={icon1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="advanteges__content">
                <p className="advanteges__content-text">Диверсификация инвестиций в разные торговые инструменты</p>
                <div className="advanteges__content-block">
                  <img className='value' src={icon2} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="advanteges__wrap">
            <p className="advanteges__wrap-text">Используйте свой шанс прямо сейчас</p>
            <button className="advanteges__wrap-btn">Начать сейчас</button>
          </div>
        </div>
      </section>

      <div className='Friendly'>
        <div className='wrapper'>
          <div className='Friendly__body'>
            <h1 className='Friendly__title'>Мы делаем сложное простым</h1>
            <p className='Friendly__text'>Платформа Arbitroom - это автоматизированная площадка как для внутрибиржевой, так и межбиржевой торговли</p>
            <div className='Friendly__box'>
              <div className='Friendly__img'></div>
            </div>
            <p className='Friendly__bottomText'>Используя наши инструменты появилась возможность зарабатывать на арбитраже криптовалют с минимальными рисками и экономией личного времени</p>
          </div>
        </div>
      </div>

      <section className="howit">
        <div className="wrapper">
          <div className="howit__body">
            <div className="howit__logo">
              <h2 className="howit__logo-title">Как это работает</h2>
            </div>
            <div className="row howit__row">
              <div className="col-4">
                <div className="howit__content">
                  <div className="number">
                    <p className="howit__content-number">01</p>
                  </div>
                  <p className="howit__content-text">
                    Пройти простую регистрацию
                  </p>
                  
                </div>
              </div>
              <div className="col-4">
                <div className="howit__content">
                  <div className="number">
                    <p className="howit__content-number">02</p>
                  </div>
                  <p className="howit__content-text">
                    Пополнить баланс в личном кабинете
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="howit__content">
                  <div className="number">
                    <p className="howit__content-number">03</p>
                  </div>
                  <p className="howit__content-text">
                    Инвестировать в пул согласно лимитам
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="howit__content">
                  <div className="number">
                    <p className="howit__content-number">04</p>
                  </div>
                  <p className="howit__content-text">
                    Получать проценты и при необходимости выводить
                  </p>
                </div>
              </div>
              <div className="col-4">
                <div className="howit__content">
                  <div className="number">
                    <p className="howit__content-number">05</p>
                  </div>
                  <p className="howit__content-text">
                    Средства из пула ликвидности доступны к выводу в любое время
                  </p>
                </div>
              </div>
              <div id='btn__howit' className="col-4">
                <Link to={"/liquidity"} className="howit__content-btn" >
                  Инвестировать в пул
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default MainSection;
