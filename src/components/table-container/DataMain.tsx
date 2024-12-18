import React, { useMemo } from 'react';
import Input, { InputProps } from './Input';
import styles from './DataMain.module.css';
import { DataUtama } from '../../types/data';
import jenisImpor from '../../helper/jenis-impor';
import caraPembayaran from '../../helper/cara-pembayaran';
import transaksi from '../../helper/transaksi';

const DataMain: React.FC<{ data: DataUtama }> = ({ data }) => {
  const inputProps: Array<Array<InputProps>> = useMemo(
    () => [
      [
        {
          label: 'Nomor Pengajuan',
          value: data.nomor_pengajuan,
          disabled: true,
          name: 'nomor_pengajuan',
        },
        {
          label: 'Tanggal Pengajuan',
          value: data.tanggal_pengajuan,
          disabled: true,
          name: 'tanggal_pengajuan',
        },
        {
          label: 'Nomor Pendaftaran',
          value: data.nomor_pendaftaran,
          disabled: true,
          name: 'nomor_pendaftaran',
        },
        {
          label: 'Tanggal Pendaftaran',
          value: data.tanggal_pendaftaran,
          disabled: true,
          name: 'tanggal_pendaftaran',
        },
      ],
      [
        {
          label: 'Kantor Pabean',
          value: data.ur_pabean_asal,
          disabled: true,
          name: 'ur_pabean_asal',
          required: true,
          withIcon: 'chevron-down',
        },
        {
          label: 'SKEP Fasilitas',
          value: data.kd_skep_fasilitas,
          disabled: true,
          name: 'kd_skep_fasilitas',
          withIcon: 'chevron-down',
        },
        {
          label: 'Jenis PIB',
          value: data.jenis_pib,
          disabled: true,
          name: 'jenis_pib',
          required: true,
          withIcon: 'chevron-down',
        },
      ],
      [
        {
          label: 'Jenis Impor',
          value: jenisImpor(data.kd_jenis_impor),
          disabled: true,
          name: 'kd_jenis_impor',
          required: true,
          withIcon: 'chevron-down',
        },
        {
          label: 'Cara Pembayaran',
          value: caraPembayaran(data.kd_cara_bayar),
          disabled: true,
          name: 'kd_cara_bayar',
          required: true,
          withIcon: 'chevron-down',
        },
        {
          label: 'Transaksi',
          value: transaksi(data.kd_transaksi),
          disabled: true,
          name: 'kd_transaksi',
          required: true,
          withIcon: 'chevron-down',
        },
      ],
    ],
    [data]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {inputProps.map((group, i) => (
        <div className={styles.row} key={i}>
          {group.map((inputProp) => (
            <Input
              key={inputProp.name}
              label={inputProp.label}
              placeholder={inputProp.label}
              value={inputProp.value}
              disabled={inputProp.disabled}
              name={inputProp.name}
              withIcon={inputProp.withIcon}
              required={inputProp.required}
            />
          ))}
        </div>
      ))}
    </form>
  );
};

export default DataMain;
