import { getSearchSuggestions } from '.';

test('Retrieving suggestions for "brood"', async () => {
    const suggestions = await getSearchSuggestions('brood');

    expect(suggestions).toEqual(['brood', 'broodbeleg', 'volkoren brood', 'bruin brood', 'wit brood']);
});
