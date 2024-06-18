import { Helmet } from "react-helmet";
import css from "./SigninPage.module.css";
import photoMobile from "../RegisterPage/images/photo-mobile.svg";
import photoTablet from "../RegisterPage/images/photo-tablet.svg";
import photoDesktop from "../RegisterPage/images/photo-desktop.svg";
import { Link } from "react-router-dom";

function SigninPage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <div className={css.desktopframe}>
        <form className={css.form}>
          <label className={css.formTitle}>Sing in</label>
          <input className={css.input} placeholder="Email"></input>
          <input className={css.input} placeholder="Password"></input>
          <button className={css.button} type="submit">
            Sign in
          </button>
          <picture>
            <source srcset={photoDesktop} media="(min-width: 1024px)" />
            <source srcset={photoTablet} media="(min-width: 768px)" />

            <img className={css.photo} src={photoMobile} alt="b" />
          </picture>
        </form>
        <Link to="/register" className={css.link}>
          Registration
        </Link>
      </div>
    </div>
  );
}

export default SigninPage;
