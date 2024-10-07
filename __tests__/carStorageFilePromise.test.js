// carStorageFilePromise.test.js

const { initSearch } = require("../carStorageV2");

const search = initSearch();

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

describe("Testing with all parameters missing to reject", () => {

    //First version
  test("catch", () => {
    expect.assertions(1);
    return search().catch((err) => expect(err).toBe("parameter missing"));
  });

  // Second version
  test('async-await', async()=>{
    expect.assertions(1);
    try {
        await search();
    } catch (err) {
        expect(err).toBe('parameter missing');

    }
  });

  // Third version
  test("rejects", () => {
    return expect(search()).rejects.toBe("parameter missing");
  });

  // Fourth version
  test("rejects with async", async () => {
    await expect(search()).rejects.toBe("parameter missing");
  });
});

describe('test with key "model"',()=>{
    const resultForBoredTmodel = [
      { "model": "Bored T-model", "licence": "ABC-1" },
      { "model": "Bored T-model", "licence": "GTF-10" }
    ];
    const resultForNova = [
      { "model": "Noval", "licence": "XYZ-123" }
    ];
    test('model "Bored T-model"', ()=>{
        return expect(search('model', 'Bored T-model'))
        .resolves.toEqual(resultForBoredTmodel)
    });

  test('model "Noval"', () => {
    return expect(search("model", "Noval")).resolves.toEqual(resultForNova);
  });

    test('model X', ()=>{
        return expect(search("model", "X")).resolves.toEqual([]);
    });

    test('one parameter missing', ()=>{
        return expect(search('model'))
        .rejects.toBe("parameter missing");
    });
});
   

describe('Testing with key "licence"', ()=>{
        test('licence "X"', ()=>{
            return expect(search('licence', 'X'))
            .resolves.toEqual([]);
        });
    });

    describe('Test wrong key', () => {
      test('key "X" with value "ABC-1"', () => {
        return expect(search("licence", "X")).resolves.toEqual([]);
      });
    });
    describe("Test read error", () => {
      const search = initSearch("x.json");

      test("Missing file", () => {
        return expect(search("x", "x")).rejects.toBe("read error");
      });
    });


