import React from "react";
import Tittle, { TittleSize } from "../tittle/tittle";
import "./style.css";

function FeatureCard({
    tittle,
    owner,
    about,
    isNegative,
    image
}) {
    return (
        <section className={`feature ${isNegative ? 'feature_negative' : ''}`}>
            <header className="feature__header">
                <img 
                    className="feature__img"
                    width={56}
                    height={56}
                    src={image}
                    alt={tittle}
                />
                <div>
                    <span className={`feature__owner ${
                        isNegative ? " feature__owner_negative" : ""
                    }`}>{owner}</span>
                    <Tittle size={TittleSize.EXTRA_SMALL}>{tittle}</Tittle>
                </div>
            </header>
            <p className="feature__text" 
            dangerouslySetInnerHTML={{ __html: about }}
            />
        </section>
    )
}

export default FeatureCard;