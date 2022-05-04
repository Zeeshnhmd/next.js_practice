import headerStyles from '../styles/Header.module.css';

const Header = () => {
	const x = 5;
	return (
		<div>
			<style jsx>
				{`
					.title {
						color: ${x < 3 ? 'red' : 'blue'};
					}
				`}
			</style>
			<h1 className="title">
				<span>WebDev</span> News
			</h1>
		</div>
	);
};

export default Header;
