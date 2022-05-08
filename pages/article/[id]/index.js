import Link from 'next/link';
import { useRouter } from 'next/router';

const Article = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<div>
			<h1> this is article {id}</h1>
			<Link href="/">Go Back</Link>
		</div>
	);
};

export default Article;
