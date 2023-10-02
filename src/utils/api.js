export const API_KEY =
  "coinranking855424c1f768e1aba72ca991d4b69cf0fd04c0cd0ef834be";

//MainTable
export const BASE_URL = "https://api.coinranking.com/v2/";

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


