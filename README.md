# Github Searcher

This application is built to search for users on Github

## Limitations

Due to GitHub search API limits, results are limited to the first 1000 results. Any query that returns more results will be truncated to 1000.

## Usage

There are two ways to use the application. The first is simply through the search bar on the main page. The second is to edit URL parameters.

| Name     |Type           | Description                |
|----------|---------------|----------------------------|
| q        | String        | Keyword searcher           |
| per_page | Interger      | Number of results per page |
| page     | Interger      | Page number                |

## License
[MIT](https://choosealicense.com/licenses/mit/)