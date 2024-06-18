import { Helmet } from "react-helmet";
import css from "./RegisterPage.module.css";
import photoMobile from "./images/photo-mobile.svg";
import photoTablet from "./images/photo-tablet.svg";
import photoDesktop from "./images/photo-desktop.svg";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className={css.desktopframe}>
        <form className={css.form}>
          <label className={css.formTitle}>Registration</label>
          <input className={css.input} placeholder="Name"></input>
          <input className={css.input} placeholder="Email"></input>
          <input className={css.input} placeholder="Password"></input>
          <button className={css.button} type="submit">
            Sign up
          </button>
          <picture>
            <source srcset={photoDesktop} media="(min-width: 1024px)" />
            <source srcset={photoTablet} media="(min-width: 768px)" />

            <img className={css.photo} src={photoMobile} alt="b" />
          </picture>
        </form>
        <Link to="/login" className={css.link}>
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default RegisterPage;
