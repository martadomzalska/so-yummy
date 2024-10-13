import { Link } from "react-router-dom";
import { ReactComponent as PictureMobile } from "../../images/RegisterPage/picture-mobile.svg";
import { ReactComponent as UserIcon } from "../../images/RegisterPage/userInput.svg";
import { ReactComponent as EmailIcon } from "../../images/RegisterPage/emailIcon.svg";
import { ReactComponent as PasswordIcon } from "../../images/RegisterPage/passwordIcon.svg";
import css from "./RegisterPage.module.css";
function RegisterPage() {
  return (
    <div className={css.container}>
      <div className={css.picture}>
        <PictureMobile />
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
