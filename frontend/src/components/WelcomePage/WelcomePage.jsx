import css from "./WelcomePage.module.css";
import registration from "./registration.svg";
import signin from "./signin.svg";
import logo from "./logo.svg";

function WelcomePage() {
  return (
    <div className={css.container}>
      <img src={logo} alt="logo" />
      <div className={css.frame}>
        <h1 className={css.title}>Welcome to the app!</h1>
        <p className={css.paragraph}>
          This app offers more than just a collection of recipes - it is <br />
          designed to be your very own digital cookbook. You can easily <br />{" "}
          save and retrieve your own recipes at any time.
        </p>
        <div className={css.buttonBox}>
          <button className={css.button}>
            <img src={registration} alt="registration" />
          </button>
          <button className={css.button}>
            <img src={signin} alt="sign in" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
