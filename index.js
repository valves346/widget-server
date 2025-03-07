const express = require("express")
const path = require("path")
const cors = require("cors")

// Create Express app
const app = express()
const PORT = process.env.PORT || 3000

// Configure CORS to allow requests from localhost:5174
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// Middleware to parse JSON bodies
app.use(express.json())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")))

// Basic route for the homepage
app.get("/", (req, res) => {
  res.send(
    "Welcome to my Express server! Static files are served from the public directory."
  )
})

// Mock database for payment sessions
const paymentSessions = {}

// POST endpoint to create a payment session
app.post("/payment-session", (req, res) => {
  const sessionId = "ps_" + Math.random().toString(36).substring(2, 15)

  // Store session data with request body or default values
  paymentSessions[sessionId] = {
    id: sessionId,
    amount: req.body.amount || 1000,
    currency: req.body.currency || "USD",
    customer: req.body.customer || {
      name: "Test Customer",
      email: "customer@example.com",
    },
    status: "pending",
    created: new Date().toISOString(),
    // Store widget configuration if provided in the request
    widgetConfig: req.body.widgetConfig || {
      theme: "light",
      locale: "en-US",
      paymentMethods: ["pix"],
      allowedCountries: ["US", "BR", "MX"],
    },
  }

  res.status(201).json({
    success: true,
    sessionId: sessionId,
  })
})

// GET endpoint to retrieve payment session data
app.get("/payment-session/:id", (req, res) => {
  const sessionId = req.params.id

  if (!paymentSessions[sessionId]) {
    return res.status(404).json({
      success: false,
      error: "Payment session not found",
    })
  }

  // Return session data including the stored widget configuration
  res.json({
    success: true,
    session: paymentSessions[sessionId],
    widgetConfig: paymentSessions[sessionId].widgetConfig,
  })
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
