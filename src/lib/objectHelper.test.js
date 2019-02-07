import { flatten } from "./objectHelper" 

describe('flatten', () => {
  test('converts a object with several levels into an object with only one level', () => {
    const inputData = {
        "key1": "Key1",
        "key2": {
          "key3": "Key3"
        }
    }

    const expectedOutputData = {
      "key1": "Key1",
      "key2.key3": "Key3",
    }

    expect(flatten(inputData)).toEqual(expectedOutputData);
  });

  const inputDataArray = [
    [
      "string",
      "String",
    ], 
    [
      "number", 
      13,
    ],
    [
      "function",
      () => null,
    ]
  ];

  describe.each(inputDataArray)(
    'will throw TypeError by receiving', 
    (name, inputData) => {
      test(`${name}`, () => {
        function flattenInputData() {
          flatten(inputData);
        }

        expect(flattenInputData).toThrowError(TypeError);
      });
    }
  );
});
