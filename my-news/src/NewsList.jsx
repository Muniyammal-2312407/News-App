import { useEffect, useState } from "react";
import axios from "axios";

export default function NewsList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=YOUR_API_KEY"
        );
        setArticles(res.data.articles);
      } catch (err) {
        console.error(err);
      }
    }
    fetchNews();
  }, []);

  return (
    <div>
      {articles.map((a, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <a href={a.url} target="_blank" rel="noreferrer">
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
