// Middleware function for logging route requests
const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
  };
  
  // Controller function for serving a hello message
  const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`Hello, ${name}!`);
  };
  
  // Register the logRoutes middleware globally to log all requests
  app.use(logRoutes);
  
  // Register the serveHello controller for the /api/hello route
  app.get('/api/hello', serveHello);

  // Import the path module to construct the absolute path to the static assets folder
const path = require('path');

// Construct the absolute path to the static assets folder using the `path.join()` method
// Use '../' to navigate to a parent directory, similar to when you are using `cd`.
const pathToDistFolder = path.join(__dirname, '../../path/to/frontend/dist');

// Create the middleware function for serving static assets
const serveStatic = express.static(pathToDistFolder);

// Use the middleware function to serve static assets
app.use(serveStatic);
