const express = require('express');
const app = express();

// Define the '/posts' endpoint
app.get('/posts', (req, res) => {
  // Array of 20 example posts
  const posts = Array(20)
    .fill()
    .map((_, index) => ({ id: index + 1, title: `Post ${index + 1}` }));

  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
