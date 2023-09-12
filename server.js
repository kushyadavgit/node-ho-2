const express = require("express");
const app = express();
const port = 3000; // You can use any port you prefer

// Define a route at /api/main
app.get("/api/main", (req, res) => {
  res.json({
    Questions: "what is express js ",
    Answer:
      "Express.js is a lightweight and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing features like routing, middleware, and HTTP request/response handling. It's popular for its simplicity and flexibility, allowing developers to quickly create server-side applications with Node.js.",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
