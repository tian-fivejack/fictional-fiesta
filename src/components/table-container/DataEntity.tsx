import React, { useMemo } from 'react';
import Input, { InputProps } from './Input';
import styles from './DataEntity.module.css';
import { DataEntitas } from '../../types/data';

const DataEntity: React.FC<{ data: DataEntitas }> = ({ data }) => {
  const inputProps: Array<Array<InputProps>> = useMemo(
    () => [
      [
        {
          label: 'Jenis Identitas',
          value: data.pengusaha.kd_identitas,
          disabled: true,
          name: 'kd_identitas',
          required: true,
        },
        {
          label: 'NIB',
          value: data.pengusaha.nib,
          disabled: true,
          name: 'nib',
          required: true,
        },
        {
          label: 'No Identitas',
          value: data.pengusaha.nomor_identitas,
          disabled: true,
          name: 'nomor_identitas',
          required: true,
          withIcon: 'search',
        },
      ],
      [
        {
          label: 'No Identitas (16 Digit)',
          value: data.pengusaha.no_identitas_16,
          disabled: true,
          name: 'no_identitas_16',
        },
        {
          label: 'Nama Perusahaan',
          value: data.pengusaha.nama_identitas,
          disabled: true,
          name: 'nama_identitas',
          required: true,
          flexScale: 2,
        },
      ],
      [
        {
          label: 'Provinsi',
          value: data.pengusaha.provinsi_identitas,
          disabled: true,
          name: 'provinsi_identitas',
          required: true,
          withIcon: 'chevron-down',
        },
        {
          label: 'Kota/Kabupaten',
          value: data.pengusaha.kota_identitas,
          disabled: true,
          name: 'kota_identitas',
          required: true,
        },
        {
          label: 'Kecamatan',
          value: data.pengusaha.kecamatan,
          disabled: true,
          name: 'kecamatan',
          required: true,
        },
        {
          label: 'Kode Pos',
          value: data.pengusaha.kode_pos,
          disabled: true,
          name: 'kode_pos',
          required: true,
        },
        {
          label: 'RT/RW',
          value: data.pengusaha.rt_rw,
          disabled: true,
          name: 'rt_rw',
          required: true,
        },
      ],
      [
        {
          label: 'Telephone',
          value: data.pengusaha.tlp_identitas,
          disabled: true,
          name: 'tlp_identitas',
          required: true,
        },
        {
          label: 'Email',
          value: data.pengusaha.email_identitas,
          disabled: true,
          name: 'email_identitas',
          required: true,
        },
        {
          label: 'Status',
          value: data.pengusaha.status,
          disabled: true,
          name: 'status',
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
              flexScale={inputProp.flexScale}
            />
          ))}
        </div>
      ))}
    </form>
  );
};

export default DataEntity;
