import React from 'react';
import FirstScreen from '../components/FirstScreen';
import FAQs from '../components/FAQs';
import FormBlock from '../components/FormBlock';

export default function Certificates() {
    return (
        <div className='container'>
            <FirstScreen imgPath='./images/main-ship-certificates.png'
                specialImgClass="img-certificates"
                title="подарочные сертификаты"
                small="Подарите своим близким незабываемые впечатления"
                btn="Оформить сертификат"
            />
            <FAQs
                props={[
                    {
                        id: 1,
                        question: "У меня нет почты, как я могу получить сертификат?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Veniam, nam. Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque.",
                    },
                    {
                        id: 2,
                        question: "Какой срок действия у подарочного сертификата?",
                        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa ipsa optio, dignissimos tempora distinctio obcaecati doloremque, alias laborum dolorem voluptas ab adipisci molestias, provident iure est sed quidem architecto deserunt autem. Dolor quibusdam consequatur explicabo laborum. Beatae hic veritatis quam!",
                    },
                    {
                        id: 3,
                        question: "Можно ли вернуть или обменять подарочный сертификат?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Veniam, nam.",
                    },
                    {
                        id: 4,
                        question: "Есть ли какие-либо ограничения или требования при использовании сертификата?",
                        answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium quam consectetur.",
                    },
                    {
                        id: 5,
                        question: "Могу ли я использовать сертификат для оплаты частично?",
                        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit officia cum molestiae magni repellat error debitis perspiciatis suscipit. Aut sint blanditiis enim voluptatibus facilis aspernatur! Veniam, nam.",
                    },
                    {
                        id: 6,
                        question: "Могу ли я перевести остаток средств с сертификата на другие услуги?",
                        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium facere sit delectus iusto soluta, illum dignissimos enim consequatur doloribus!",
                    },
                    {
                        id: 7,
                        question: "Могу ли я получить возврат средств за неиспользованный сертификат?",
                        answer: "Quod modi dicta distinctio consectetur dignissimos quas consequuntur, illum placeat eius vitae voluptates voluptatem aliquam non aspernatur itaque ipsam. Quod ea ab corporis praesentium consectetur.",
                    },
                ]} />
            <FormBlock
                titles={[
                    {
                        title: "У вас остались вопросы?",
                        blue: false,
                    },
                    {
                        title: "Смело пишите нам!",
                        blue: true,
                    }
                ]}
                imgLink="./images/form-left.png"
                formType="questions" />
        </div>
    )
}