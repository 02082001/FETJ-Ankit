import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/login.jpg" alt="login" />
					<div className={styles.data}>
					<p className={styles.textSize}>Hello Chidambar Reddy </p>
					<a className={styles.textSize} href = 'google.com'>[Sign out]</a>
				</div>
				<p className={styles.textSize}>You are signed in with email chidambar@formulaq.io</p>
				</div>

			</div>
		</div>
	);
}

export default Login;
