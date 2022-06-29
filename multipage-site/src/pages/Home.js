import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {
  const {data : arcticles, isPending, error } = useFetch('http://localhost:3000/articles')

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {arcticles && arcticles.map((article) => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read whole article...</Link>
        </div>
      ))}
    </div>
  )
}
