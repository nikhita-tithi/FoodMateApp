export function filterArray(restraunts, text, country, year) {
  return restraunts
    .filter(item => {
      let textf = item.Brand.toLowerCase().includes(text.toLowerCase());
      let countryf =
        country == "" || item.Country.toLowerCase() == country.toLowerCase();
      let yearf =
        year == "" ||
        item["Top Ten"].toLowerCase().includes(year.toLowerCase());
      return textf && countryf && yearf;
    })
    .sort((a, b) => {
      if (year == "") {
        return a.Brand.toLowerCase() < b.Brand.toLowerCase() ? 1 : -1;
      } else {
        return a["Top Ten"]
          .substring(a.length - 2)
          .replace("10", ":")
          .trim() <
          b["Top Ten"]
            .replace(a.length - 2)
            .replace("10", ":")
            .trim()
          ? -1
          : 1;
      }
    });
}
