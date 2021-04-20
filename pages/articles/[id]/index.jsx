import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { server } from '../../../config';
import Meta from '../../../components/Meta';
const article = ({ article }) => {
  console.log(article);
  const { id, body, title } = article;
  return (
    <>
      <Meta title={title} />
      <h1>hello {id}</h1>
      <h1>{title}</h1>
      <p>{body}</p>
      <br />
      <Link href='/'>Head Home</Link>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article
    }
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths: paths,
    fallback: false
  };
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths: paths,
//     fallback: false
//   };
// };

export default article;
