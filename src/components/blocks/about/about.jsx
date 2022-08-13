import React from "react";
import Tittle, {TittleSize} from "../../ui/tittle/tittle";
import './style.css';

function About() {
    return (
        <section className="about">
            <Tittle size={TittleSize.BIG}>
            Магазин фермерских продуктов с доставкой
            </Tittle>
            <p>
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
            </p>
    </section>
    )
}

export default About;