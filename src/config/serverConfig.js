const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Export the port configuration
module.exports = {
    port: process.env.PORT || 3000 // Default to 3000 if PORT is not defined
};
