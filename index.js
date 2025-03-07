const express = require("express")
const path = require("path")

// Create Express app
const app = express()
const PORT = process.env.PORT || 3000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")))

// Basic route for the homepage
app.get("/", (req, res) => {
  res.send(
    "Welcome to my Express server! Static files are served from the public directory."
  )
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
