/**
 * `formatRoute` is a utility function that replaces placeholders in a route string with provided parameters.
 *
 * @param {string} route - The route string containing placeholders.
 *  Placeholders should be prefixed with a colon (:).
 *  For example: '/users/:id'
 *
 * @param {Record<string, string | number>} params - An object containing key-value pairs.
 *  Each key represents a placeholder in the route without the colon, and the value is what it will be replaced with.
 *  For example: { id: 1 }
 *
 * @returns {string} - The formatted route string where each placeholder has been replaced by the corresponding value from the params.
 *  For example: Given the route '/users/:id' and params { id: 1 }, the function will return '/users/1'.
 *
 * @throws {Error} - Throws an error if a placeholder in the route string does not have a corresponding key in the params object.
 *
 * @example
 *  formatRoute('/users/:id', { id: 1 });  // Returns '/users/1'
 *  formatRoute('/users/:id/posts/:postId', { id: 1, postId: 2 });  // Returns '/users/1/posts/2'
 */
export const formatRoute = (route: string, params: Record<string, string | number>) => {
    // check if all placeholders are present in params, else throw error
    const placeholders = route.match(/:\w+/g);

    placeholders?.forEach((placeholder) => {
        const key = placeholder.slice(1);
        if (!params[key]) {
            throw new Error(`Missing value for placeholder '${placeholder}'`);
        }
    });

    return Object.entries(params).reduce((acc, [key, value]) => acc.replace(`:${key}`, value.toString()), route);
};
