import css from "./RegisterPage.module.css";
import b from "./dddd.svg";

function RegisterPage() {
  return (
    <div className={css.container}>
      <img className={css.photo} src={b} alt="b" />
      <form className={css.form}>
        <label className={css.label}>Registration</label>
        {/* <img className={css.userSvg} src={user} alt="user" /> */}
        <input className={css.input} placeholder="Name"></input>
        <input className={css.input} placeholder="Email"></input>
        <input className={css.input} placeholder="Password"></input>
        <button className={css.button} type="submit">
          Sign up
        </button>
      </form>
      <a href="dd" className={css.link}>
        Sign in
      </a>
      <div className={css.bg}></div>
    </div>
  );
}

export default RegisterPage;
