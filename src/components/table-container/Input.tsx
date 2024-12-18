import React from 'react';
import styles from './Input.module.css';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

export interface InputProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number;
  disabled: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  withIcon?: 'chevron-down' | 'search';
}

const Input: React.FC<InputProps> = ({
  label,
  withIcon,
  required,
  ...props
}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>
        {label}
        {required && <span className={styles.superscript}>*</span>}
      </label>
      <div className={styles.inputFlex}>
        <input className={styles.input} type="text" {...props} />
        {withIcon === 'search' && <FaSearch className={styles.inputIcon} />}
        {withIcon === 'chevron-down' && (
          <FaChevronDown className={styles.inputIcon} />
        )}
      </div>
    </div>
  );
};

export default Input;
