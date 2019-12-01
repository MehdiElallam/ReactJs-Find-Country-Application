const SEARCH = "SEARCH";

function SearchAction(countries, keyword) {
  return {
    type: SEARCH,
    countries:
      keyword === ""
        ? countries
        : countries.filter(c => {
            c.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
          })
  };
}

export default SearchAction;
