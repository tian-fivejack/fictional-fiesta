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
          disabled: false,
          name: 'kd_identitas',
          required: true,
        },
        {
          label: 'NIB',
          value: data.pengusaha.nib,
          disabled: false,
          name: 'nib',
          required: true,
        },
        {
          label: 'No Identitas',
          value: data.pengusaha.nomor_identitas,
          disabled: false,
          name: 'nomor_identitas',
          required: true,
          withIcon: 'search',
        },
      ],
      [
        {
          label: 'No Identitas (16 Digit)',
          value: data.pengusaha.no_identitas_16,
          disabled: false,
          name: 'no_identitas_16',
        },
        {
          label: 'Nama Perusahaan',
          value: data.pengusaha.nama_identitas,
          disabled: false,
          name: 'nama_identitas',
          required: true,
        },
      ],
      [
        {
          label: 'Provinsi',
          value: data.pengusaha.provinsi_identitas,
          disabled: false,
          name: 'provinsi_identitas',
          required: true,
          withIcon: 'chevron-down',
        },
        {
          label: 'Kota/Kabupaten',
          value: data.pengusaha.kota_identitas,
          disabled: false,
          name: 'kota_identitas',
          required: true,
        },
        {
          label: 'Kecamatan',
          value: data.pengusaha.kecamatan,
          disabled: false,
          name: 'kecamatan',
          required: true,
        },
        {
          label: 'Kode Pos',
          value: data.pengusaha.kode_pos,
          disabled: false,
          name: 'kode_pos',
          required: true,
        },
        {
          label: 'RT/RW',
          value: data.pengusaha.rt_rw,
          disabled: false,
          name: 'rt_rw',
          required: true,
        },
      ],
      [
        {
          label: 'Telephone',
          value: data.pengusaha.tlp_identitas,
          disabled: false,
          name: 'tlp_identitas',
          required: true,
        },
        {
          label: 'Email',
          value: data.pengusaha.email_identitas,
          disabled: false,
          name: 'email_identitas',
          required: true,
        },
        {
          label: 'Status',
          value: data.pengusaha.status,
          disabled: false,
          name: 'status',
          required: true,
          withIcon: 'chevron-down',
        },
      ],
    ],
    [data]
  );

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

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

      {/* <button type="submit">Submit</button> */}
    </form>
  );
};

export default DataEntity;
