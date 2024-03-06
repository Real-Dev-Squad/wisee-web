import { formatRoute } from "./form-route.util";

describe("formatRoute", () => {
    it("should replace placeholders in a route string with provided parameters", () => {
        const result = formatRoute("/users/:id", { id: 1 });
        expect(result).toBe("/users/1");
    });

    it("should replace multiple placeholders in a route string with provided parameters", () => {
        const result = formatRoute("/users/:id/posts/:postId", { id: 1, postId: 2 });
        expect(result).toBe("/users/1/posts/2");
    });

    it("should handle string values", () => {
        const result = formatRoute("/users/:name", { name: "yash" });
        expect(result).toBe("/users/yash");
    });

    it("should handle string values with spaces", () => {
        const result = formatRoute("/users/:name", { name: "yash raj" });
        expect(result).toBe("/users/yash raj");
    });

    it("should replace values in query params", () => {
        const result = formatRoute("/users/:id?query=:query", { id: 1, query: "test" });
        expect(result).toBe("/users/1?query=test");
    });

    it("should throw error if a placeholder is not found in params", () => {
        expect(() => formatRoute("/users/:id", {})).toThrowError();
        expect(() => formatRoute("/users/:id/posts/:postId", { id: 1 })).toThrowError();

        // check for case sensitivity
        expect(() => formatRoute("/users/:id/posts/:postId", { id: 1, postid: 2 })).toThrowError();
    });
});
