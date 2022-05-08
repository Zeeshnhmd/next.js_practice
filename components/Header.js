import headerStyles from '../styles/Header.module.css';

const Header = () => {
	// const x = 5;
	return (
		<div>
			{/* <style jsx>
				{`
					.title {
						color: ${x < 3 ? 'red' : 'blue'};
					}
				`}
			</style> */}
			<h1 className={headerStyles.title}>
				<span>WebDev</span> News
			</h1>
			<p className={headerStyles.description}>
				Keep upto date with the latest webdev news
			</p>
		</div>
	);
};

export default Header;
