import { useState } from 'react';
import styles from './TableContainer.module.css';
import DataMain from './DataMain';
import {
  useFetchDataEntity,
  useFetchDataMain,
  useFetchDataRetribution,
} from '../../hooks/initData';
import DataEntity from './DataEntity';
import DataRetribution from './DataRetribution';

const tabTitles = ['Data Utama', 'Data Entitas', 'Data Pungutan'];

const TableContainer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data: dataUtama } = useFetchDataMain({
    nomor_pengajuan: '20120B388FAE20240402000001',
  });
  const { data: dataEntitas } = useFetchDataEntity({
    id_aju: '04eb6a72-bb63-5aed-5e92-f58a3bfd5da2',
  });
  const { data: dataPungutan } = useFetchDataRetribution({
    id_aju: '04eb6a72-bb63-5aed-5e92-f58a3bfd5da2',
  });

  const onPrev = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };
  const onNext = () => {
    if (activeTab < tabTitles.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {tabTitles.map((tab, index) => (
          <button
            key={tab}
            className={`${styles.tab} ${index === activeTab ? styles.active : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={styles.tabContent}>
        {activeTab === 0 && !!dataUtama && <DataMain data={dataUtama} />}
        {activeTab === 1 && !!dataEntitas && <DataEntity data={dataEntitas} />}
        {activeTab === 2 && !!dataPungutan && (
          <DataRetribution data={dataPungutan} />
        )}
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={activeTab === 0 ? styles.buttonDisabled : styles.button}
            disabled={activeTab === 0}
            onClick={onPrev}
          >
            Sebelumnya
          </button>
          <button
            type="button"
            className={
              activeTab === tabTitles.length - 1
                ? styles.buttonDisabled
                : styles.button
            }
            disabled={activeTab === tabTitles.length - 1}
            onClick={onNext}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
