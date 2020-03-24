export function loggerMiddleware(store) {
    return function functionwrapDispatch(next) {
        return function dispatchAndLog(action) {
            return next(action);
        }
    }
}