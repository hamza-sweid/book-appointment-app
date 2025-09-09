import React from 'react';
import styles from './FormElement.module.scss';
import InfoIcon from '../../public/assets/info.svg';

interface InputFieldProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  type?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  required = false,
  placeholder,
  value,
  onChange,
  error,
  hint,
  type = 'text',
  className = '',
}) => {
  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>

      <input
        type={type}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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

export default InputField;
