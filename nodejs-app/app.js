const logError = () => {
    console.error("Error when publishing message to queue");
};

// Log error every 5 minutes (300,000 milliseconds)
setInterval(logError, 300000);

// Immediately log the first error as the container starts
logError();
