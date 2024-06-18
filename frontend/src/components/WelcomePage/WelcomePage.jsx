import { Helmet } from "react-helmet";
import css from "./WelcomePage.module.css";
import registration from "./images/registration-mobile.svg";
import signin from "./images/signin-mobile.svg";
import logo from "./images/logo-mobile.svg";
import logoTablet from "./images/logo-tablet.svg";
import registrationTablet from "./images/registration-tablet.svg";
import signinTablet from "./images/signin-tablet.svg";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>So Yummy</title>
      </Helmet>
      <picture>
        <source srcset={logoTablet} media="(min-width: 768px)" />
        <img className={css.logo} src={logo} alt="logo" />
      </picture>

      <div className={css.frame}>
        <h1 className={css.title}>Welcome to the app!</h1>
        <p className={css.paragraph}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className={css.buttonBox}>
          <Link to="/register" className={css.buttonReg}>
            <picture>
              <source srcset={registrationTablet} media="(min-width: 768px)" />
              <img
                className={css.registration}
                src={registration}
                alt="registration"
              />
            </picture>
          </Link>
          {/* <button className={css.buttonSign}>
            <picture>
              <source srcset={signinTablet} media="(min-width: 768px)" />
              <img className={css.signUp} src={signin} alt="sign in" />
            </picture>
          </button> */}
          {/* <a href="registration" className={css.buttonSign}>
            <picture>
              <source srcset={signinTablet} media="(min-width: 768px)" />
              <img className={css.signUp} src={signin} alt="sign in" />
            </picture>
          </a> */}
          <Link to="login" className={css.buttonSign}>
            <picture>
              <source srcset={signinTablet} media="(min-width: 768px)" />
              <img className={css.signUp} src={signin} alt="sign in" />
            </picture>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
