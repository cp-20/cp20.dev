import useImmutableSWR from 'swr/immutable';

export const jsonFetcher = (url: string) =>
  fetch(url).then((res) => res.json());
export const textFetcher = (url: string) =>
  fetch(url).then((res) => res.text());

export const useFetcher = <T>(
  url: string,
  fetcher: (url: string) => Promise<T> = jsonFetcher,
) => {
  const response = useImmutableSWR<T>(url, fetcher);

  return response;
};
