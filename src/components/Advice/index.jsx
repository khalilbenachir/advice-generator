import React from "react";

import { DiceIcon } from "../Icons";
import "./styles.scss";

const Advice = ({ advice, onClick }) => {
  return (
    <main className="advice_outer_container">
      <div className="advice_container">
        <h3>ADVICE #{advice?.id}</h3>
        <article>“&nbsp;{advice?.advice}&nbsp;”</article>
        <div className="advice__divider" />

        <button onClick={onClick}>
          <DiceIcon />
        </button>
      </div>
    </main>
  );
};

export default Advice;
