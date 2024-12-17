import { useState } from 'react';
import styles from './TableContainer.module.css';
import DataMain from './DataMain';

const tabTitles = {
  dataUtama: 'Data Utama',
  dataEntitas: 'Data Entitas',
  dataPungutan: 'Data Pungutan',
} as const;
type TabTitle = (typeof tabTitles)[keyof typeof tabTitles];

function TableContainer() {
  const [activeTab, setActiveTab] = useState<TabTitle>(tabTitles.dataUtama);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === tabTitles.dataUtama ? styles.active : ''}`}
          onClick={() => setActiveTab(tabTitles.dataUtama)}
        >
          Data Utama
        </button>
        <button
          className={`${styles.tab} ${activeTab === tabTitles.dataEntitas ? styles.active : ''}`}
          onClick={() => setActiveTab(tabTitles.dataEntitas)}
        >
          Data Entitas
        </button>
        <button
          className={`${styles.tab} ${activeTab === tabTitles.dataPungutan ? styles.active : ''}`}
          onClick={() => setActiveTab(tabTitles.dataPungutan)}
        >
          Data Pungutan
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === tabTitles.dataUtama && <DataMain />}
        {activeTab === tabTitles.dataEntitas && (
          <div>{/* Data Entitas content will go here */}</div>
        )}
        {activeTab === tabTitles.dataPungutan && (
          <div>{/* Data Pungutan content will go here */}</div>
        )}
      </div>
    </div>
  );
}

export default TableContainer;
