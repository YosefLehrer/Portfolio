import React, { useEffect, useState } from "react";

const Github = () => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/YosefLehrer/repos?sort=created")
      .then(resp => resp.json())
      .then(data => setRepos(data));
  }, [1]);
  const mappedRepos = repos.map(repo => {
    if (!repo.fork) {
      console.log(repo);
      return (
        <div className="repoContainer">
          <a href={repo.html_url} className="repoName">
            {repo.name}
          </a>
          <div className="repoDescription">{repo.description}</div>
          <div>
            <span className={repo.language}></span>
            {repo.language}
          </div>
        </div>
      );
    }
  });
  return (
    <div>
      <div className="greyLine"></div>
      {mappedRepos}
    </div>
  );
};

export default Github;
