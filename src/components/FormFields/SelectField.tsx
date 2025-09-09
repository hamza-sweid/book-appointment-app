import React from 'react';
import styles from './FormElement.module.scss';
import InfoIcon from '../../public/assets/info.svg';
import DropdownIcon from '../../public/assets/SelectIcon.svg';

interface Option {
  value: string;
  label: string;
}

interface SelectionFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
}

const SelectionField: React.FC<SelectionFieldProps> = ({
  label,
  required = false,
  value,
  onChange,
  options,
  placeholder,
  hint,
  error,
  className = '',
}) => {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.inputWrapper}>
        <select
          value={value || ''}
          onChange={onChange}
          className={`${styles.select} ${error ? styles.inputError : ''}`}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <img src={DropdownIcon} alt="Select" className={styles.fieldIcon} />
      </div>

      {hint && (
        <div className={styles.hint}>
          <img src={InfoIcon} alt="Info" />
          <span>{hint}</span>
        </div>
      )}

      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default SelectionField;
