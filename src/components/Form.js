import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from 'react-phone-number-input/input'

export default function Form() {
    const [value, setValue] = useState();
    const [errorInput, setErrorInput] = useState({ border: "none" });

    // function handleBlur(e) {
    //     let regexp = /./;
    //     if (!e.value.includes(regexp)) {
    //         setErrorInput({ border: "1px solif #D00000" });
    //     } else {
    //         setErrorInput({ border: "none" });
    //     }
    // }

    return (
        <div className="form-container">
            <div className="form-right">
                <h3>Заполните форму и получите <br></br><span className="blue">скидку на первое посещение</span></h3>
                <img src="./images/img-form.png" alt=""></img>
            </div>

            <form name="form" action="" method="get" className="form-left">
                <div>
                    <label htmlFor="name">Ваше имя*</label>
                    <input type="text" name="name" id="name" placeholder="Имя" required style={errorInput}></input>

                    <label htmlFor="lastname">Ваша фамилия*</label>
                    <input type="text" name="lastname" id="lastname" placeholder="Фамилия" required></input>

                    <div className="form-row">
                        <div className="form-row-item">
                            <label htmlFor="phone">Номер телефона*</label>
                            <Input
                                placeholder="+7(     )     -    - "
                                // country="RU"
                                // international
                                // withCountryCallingCode
                                required
                                maxLength="16"
                                value={value}
                                onChange={setValue} />
                        </div>
                        <div className="form-row-item">
                            <label htmlFor="email">Электронная почта*</label>
                            <input type="email" name="email" id="email" placeholder="Адрес эл. почты" required></input>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <p>Я принимаю <Link to="/privacy"><span>политику обработки персональных данных</span></Link></p>
                    <button className="main-btn" id="submit">Отправить форму</button>
                    {/* добавить функционал по сохранению формы в локале */}
                </div>
            </form>
        </div>
    )
}