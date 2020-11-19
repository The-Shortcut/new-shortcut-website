import React from "react";
import AnimatedNumber from "react-animated-number";

// Styles
import css from "./styles.module.scss";

const Data = () => {
  return (
    <div className={css.container}>
      <div className={css.data}>
        <AnimatedNumber
          component="text"
          initialValue="0"
          value="1552"
          style={{
            transition: "0.8s ease-out",
            fontSize: 48,
            color: "white",
            transitionProperty: "background-color, color, opacity",
          }}
          frameStyle={(perc) =>
            perc === 100 ? {} : { backgroundColor: "#202020" }
          }
          stepPrecision={0}
          duration={1000}
        />
        <p>Participants in 2020</p>
      </div>

      <div className={css.data}>
        <AnimatedNumber
          component="text"
          initialValue="0"
          value="252"
          style={{
            transition: "0.8s ease-in",
            fontSize: 48,
            color: "white",
            transitionProperty: "background-color, color, opacity",
          }}
          frameStyle={(perc) =>
            perc === 100 ? {} : { backgroundColor: "#202020" }
          }
          stepPrecision={0}
          duration={1000}
        />
        <p>Pro Bono Contributors</p>
      </div>

      <div className={css.data}>
        <AnimatedNumber
          component="text"
          initialValue="0"
          value="8.64"
          style={{
            transition: "0.8s ease-in",
            fontSize: 48,
            color: "white",
            transitionProperty: "background-color, color, opacity",
          }}
          frameStyle={(perc) =>
            perc === 100 ? {} : { backgroundColor: "#202020" }
          }
          stepPrecision={0}
          duration={1000}
          formatValue={(n) => `${n}/10`}
        />
        <p>Average Event Rating</p>
      </div>
    </div>
  );
};

export default Data;
