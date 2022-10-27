import { Axios } from 'axios';

const axios = new Axios({
    baseURL: 'https://www.jumbo.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export type SearchSuggestion = {
    readonly query: string;
    readonly displayText: string;
};

export async function getSearchSuggestions(keyword: string): Promise<SearchSuggestion[]> {
    return axios
        .get('/search-graphql', {
            params: {
                query: `
                    query SearchSuggestions($input: SearchSuggestionsInput) {
                        searchSuggestions(input: $input) {
                            keywords {
                                query
                                displayText
                            }
                        }
                    }
                `,
                variables: {
                    input: {
                        searchTerms: keyword,
                    },
                },
            },
        })
        .then((res) => JSON.parse(res.data).data)
        .then((data) => data.searchSuggestions.keywords);
}
