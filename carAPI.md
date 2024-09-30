# CarStorage API

## cars.json

```json
[
  { "model": "Bored T-model", "licence": "ABC-1" },
  { "model": "Noval", "licence": "XYZ-123" },
  { "model": "Bored T-model", "licence": "GTF-10" },
  { "model": "XCT", "licence": "B-1" }
]
```

## **search(key,value)**

function returns an array of cars that matches the given criterion. If no match, returns an empty array.

if parameters are missing,rejects 'parameters missing';

parameters:
- key: model or licence
- value: value to be searched
