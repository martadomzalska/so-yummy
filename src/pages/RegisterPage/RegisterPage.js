import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { ReactComponent as PictureMobile } from "../../images/RegisterPage/picture-mobile.svg";
import { ReactComponent as PictureTablet } from "../../images/RegisterPage/picture-tablet.svg";
import { ReactComponent as UserIconMobile } from "../../images/RegisterPage/userInput.svg";
import { ReactComponent as UserIconTablet } from "../../images/RegisterPage/userInput-tablet.svg";
import { ReactComponent as EmailIconMobile } from "../../images/RegisterPage/emailIcon.svg";
import { ReactComponent as EmailIconTablet } from "../../images/RegisterPage/emailInput-tablet.svg";
import { ReactComponent as PasswordIconMobile } from "../../images/RegisterPage/passwordIcon.svg";
import { ReactComponent as PasswordIconTablet } from "../../images/RegisterPage/passwordInput-tablet.svg";
import css from "./RegisterPage.module.css";
function RegisterPage() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const Picture = isMobile ? PictureMobile : PictureTablet;
  const UserIcon = isMobile ? UserIconMobile : UserIconTablet;
  const EmailIcon = isMobile ? EmailIconMobile : EmailIconTablet;
  const PasswordIcon = isMobile ? PasswordIconMobile : PasswordIconTablet;
  return (
    <div className={css.container}>
      <div className={css.picture}>
        <Picture />
      </div>
      <form className={css.form}>
        <label className={css.label}>Registration</label>
        <div className={css.inputContainer}>
          <UserIcon className={css.iconInside} />
          <input
            className={css.input}
            type="text"
            name="username"
            placeholder="Name"
          ></input>
        </div>
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
          Sign up
        </button>
      </form>
      <Link className={css.link} to="/signin">
        Sign in
      </Link>
    </div>
  );
}

export default RegisterPage;
