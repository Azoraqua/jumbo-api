import { Axios } from 'axios';

const axios = new Axios({
    baseURL: 'https://www.jumbo.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export type Keyword = string;
export type SearchSuggestion = string;

export async function getSearchSuggestions(keyword: Keyword): Promise<SearchSuggestion[]> {
    return axios
        .get('/search-graphql', {
            params: {
                query: `
                    query SearchSuggestions($input: SearchSuggestionsInput) {
                        searchSuggestions(input: $input) {
                            keywords {
                                query
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
        .then((data) => data.searchSuggestions.keywords)
        .then((keywords) => keywords.map((k: { query: string }) => k.query));
}
