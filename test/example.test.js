import * as assert from "assert";
import cat from "../index.js";

describe('cat', () => {
    test('hello there', () => {
        return cat('hello there').then(
            result => {
                expect(result).toBe('hello there');
                console.log('Tests OK!');
            },
            error => {
                assert.fail(error);
            }
        );
    });
})
