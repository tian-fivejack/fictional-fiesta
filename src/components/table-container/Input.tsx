import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="text" {...props} />
    </div>
  );
};

export default Input;
