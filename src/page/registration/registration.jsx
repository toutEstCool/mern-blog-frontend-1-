import styles from './registration.module.scss'

export const Registration = () => {
	return (
		<div className={styles.register}>
			<div className={styles.wrapperFormRegistration}>
				<h3>Создайте свой профиль</h3>
				<form className={styles.form}>
					<input type="name" placeholder="Ваше имя" />
					<input type="email" placeholder="E-Mail" />
					<input type="password" placeholder="Пароль" />
					<button type="submit">Зарегистрироваться</button>
				</form>
			</div>
		</div>
	)
}
