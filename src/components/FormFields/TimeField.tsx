import React, { useState, FocusEvent } from 'react';
import styles from './FormElement.module.scss';
import InfoIcon from '../../public/assets/info.svg';

interface TimeFieldProps {
  label: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: string;
  error?: string;
  placeholder?: string;
  className?: string;
}

const TimeField: React.FC<TimeFieldProps> = ({
  label,
  required = false,
  value = '',
  onChange,
  hint,
  error,
  placeholder = 'HH:MM',
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type="time"
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        onFocus={() => setIsFocused(true)}
        onBlur={(e: FocusEvent<HTMLInputElement>) => setIsFocused(false)}
        placeholder={isFocused ? '' : placeholder} // simulate placeholder
      />
      {hint && (
        <p className={styles.hint}>
          <img src={InfoIcon} alt="Info" className={styles.hintIcon} />
          {hint}
        </p>
      )}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TimeField;
