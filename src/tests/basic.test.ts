// https://vitest.dev/guide/
test("test", () => {
	expect(1 + 1).toBe(2);
});

test("window not undefined", () => {
	expect(typeof window).not.toBe("undefined");
});
