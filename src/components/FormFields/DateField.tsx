import React from 'react';
import styles from './FormElement.module.scss';
import InfoIcon from '../../public/assets/info.svg';

interface DateFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  required = false,
  value,
  onChange,
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

      <input
        type="date"
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

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

export default DateField;
