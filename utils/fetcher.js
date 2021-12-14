export default async function fetcher(url, body) {
  return !body
    ? fetch(url, { method: "GET" }).then((res) => res.json())
    : fetch(url, { method: "POST", body: JSON.stringify(body) }).then((res) =>
        res.json()
      );
}
