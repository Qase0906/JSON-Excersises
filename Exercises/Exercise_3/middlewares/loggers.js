
export const logger = (req, res, next) => {
    console.log(`[${new Date().toString()}] ${req.originalUrl}`)
    next();
}