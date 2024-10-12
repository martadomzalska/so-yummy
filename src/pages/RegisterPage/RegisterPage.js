import { Link } from "react-router-dom";
import { ReactComponent as PictureMobile } from "../../images/RegisterPage/picture-mobile.svg";
import css from "./RegisterPage.module.css";
function RegisterPage() {
  return (
    <div className={css.container}>
      <div className={css.picture}>
        <PictureMobile />
      </div>
      <form className={css.form}>
        <label className={css.label}>Registration</label>
        <input
          className={css.input}
          type="text"
          name="username"
          placeholder="Name"
        ></input>
        <input
          className={css.input}
          type="email"
          name="email"
          placeholder="Email"
        ></input>
        <input
          className={css.input}
          type="password"
          name="password"
          placeholder="Password"
          minLength={8}
        ></input>
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
