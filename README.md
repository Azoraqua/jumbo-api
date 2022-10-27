# [Jumbo](https://jumbo.com) API

## **Functionality**
### Getting search suggestions:
```ts
const suggestions = await getSearchSuggestions('brood');
```
```js
[
    {
        query: 'brood',
        displayText: 'brood',
    },
    {
        query: 'broodbeleg',
        displayText: 'broodbeleg',
    },
    {
        query: 'volkoren brood',
        displayText: 'volkoren brood',
    },
    {
        query: 'bruin brood',
        displayText: 'bruin brood',
    },
    {
        query: 'wit brood',
        displayText: 'wit brood',
    },
]
```