import React from "react";
import Tittle from "../../ui/tittle/tittle.jsx";
import Button from "../../ui/button/button.jsx";
import FeatureCard from "../../ui/feature-card/feature-card.jsx";
import "./style.css";

function FeaturesList({features}) {
  return features && features.length ? (
    <section className="features">
      <Tittle>Почему фермерские продукты лучше?</Tittle>
      <ul className="features__list">
        {features.map((feature)=>(
          <li className="features__item" key={feature.id}>
          <FeatureCard {...feature} />
        </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default FeaturesList;
