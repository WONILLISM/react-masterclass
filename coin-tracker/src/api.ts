const BASE_URL = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((respnose) => respnose.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((respnose) =>
    respnose.json()
  );
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((respnose) =>
    respnose.json()
  );
}
