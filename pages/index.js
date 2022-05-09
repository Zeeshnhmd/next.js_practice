import { server } from '../config';
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
	return (
		<div>
			<ArticleList articles={articles} />
		</div>
	);
}

/**
 * *  fetching data from local api
 */

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`);
	const articles = await res.json();

	return {
		props: {
			articles,
		},
	};
};

/**
 * * fetching data from api link
 */

// export const getStaticProps = async () => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts?_limit=6`
// 	);
// 	const articles = await res.json();

// 	return {
// 		props: {
// 			articles,
// 		},
// 	};
// };
