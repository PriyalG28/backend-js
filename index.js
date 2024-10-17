require("dotenv").config();

const express = require("express");

const app = express();

const githubData = {
  "login": "PriyalG28",
  "id": 92621199,
  "node_id": "U_kgDOBYVJjw",
  "avatar_url": "https://avatars.githubusercontent.com/u/92621199?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/PriyalG28",
  "html_url": "https://github.com/PriyalG28",
  "followers_url": "https://api.github.com/users/PriyalG28/followers",
  "following_url": "https://api.github.com/users/PriyalG28/following{/other_user}",
  "gists_url": "https://api.github.com/users/PriyalG28/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/PriyalG28/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/PriyalG28/subscriptions",
  "organizations_url": "https://api.github.com/users/PriyalG28/orgs",
  "repos_url": "https://api.github.com/users/PriyalG28/repos",
  "events_url": "https://api.github.com/users/PriyalG28/events{/privacy}",
  "received_events_url": "https://api.github.com/users/PriyalG28/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2021-10-16T06:25:00Z",
  "updated_at": "2024-05-13T12:50:39Z"
  }

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to this application</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h3>Youtube  </h3>");
});

app.get("/github", (req, res) => {
  res.json(githubData)

});

app.listen(process.env.PORT, () => {
  console.log(`example app listening on port ${process.env.PORT}`);
});
