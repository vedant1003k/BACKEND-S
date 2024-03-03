const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err))
    }
}
/*
This code defines a higher-order function called asyncHandler. A higher-order function is a 
function that takes another function as an argument or returns a function. In this case, asyncHandler
 takes a requestHandler function as an argument.

The requestHandler function is expected to be an asynchronous function that takes three arguments: 
req (the request object), res (the response object), and next (the next middleware function in the stack).

The purpose of asyncHandler is to wrap the requestHandler function in a way that allows it to handle 
asynchronous operations and errors more easily. It does this by returning a new function that takes
the same three arguments (req, res, and next) and wraps the requestHandler function call in a 
Promise.resolve() call.

Here's a breakdown of what the code does:

asyncHandler is a function that takes a requestHandler function as an argument.

It returns a new function that takes three arguments: req, res, and next.

Inside the new function, Promise.resolve() is called with the result of calling requestHandler(req, res, next). 

This ensures that the requestHandler function is always called asynchronously, even if it doesn't return a promise
itself.

The .catch() method is chained to the Promise.resolve() call to catch any errors that occur during the 
execution of the requestHandler function.

If an error occurs, the next function is called with the error as an argument, which will pass the 
error to the next middleware function in the stack.

In summary, the asyncHandler function is a utility function that simplifies the 
handling of asynchronous operations and errors in Express.js middleware functions.
It allows you to write middleware functions that use async/await syntax without having to worry about manually handling promises and errors.

*/
export { asyncHandler }



// other way using try catch

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }