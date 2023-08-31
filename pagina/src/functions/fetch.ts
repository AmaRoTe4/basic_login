export const fetchPost = async ({
  path,
  method,
  body = {},
  headers = {},
}: {
  path: string;
  method: string;
  body: object;
  headers: object;
}) => {
  return await fetch(path, {
    body: JSON.stringify(body),
    method,
    headers: {
      "Content-Type": "application/json",
      "clave": "crMRzVT2veEAs4EVPnJWX",
      ...headers,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
};
