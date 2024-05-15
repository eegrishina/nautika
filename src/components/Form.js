import { React, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { formData, initialFormData } from "../api";

export default function Form() {
    const checked = useRef(false);
    const [styleCheck, setStyleCheck] = useState({ display: 'none' });

    const [formValue, setFormValue] = useState(initialFormData);
    const [errStyle, setErrStyle] = useState(new Set());
    const changedErrStyle = new Set(errStyle);

    const formLS = JSON.parse(localStorage.getItem('form'));
    const arrayForm = [];
    if (formLS) {
        formLS.forEach(item => arrayForm.push(item));
    }

    function goToThanksPage(e) {
        e.preventDefault();

        arrayForm.push({ ...formValue, hasAgreement: checked.current });
        localStorage.setItem('form', JSON.stringify(arrayForm));

        window.location.href = '#/thanks';
    }

    function handleChange(e) {
        if (changedErrStyle.has(e.target.name)) {
            changedErrStyle.delete(e.target.name);
            setErrStyle(changedErrStyle);
        }
    }

    function handleBlur(e) {
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({ ...formValue, [name]: value });

        const regexp = new RegExp(e.target.pattern, "i");
        const match = regexp.test(value);

        if (match) {
            changedErrStyle.delete(name);
            setErrStyle(changedErrStyle);
        } else {
            changedErrStyle.add(name);
            setErrStyle(changedErrStyle);
        }
    }

    function disabledBtn() {
        let emptyValue = true;
        for (let key in formValue) {
            if (formValue[key] === "") {
                emptyValue = true;
            } else {
                emptyValue = false;
            }
        }
        return (errStyle.size > 0 || emptyValue || checked.current === false);
    }

    const inputs = formData.map((item) => {
        return (
            <div key={item.name} className={item.style}>
                <label htmlFor={item.name}>{item.label}</label>
                <input className={errStyle.has(item.name) ? "err" : ""}
                    type={item.type} name={item.name} placeholder={item.placeholder}
                    required={item.required} pattern={item.pattern}
                    onChange={(e) => handleChange(e)}
                    onBlur={(e) => handleBlur(e)}
                >
                </input>
            </div>
        )
    })

    return (
        <form name="form" action="" method="get">
            <div className="form-text-inputs">
                {inputs}
            </div>

            <div className="form-btn-inputs">

                <label htmlFor="checkbox" tabIndex="0">
                    Я принимаю <Link to="/privacy">политику обработки персональных данных</Link>
                    <input type="checkbox" name="checkbox"
                        checked={checked.current}
                        onChange={() => {
                            checked.current = !checked.current;
                            checked.current ? setStyleCheck({ display: 'block' }) : setStyleCheck({ display: 'none' });
                        }}></input>
                    <span className="custom-checkbox" >
                        <img src="./images/icons/checked.png" alt="" style={styleCheck}></img>
                    </span>
                </label>

                <button className="main-btn" disabled={disabledBtn()}
                    id="submit" onClick={goToThanksPage}>Отправить форму</button>
            </div>
        </form>
    )
}