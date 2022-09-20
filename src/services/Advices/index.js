const URL = "https://api.adviceslip.com";

export const getAdivce = async () =>
  fetch(`${URL}/advice`).then((response) => response.json());
