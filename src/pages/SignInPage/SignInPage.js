import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as PictureMobile } from "../../images/RegisterPage/picture-mobile.svg";
import { ReactComponent as PictureTablet } from "../../images/RegisterPage/picture-tablet.svg";
import { ReactComponent as PictureDesktop } from "../../images/RegisterPage/picture-desktop.svg";
import { ReactComponent as EmailIconMobile } from "../../images/RegisterPage/emailIcon.svg";
import { ReactComponent as EmailIconTablet } from "../../images/RegisterPage/emailInput-tablet.svg";
import { ReactComponent as PasswordIconMobile } from "../../images/RegisterPage/passwordIcon.svg";
import { ReactComponent as PasswordIconTablet } from "../../images/RegisterPage/passwordInput-tablet.svg";
import css from "./SignIn.module.css";

function SignInPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const Picture = isMobile
    ? PictureMobile
    : isTablet
    ? PictureTablet
    : PictureDesktop;
  const EmailIcon = isMobile ? EmailIconMobile : EmailIconTablet;
  const PasswordIcon = isMobile ? PasswordIconMobile : PasswordIconTablet;
  return (
    <div className={css.container}>
      <div className={css.picture}>
        <Picture />
      </div>
      <div>
        <form className={css.form}>
          <label className={css.label}>Sign In</label>
          <div className={css.inputContainer}>
            <EmailIcon className={css.iconInside} />
            <input
              className={css.input}
              type="email"
              name="email"
              placeholder="Email"
            ></input>
          </div>
          <div className={css.inputContainer}>
            <PasswordIcon className={css.iconInside} />
            <input
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
              minLength={8}
            ></input>
          </div>
          <button className={css.button} type="submit">
            Sign in
          </button>
        </form>
        <Link className={css.link} to="/registration">
          Registration
        </Link>
      </div>
    </div>
  );
}

export default SignInPage;
