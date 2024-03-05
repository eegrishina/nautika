import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from 'react-phone-number-input/input'

export default function Form() {
    const [name, setName] = useState("");
    const [errName, setErrName] = useState();
    const [lastname, setLastname] = useState("");
    const [errLastname, setErrLastname] = useState();
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState();
    const [phone, setPhone] = useState("");
    const [errPhone, setErrPhone] = useState();

    function goToThanksPage(e) {
        e.preventDefault();

        if (errName || errLastname || errPhone || errEmail) return;
        if (typeof (errName) === "undefined" || typeof (errLastname) === "undefined" || typeof (errPhone) === "undefined" || typeof (errEmail) === "undefined") return;

        // console.log("name: " + name + ", lastname: " + lastname + ", phone: " + phone + ", email: " + email);

        window.location.href = './thanks';
    }

    function handleNameChange(e) {
        setName(e.target.value);
        setErrName(name.length === 0);
    }

    function handleLastnameChange(e) {
        setLastname(e.target.value);
        setErrLastname(lastname.length === 0);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        setErrEmail(email.length === 0);
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("name: " + name + ", lastname: " + lastname + ", phone: " + phone + ", email: " + email);
    // }

    return (
        <form name="form" action="" method="get">
            <div>
                <label htmlFor="name">Ваше имя*</label>
                <input type="text" name="name" id="name" placeholder="Имя"
                    required value={name}
                    onChange={handleNameChange}
                    onFocus={() => setErrName(name.length === 0)}
                    onBlur={() => setErrName(name.length === 0)}
                    className={errName ? "err" : undefined}></input>

                <label htmlFor="lastname">Ваша фамилия*</label>
                <input type="text" name="lastname" id="lastname"
                    placeholder="Фамилия" required value={lastname}
                    onChange={handleLastnameChange}
                    onBlur={() => setErrLastname(lastname.length === 0)}
                    onFocus={() => setErrLastname(lastname.length === 0)}
                    className={errLastname ? "err" : undefined}></input>

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
                            value={phone}
                            onChange={setPhone}
                            onBlur={() => setErrPhone(phone.length < 12)}
                            onFocus={() => setErrPhone(phone.length === 0)}
                            className={errPhone ? "err" : undefined} />
                    </div>
                    <div className="form-row-item">
                        <label htmlFor="email">Электронная почта*</label>
                        <input type="email" name="email" id="email"
                            placeholder="Адрес эл. почты" required
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={() => setErrEmail(email.length === 0 || !email.includes('@'))}
                            onFocus={() => setErrEmail(email.length === 0 || !email.includes('@'))}
                            className={errEmail ? "err" : undefined}></input>
                    </div>
                </div>
            </div>

            <div className="form-row form-row-btns">
                <p>Я принимаю <Link to="/privacy"><span>политику обработки персональных данных</span></Link></p>
                <button className="main-btn" id="submit" 
                    onClick={goToThanksPage}>Отправить форму</button>
                {/* добавить функционал по сохранению формы в локале */}
            </div>
        </form>
    )
}