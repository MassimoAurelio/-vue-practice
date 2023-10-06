export const API_KEY =
  "coinranking855424c1f768e1aba72ca991d4b69cf0fd04c0cd0ef834be";

export const SECOND_API_KEY = "pub_306736086a96a6532ece1dade2987b6799b67";

export const BASE_URL = "https://api.coinranking.com/v2/";

export const REFERENCE_URL =
  "https://api.coinranking.com/v2/reference-currencies";

export const BASE_ICON_URL = "https://stage.stellare.omgp.xyz/icons/";

export async function getCoins(limit) {
  const url = `${BASE_URL}coins?limit=${limit}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response error");
    }
    const data = await response.json();
    return data.data.coins;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function referenceCryptos(limit = 10) {
  const url = `${REFERENCE_URL}?coins=${limit}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response error");
    }

    const data = await response.json();
    return data.data.currencies;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const options = {
  headers: {
    "x-access-token": API_KEY,
  },
};
