import { getSearchSuggestions } from '.';

test('Retrieving suggestions for "brood"', async () => {
    const suggestions = await getSearchSuggestions('brood');

    expect(suggestions).toEqual([
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
    ]);
});
