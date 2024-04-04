import React from "react";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Input from 'react-phone-number-input/input';

export default function Form() {
    const checked = useRef(false);
    const [styleCheck, setStyleCheck] = useState({ display: 'none' });

    const [name, setName] = useState("");
    const [errName, setErrName] = useState();
    const [lastname, setLastname] = useState("");
    const [errLastname, setErrLastname] = useState();
    const [email, setEmail] = useState("");
    const [errEmail, setErrEmail] = useState();
    const [phone, setPhone] = useState("");
    const [errPhone, setErrPhone] = useState();

    // const regexpName = /\d+\s_/ig;
    const regexpName = /[A-Za-zА-Яа-яЁё]{2,}/ig;
    //const regexpEmail = '/^\S+@\S+\.\S+$/';

    const formLS = JSON.parse(localStorage.getItem('form'));
    const arrayForm = [];
    if (formLS) {
        formLS.forEach(item => arrayForm.push(item));
    }

    function goToThanksPage(e) {
        e.preventDefault();

        if (errName || errLastname || errPhone || errEmail || !checked.current) return;
        if (typeof (errName) === "undefined" || typeof (errLastname) === "undefined" || typeof (errPhone) === "undefined" || typeof (errEmail) === "undefined") return;

        const formData = {
            name,
            lastname,
            phone,
            email,
            hasAgreement: checked.current,
        }
        arrayForm.push(formData);
        localStorage.setItem('form', JSON.stringify(arrayForm));

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
        //setErrEmail(email !== email.match(regexpEmail));
    }

    return (
        <form name="form" action="" method="get">
            <div className="form-text-inputs">
                <div className="input100">
                    <label htmlFor="name">Ваше имя*</label>
                    <input type="text" name="name" id="name" placeholder="Имя"
                        required value={name} pattern="[A-Za-zА-Яа-яЁё]"
                        onChange={handleNameChange}
                        onFocus={() => setErrName(name.length === 0 || !name.match(regexpName))}
                        onBlur={() => setErrName(name.length === 0 || !name.match(regexpName))}
                        className={errName ? "err" : undefined}>
                    </input>
                </div>

                <div className="input100">
                    <label htmlFor="lastname">Ваша фамилия*</label>
                    <input type="text" name="lastname" id="lastname"
                        placeholder="Фамилия" required value={lastname}
                        onChange={handleLastnameChange}
                        onBlur={() => setErrLastname(lastname.length === 0)}
                        onFocus={() => setErrLastname(lastname.length === 0)}
                        className={errLastname ? "err" : undefined}>
                    </input>
                </div>

                <div className="input100-row">
                    <div className="input50">
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

                    <div className="input50">
                        <label htmlFor="email">Электронная почта*</label>
                        <input type="email" name="email" id="email"
                            placeholder="Адрес эл. почты" required
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={() => setErrEmail(email.length === 0)}
                            onFocus={() => setErrEmail(email.length === 0)}
                            // onBlur={() => setErrEmail(email.length === 0 || email !== email.match(regexpEmail))}
                            // onFocus={() => setErrEmail(email.length === 0 || email !== email.match(regexpEmail))}
                            className={errEmail ? "err" : undefined}>
                        </input>
                    </div>
                </div>
            </div>

            <div className="form-btn-inputs">

                <label htmlFor="checkbox" >
                    Я принимаю <Link to="/privacy">политику обработки персональных данных</Link>
                    <input type="checkbox" name="checkbox" checked={checked.current} onChange={() => {
                        checked.current = !checked.current;
                        checked.current ? setStyleCheck({ display: 'block' }) : setStyleCheck({ display: 'none' });
                    }}></input>
                    <span className="custom-checkbox" >
                        <img src="./images/icons/checked.png" alt="" style={styleCheck}></img>
                    </span>
                </label>

                <button className="main-btn" id="submit"
                    onClick={goToThanksPage}>Отправить форму</button>
            </div>
        </form>
    )
}