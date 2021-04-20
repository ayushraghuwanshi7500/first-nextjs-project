import { articles } from '../../../data';

export default function handler(req, res) {
  const { id } = req.query;
  const currArticle = articles.filter((article) => article.id === id);
  if (currArticle.length > 0) {
    res.status(200).json(currArticle[0]);
  } else {
    res.status(404).json({ message: 'article not found for id ' + id });
  }
}
