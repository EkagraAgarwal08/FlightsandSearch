// middlewares/flight-middleware.js

const validateCreateFlight = (req, res, next) => {
    console.log('validateCreateFlight middleware called');
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime || 
        !req.body.departureTime || 
        !req.body.price
    ) {
        // if any of the body params is missing we come inside the if
        console.log('Validation failed: Missing mandatory properties');
        return res.status(400).json({
            data: {},
            success: false,
            message: 'Invalid request body for create flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    console.log('Validation passed');
    next();
}

module.exports = {
    validateCreateFlight
};
