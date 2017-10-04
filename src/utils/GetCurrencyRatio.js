// TODO don't use cach in case of outdated data
const GetCurrencyRatio = (currencyFrom = 'USD') => {
  const upperCaseCurrencyFrom = currencyFrom.toUpperCase();
  const localStorageRatio = localStorage.getItem(upperCaseCurrencyFrom);
  const isRatioStored = localStorage.getItem(upperCaseCurrencyFrom) !== null;

  if (isRatioStored) {
    return JSON.parse(localStorageRatio);
  }

  const url = `http://api.fixer.io/latest?base=${upperCaseCurrencyFrom}`;

  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      const ratio = data.rates;

      localStorage.setItem(upperCaseCurrencyFrom, JSON.stringify(ratio));
      return ratio;
    });
};

export default GetCurrencyRatio;
