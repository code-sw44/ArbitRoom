import { Link } from 'react-router-dom';
import React from 'react';
import './FAQ.scss';
import Admin from '../../../img/image/admin.jpg'
import wallet from '../../../../src/img/icon/home/wallet.svg';
import card from '../../../../src/img/icon/home/card.svg';

const FAQ = () => {
     return (<div className="FAQ">
          <main className='pay'>
               <div className="pay__body">
                    <section className='pay__sidebar sidebar'>
                         <div className="sidebar__body">
                              <div className="sidebar__mainbox">
                                   <svg className='sidebar__onMain-img' width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M10 1L1 11L10 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                   </svg>
                                   <a className='sidebar__onMain'><Link to={'/'}>Вернуться на сайт</Link></a>
                              </div>
                              <div className="sidebar__user">
                                   <img className='sidebar__admin' src={Admin} alt="" />
                                   <h2 className='sidebar__login'>Britany</h2>
                              </div>
                              <div className="sidebar__wallets">
                                   <div className="sidebar__wallet-box">
                                        <img className='sidebar__wallet-img' src={wallet} alt="" />
                                        <a className="sidebar__wallet" href="#content-1">Пополнение кошелька</a>
                                   </div>
                                   <div className="sidebar__wallet-box">
                                        <img className='sidebar__wallet-img' src={card} alt="" />
                                        <a className="sidebar__wallet" href='#content-2'>Вывод средств</a>
                                   </div>
                              </div>
                         </div>

                    </section>
               </div>
               <section className='pay__content content' checked id={'content-1'}>
                    <div className="pay__header1 header1">
                         <nav className="header1__nav">
                              <div className="header1__wallet">
                                   <div className="header1__bumber">
                                        <h1 className="header1__title">Пополнение кошелька</h1>
                                        <img className="header1__img" src={wallet} alt="" />
                                        <p className='header1__num'>3400 USDT</p>
                                   </div>
                                   <button className='header1__btn'>Выйти из аккаунта</button>
                              </div>
                         </nav>
                    </div>

                    <div className="content1" >
                         <div className="content1__colnms">
                              <div className="content1__body">
                                   <div className="content1__box1">
                                        <div className="content1__box11">
                                             <form className='content1__form' action="">
                                                  <p className='content1__text'>Способ оплаты</p>
                                                  <select className='content1__select' name="" id="">
                                                       <option className='content1__option' selected value="">USDT TRC 40</option>
                                                       <option value="">USDT TRC 20</option>
                                                  </select>
                                                  <p className='content1__p'>Сумма</p>
                                                  <input className='content1__input' placeholder="Введите сумму в USDT" type="text" />
                                                  <button className='content1__btn'>Пополнить кошелек</button>
                                             </form>
                                        </div>
                                   </div>
                                   <div className="content1__box2">
                                        <div className="content1__sums">
                                             <div className="content1__sum">
                                                  <div className="content1__sum-1">
                                                       <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g id="fi-rr-chart-pie-alt" clip-path="url(#clip0_34_74)">
                                                                 <path id="Vector" d="M21.8319 13.9999H16.3334C15.7146 13.9999 15.1211 13.7541 14.6835 13.3165C14.2459 12.8789 14.0001 12.2854 14.0001 11.6666V6.15289C14.0017 5.6162 13.8798 5.08634 13.6439 4.60426C13.4081 4.12219 13.0645 3.70082 12.6398 3.37272C12.2373 3.054 11.767 2.83206 11.2651 2.72404C10.7632 2.61601 10.2432 2.6248 9.74526 2.74972C6.91686 3.45184 4.41282 5.09829 2.64723 7.41681C0.881646 9.73533 -0.0397153 12.587 0.0355177 15.5003C0.110751 18.4136 1.17807 21.2139 3.06097 23.4382C4.94387 25.6625 7.52956 27.1775 10.3904 27.7327C13.6071 28.3484 16.9374 27.711 19.6993 25.9511C22.4613 24.1912 24.4459 21.442 25.2468 18.2664C25.3722 17.7678 25.3813 17.2471 25.2735 16.7444C25.1657 16.2417 24.9438 15.7705 24.6249 15.3672C24.293 14.9431 23.8692 14.5997 23.3854 14.3629C22.9017 14.1261 22.3705 14.002 21.8319 13.9999ZM22.9846 17.6959C22.5379 19.4947 21.6214 21.1426 20.3289 22.4711C19.0363 23.7995 17.4141 24.7608 15.6282 25.2566C13.8423 25.7524 11.9567 25.7649 10.1643 25.2928C8.37197 24.8208 6.73715 23.8812 5.42709 22.57C4.11703 21.2589 3.17874 19.6233 2.70819 17.8305C2.23764 16.0378 2.25172 14.1522 2.74899 12.3667C3.24627 10.5812 4.20888 8.95976 5.53838 7.66832C6.86788 6.37689 8.51655 5.46176 10.3158 5.01656C10.4697 4.9781 10.6305 4.97622 10.7853 5.01106C10.94 5.04591 11.0845 5.11651 11.2071 5.21722C11.3519 5.3276 11.4693 5.46984 11.5502 5.63291C11.6311 5.79598 11.6734 5.97551 11.6738 6.15755V11.6666C11.6738 12.9042 12.1654 14.0912 13.0406 14.9664C13.9158 15.8416 15.1028 16.3332 16.3404 16.3332H21.8378C22.0214 16.334 22.2025 16.3764 22.3674 16.4572C22.5323 16.538 22.6767 16.6552 22.7898 16.7999C22.8889 16.9242 22.958 17.0698 22.9916 17.2252C23.0252 17.3806 23.0224 17.5417 22.9834 17.6959H22.9846Z" fill="url(#paint0_linear_34_74)" />
                                                                 <path id="Vector_2" d="M27.5928 8.68714C27.0557 6.71253 26.0122 4.91239 24.5658 3.46488C23.1193 2.01737 21.3199 0.972665 19.3456 0.434142C19.1387 0.378503 18.9253 0.350262 18.711 0.350142C18.4027 0.347213 18.0969 0.405404 17.8112 0.521353C17.5256 0.637303 17.2657 0.80871 17.0467 1.02567C16.8277 1.24263 16.6538 1.50085 16.5352 1.7854C16.4165 2.06995 16.3555 2.37518 16.3555 2.68348V8.16681C16.3555 9.09507 16.7242 9.98531 17.3806 10.6417C18.037 11.2981 18.9272 11.6668 19.8555 11.6668H25.361C25.7211 11.6633 26.0755 11.5769 26.3968 11.4142C26.7181 11.2515 26.9975 11.0169 27.2134 10.7287C27.4293 10.4404 27.5759 10.1063 27.6417 9.75224C27.7075 9.39817 27.6907 9.0337 27.5928 8.68714ZM24.6785 9.33348H19.8508C19.5414 9.33348 19.2446 9.21056 19.0258 8.99177C18.8071 8.77297 18.6841 8.47623 18.6841 8.16681L18.6748 2.69164C18.6833 2.68547 18.6935 2.68183 18.704 2.68114H18.7343C20.3234 3.11407 21.7712 3.95621 22.9332 5.12349C24.0951 6.29078 24.9306 7.7424 25.3563 9.33348H24.6785Z" fill="url(#paint1_linear_34_74)" />
                                                            </g>
                                                            <defs>
                                                                 <linearGradient id="paint0_linear_34_74" x1="26.4009" y1="2.64907" x2="-1.14575" y2="3.0935" gradientUnits="userSpaceOnUse">

                                                                      <stop stop-color="#A7A7A7" />
                                                                      <stop offset="1" stop-color="#F2F2F2" />
                                                                 </linearGradient>
                                                                 <linearGradient id="paint1_linear_34_74" x1="28.1521" y1="0.350048" x2="15.8289" y2="0.548988" gradientUnits="userSpaceOnUse">
                                                                      <stop stop-color="#A7A7A7" />
                                                                      <stop offset="1" stop-color="#F2F2F2" />
                                                                 </linearGradient>
                                                                 <clipPath id="clip0_34_74">
                                                                      <rect width="28" height="28" fill="white" />
                                                                 </clipPath>
                                                            </defs>
                                                       </svg>
                                                       <p className='content1__sum-text'>Общие начисления</p>
                                                  </div>
                                                  <p className='content1__sum-text1'>Сумма кошелька</p>
                                             </div>
                                             <div className="content1__sun">
                                                  <div className="content1__sun-2">
                                                       <div className="content1__sun-box">
                                                            <div className="content1__sun-colnm">
                                                                 <h1 className='content1__sum-title'>BASE</h1>
                                                                 <p className='comtent1__sum-text'>Базовая</p>
                                                            </div>
                                                            <div className="content1__sun-colnm">
                                                                 <h1 className='content1__sum-title'>100 USDT</h1>
                                                                 <p className='comtent1__sum-text'>За удержание</p>
                                                            </div>
                                                            <h1 className='content1__sum-usd'>100 USDT</h1>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="content1__colnms">
                              <div className="content1__box3"></div>
                         </div>

                    </div>
               </section>
               <section className='pay__content content' id={'content-2'}>
                    <div className="pay__header1 header1">
                         <nav className="header1__nav">
                              <div className="header1__wallet">
                                   <h1 className="header1__title">Пополнение кошелька</h1>
                                   <div className="header1__bumber">
                                        <img className="header1__img" src={wallet} alt="" />
                                        <p className='header1__num'>3400 USDT</p>
                                   </div>
                                   <button className='header1__btn'>Выйти из аккаунта</button>
                              </div>
                         </nav>
                    </div>
                    <div className="item-2" >
                         <div className="container">
                              <div className="container__logo">
                                   <h2 className="container__logo-title">Информация о пользователях</h2>
                              </div>
                              <table className='tables'>
                                   <thead >
                                        <tr className='tables__head'>
                                             <th className='tables__head-title'>Пользователель</th>
                                             <th className='tables__head-title'>Статус</th>
                                             <th className='tables__head-title'>Кошелк</th>
                                             <th className='tables__head-title'>Дата</th>
                                             <th className='tables__head-title'>Комментарий</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        <tr className='tables__body'>
                                             <td className='tables__body-text'>Maryee4</td>
                                             <td className='tables__body-text texts'><span className='tables__span'>Активен</span></td>
                                             <td className='tables__body-text'>Kloxdl55kx....</td>
                                             <td className='tables__body-text'>16.08.2022</td>
                                             <td className='tables__body-text'>Последняя активность пользователя 3 минуты назад</td>
                                        </tr>
                                        <tr className='tables__body'>
                                             <td className='tables__body-text'>Marukkkkkk</td>
                                             <td className='tables__body-text texts'><span className='tables__spans'>Не активен</span></td>
                                             <td className='tables__body-text'>K;dd6ewrer...</td>
                                             <td className='tables__body-text'>16.08.2022</td>
                                             <td className='tables__body-text'>Пользователь не активен на сайте более 60 дней</td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </section>
          </main >
     </div>
     )
}

export default FAQ;
