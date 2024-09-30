// carStorageFilePromise.test.js

const { search } = require("../carStorageFilePromise");
describe('Testing with key "licence" and' + ' value "ABC-1" to resolve', () => {
  const result = [{ model: "Bored T-model", licence: "ABC-1" }];
  test("then", () => {
    return search("licence", "ABC-1").then((data) =>
      expect(data).toEqual(result)
    );
  });

  // Second version
  test("sync-await", async () => {
    const data = await search("licence", "ABC-1");
    expect(data).toEqual(result);
  });
  // Third version
  test("resolves", () => {
    return expect(search("licence", "ABC-1")).resolves.toEqual(result);
  });

  // Fourth version
  test("resolves with async", async () => {
    await expect(search("licence", "ABC-1")).resolves.toEqual(result);
  });
});

describe('Testing with all parameters missing to reject', ()=>{
    test('catch', ()=>{
        expect.assertions(1);
        return search()
        .catch(err=>expect(err)
        .toBe('parameter missing'));
    })
})
