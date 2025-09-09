import React from 'react';
import styles from './FormElement.module.scss';
import InfoIcon from '../../public/assets/info.svg';

interface TextAreaFieldProps {
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  className?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  required,
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
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <textarea
        className={`${styles.textarea} ${error ? styles.inputError : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {hint && (
        <div className={styles.hint}>
          <img src={InfoIcon} alt="Info" className={styles.hintIcon} />
          {hint}
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default TextAreaField;
