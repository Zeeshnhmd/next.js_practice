import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = ({ articles }) => {
	// const router = useRouter();
	// const { id } = router.query;
	return (
		<div>
			<h1> {articles.title}</h1>
			<p>{articles.body}</p> <br />
			<Link href="/">Go Back</Link>
		</div>
	);
};

// this is how we can fetch data using getServerSideProps.

// export const getServerSideProps = async (context) => {
// 	const res = await fetch(
// 		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// 	);
// 	const article = await res.json();
// 	return {
// 		props: {
// 			article,
// 		},
// 	};
// };

// this is how we can fetch data using [getStaticProps ()] and [getStaticPaths ()]

export const getStaticProps = async (context) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${context.params.id}`
	);
	const articles = await res.json();
	return {
		props: {
			articles,
		},
	};
};

export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
	const articles = await res.json();

	// getting ids
	const ids = articles.map((article) => article.id);

	// getting paths
	const paths = ids.map((id) => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false, // this means that is we going to path which does not exist in the data then it will show us a 404 page
	};
};

export default Article;
