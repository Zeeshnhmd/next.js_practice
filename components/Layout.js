import styles from '../styles/Home.module.css';
import Header from './Header';
import Nav from './Nav';
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>
					<Header />
					{children}
				</main>
			</div>
		</>
	);
};

export default Layout;
