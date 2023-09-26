import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadNews = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fbd36bb45f5e4c0783c6ddbbb9ea7b21");
      setNews(response.data.articles);
    };
    loadNews();
  }, []);

  console.log("news", news);

  return (
    <div className="container mt-4">
      <div className="row">
        {news &&
          news.map((item, index) => {
            return (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">By: {item.author}</p>
                    <p className="card-text"><small className="text-body-secondary"> {new Date(item.publishedAt).toLocaleString()}</small></p>
                    <img src={item.urlToImage} className="img-fluid rounded-start mb-4" alt="image" />

                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
