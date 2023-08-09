import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Liquidity.css";
const Liquidity = () => {
    const [users, setUsers] = useState([]) // create main hook for saving all datas 
    const getUsers = () => { /// function for getting the data of date 
        axios.get('http://localhost:3000/lecvitation')
            .then((response) => {
                setUsers(response.data)
            })
    }
    useEffect(() => { /// activate when starting 
        getUsers()
    }, [])
    return (
        <div className='wrapper1'>
            <div className="liquidity__logo">
                <h2>Пул ликвидности</h2>
            </div>
            <main className='Mainer'>
                <section className='invest'>
                    <div className="invest__content">
                        <h2 className="invest__content-interest">15%</h2>
                        <p className="invest__content-number">от 15% до 25%</p>
                        <p className="invest__content-mouth">в месяц</p>
                        <h3 className="invest__content-liquidity">Пул ликвидности <br /> от 100 USDT Бессрочный</h3>
                        <p className="invest__content-text">Возврат инвестиций<br /> в любое время</p>
                        <button className="invest__content-btn">Инвестировать</button>
                    </div>
                </section>
                <table className='table'>
                    <thead>
                        <tr className='table__head'>
                            <th className='table__head-title padding'>№</th>
                            <th className='table__head-title'>СУММА,%</th>
                            <th className='table__head-title'>СРОК</th>
                            <th className='table__head-title'>Базовый % прибыли</th>
                        </tr>
                    </thead>

                    <tbody className='table__body'>
                        {
                            users.map((item) => {
                                return (
                                    <tr className='table__body'>
                                        <td className='table__body-text padding'>{item._id}</td>
                                        <td className='table__body-text'>до {item.price} $</td>
                                        <td className='table__body-text'>{item.term}</td>
                                        <td className='table__body-link'>{item.income}%</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <section className='conditions'>
                    <div className="wrapper2">
                        <div className="conditions__body">
                            <h1 className='conditions__title'>Условия</h1>
                            <ul className="conditions__box">
                                <p className='conditions__text'>
                                    Депозит возвращается в любое время, срок вывода 21 рабочий день
                                </p>
                                <p className='conditions__text'>Процент: 15 - 25% в месяц</p>
                                <p className='conditions__text'>
                                    Дополнительно +1% к базовому вознаграждению за удержание депозита и процентов (каждую неделю)
                                </p>
                                <p className='conditions__text'>
                                    Откат процентов обратно, если частично или полностью снимали проценты или депозит
                                </p>
                                <p className='conditions__text'>
                                    Комиссия на вывод 5%
                                </p>
                                <p className='conditions__text'>
                                    Внутренний перевод средств моментальный и без комиссий
                                </p>
                                <p className='conditions__text'>
                                    Вывод процентов до 3-х рабочих дней
                                </p>

                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Liquidity;
