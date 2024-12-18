import React, { useMemo } from 'react';
import Input, { InputProps } from './Input';
import styles from './DataRetribution.module.css';
import { DataPungutan } from '../../types/data';
import { FiRefreshCw } from 'react-icons/fi';

const separator = ['+', '-', '+', '='];

const DataRetribution: React.FC<{ data: DataPungutan }> = ({ data }) => {
  const inputProps: Array<Array<InputProps>> = useMemo(
    () => [
      [
        {
          label: 'Incoterms',
          value: data.ur_incoterm,
          disabled: false,
          name: 'ur_incoterm',
          required: true,
        },
        {
          label: 'Valuta',
          value: data.ur_valuta,
          disabled: false,
          name: 'ur_valuta',
          required: true,
        },
        {
          label: 'Kurs',
          value: data.nilai_kurs,
          disabled: true,
          name: 'nilai_kurs',
        },
      ],
      [
        {
          label: 'Nilai',
          value: data.nilai_incoterm,
          disabled: false,
          name: 'nilai_incoterm',
        },
        {
          label: 'Biaya Tambahan',
          value: data.biaya_tambahan,
          disabled: false,
          name: 'biaya_tambahan',
        },
        {
          label: 'Biaya Pengurang',
          value: data.biaya_pengurang,
          disabled: false,
          name: 'biaya_tambahan',
        },
        {
          label: 'Voluntary Declaration',
          value: 0,
          disabled: false,
          name: 'vd',
        },
        {
          label: 'Nilai FOB',
          value: data.transformed_nilai_fob,
          disabled: true,
          name: 'transformed_nilai_fob',
        },
      ],
      [
        {
          label: 'Asuransi Bayar Di',
          value: data.ur_asuransi,
          disabled: false,
          name: 'ur_asuransi',
        },
        {
          label: 'Asuransi',
          value: data.nilai_asuransi,
          disabled: false,
          name: 'nilai_asuransi',
        },
        {
          label: 'Freight',
          value: data.freight,
          disabled: false,
          name: 'freight',
        },
      ],
      [
        {
          label: 'CIF',
          value: data.cif,
          disabled: true,
          name: 'cif',
        },
        {
          label: 'CIF Rp',
          value: data.cif_rp,
          disabled: true,
          name: 'cif rp',
        },
        {
          label: 'Bruto',
          value: data.berat_kotor,
          disabled: true,
          name: 'berat_kotor',
        },
        {
          label: 'Netto',
          value: data.berat_bersih,
          disabled: true,
          name: 'berat_bersih',
        },
        {
          label: 'Flag Kontainer',
          value: data.ur_flag_curah,
          disabled: false,
          name: 'ur_flag_curah',
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
        <div className={i === 1 ? styles.rowSmallGap : styles.row} key={i}>
          {group.map((inputProp, j) => (
            <React.Fragment key={inputProp.name}>
              <Input
                label={inputProp.label}
                placeholder={inputProp.label}
                value={inputProp.value}
                disabled={inputProp.disabled}
                name={inputProp.name}
                withIcon={inputProp.withIcon}
                required={inputProp.required}
              />
              {i === 1 && j < group.length - 1 && (
                <span className={styles.separator}>{separator[j]}</span>
              )}
              {i === 0 && j === group.length - 1 && (
                <FiRefreshCw className={styles.buttonRefresh} />
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <button type="button" className={styles.buttonData}>
          Kelengkapan Data
        </button>
        <button type="submit" className={styles.buttonSubmit}>
          Simpan
        </button>
      </div>
    </form>
  );
};

export default DataRetribution;
