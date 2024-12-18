import { useState, useEffect } from 'react';
import { DataEntitas, DataPungutan, DataUtama } from '../types/data';

const useFetchData = <T>(
  url: string,
  queryObject: Record<string, string>,
  transformData?: (data: T) => T
) => {
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
      setData(transformData?.(result.data) || result.data);
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

const transformDataPungutan = (data: DataPungutan) => {
  const transformedNilaiFob =
    Number(data.nilai_incoterm) +
    Number(data.biaya_tambahan) -
    Number(data.biaya_pengurang);
  const cif =
    transformedNilaiFob + Number(data.nilai_asuransi) + Number(data.freight);
  const kurs = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(Number(data.nilai_kurs));

  return {
    ...data,
    transformed_nilai_fob: transformedNilaiFob.toFixed(2),
    cif: cif.toFixed(2),
    cif_rp: new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(cif * Number(data.nilai_kurs)),
    nilai_kurs: kurs,
  };
};

export const useFetchDataRetribution = (
  queryObject: Record<string, string>
) => {
  return useFetchData<DataPungutan>(
    urlRetribution,
    queryObject,
    transformDataPungutan
  );
};
