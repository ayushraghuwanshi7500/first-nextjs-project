import { server } from '../config/index';
import styles from '../styles/Layout.module.css';
import Article from '../components/Article';
export default function Home({ articles }) {
  console.log(articles);
  return (
    <div className={styles.container}>
      <h1>Welcome !</h1>
      <h3>Latest Newz !</h3>
      <Article articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   };
// };
