import React, { useState, useEffect } from "react";

const link = "https://jsonmock.hackerrank.com/api/articles?page=";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const doFetch = (page) => {
    const url = link + page;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
		console.log(res);
		setTotalPages(res.total_pages);
        const filteredArticles = res.data.filter((article) => article.title);
		console.log(filteredArticles)
        setArticles(filteredArticles);
      });
  };

  const handleClick = (e) => {
    const page = e.target.innerHTML;
    doFetch(page);
  };

  useEffect(() => doFetch(1), []);

  return (
    <React.Fragment>
      <div className="pagination">
        {Array(totalPages)
          .fill()
          .map((value, index) => (
            <button
              data-testid="page-button"
              key={"page-button-" + (index + 1)}
              onClick={handleClick}
            >
              {index + 1}
            </button>
          ))}
      </div>
	  <div className="row">
		  <ul className="results">
	        {articles.map((article) => (
	          <li key={article.title} data-testid="result-row">
	            {article.title}
	          </li>
	        ))}
	      </ul>
	  </div>
      
    </React.Fragment>
  );
};

export default Articles;