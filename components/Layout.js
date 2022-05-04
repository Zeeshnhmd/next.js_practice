import styles from '../styles/Home.module.css';
import Nav from './Nav';
const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className={styles.container}>
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
