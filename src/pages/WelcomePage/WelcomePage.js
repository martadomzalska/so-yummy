import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import css from "./WelcomePage.module.css";
import { ReactComponent as LogoMobile } from "../../images/WelcomePage/logo-m.svg";
import { ReactComponent as LogoTablet } from "../../images/WelcomePage/logo-tablet.svg";
import { ReactComponent as RegistrationButtonMobile } from "../../images/WelcomePage/registrationButton.svg";
import { ReactComponent as RegistrationButtonTablet } from "../../images/WelcomePage/registrationButtonTablet.svg";
import { ReactComponent as SignInButtonMobile } from "../../images/WelcomePage/signInButton.svg";
import { ReactComponent as SignInButtonTablet } from "../../images/WelcomePage/signInButtonTablet.svg";

function WelcomePage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const Logo = isMobile ? LogoMobile : LogoTablet;
  const RegistrationButton = isMobile
    ? RegistrationButtonMobile
    : RegistrationButtonTablet;
  const SignInButton = isMobile ? SignInButtonMobile : SignInButtonTablet;
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <Logo />
      </div>
      <h1 className={css.headline}>Welcome to the App!</h1>
      <p className={css.description}>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </p>
      <div className={css.buttonBar}>
        <Link to="/registration">
          <RegistrationButton />
        </Link>
        <Link to="/signin">
          <SignInButton />
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;
