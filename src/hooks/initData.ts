import { useState, useEffect } from 'react';
import { DataEntitas, DataRetribution, DataUtama } from '../types/data';

const useFetchData = <T>(url: string, queryObject?: Record<string, string>) => {
  const [data, setData] = useState<T | undefined>();

  const urlWithParams = new URL(url);
  if (queryObject) {
    Object.keys(queryObject).forEach((key) => {
      urlWithParams.searchParams.append(key, queryObject[key]);
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(String(urlWithParams));
      const result: { data: T } = await response.json();
      setData(result.data);
    };

    fetchData();
  }, [url]);

  return { data };
};

const primaryUrl = 'https://api-hub.ilcs.co.id/test/v2';
const urlMain = primaryUrl + '/dataUtama';
const urlEntity = primaryUrl + '/dataEntitas';
const urlRetribution = primaryUrl + '/dataPungutan';

export const useFetchDataMain = (queryObject: Record<string, string>) =>
  useFetchData<DataUtama>(urlMain, queryObject);

export const useFetchDataEntity = (queryObject: Record<string, string>) =>
  useFetchData<DataEntitas>(urlEntity, queryObject);

export const useFetchDataRetribution = (queryObject: Record<string, string>) =>
  useFetchData<DataRetribution>(urlRetribution, queryObject);
