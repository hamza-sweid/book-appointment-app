import React, { useEffect, useState } from 'react';
import Select from '../../../components/FormFields/SelectField';
import DateField from '../../../components/FormFields/DateField';
import TimeField from '../../../components/FormFields/TimeField';
import TextAreaField from '../../../components/FormFields/TextAreaField';
import InputField from '../../../components/FormFields/InputField';
import Button from '../../../components/Button/Button';
import RightArrow from '../../../public/assets/right-arrow.svg';

interface MyCaseProps {
  formData: any;
  onChange: (field: string, value: any) => void;
  onReset: () => void;
}

const MyCase: React.FC<MyCaseProps> = ({ formData, onChange, onReset }) => {
  const [caseIdOptions, setCaseIdOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [disciplineOptions, setDisciplineOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [engineerOptions, setEngineerOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [requestOptions, setRequestOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const fetchCaseIds = async () => {
    // Simulate API call
    return new Promise<{ value: string; label: string }[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            { value: '123', label: '123' },
            { value: '456', label: '456' },
          ]),
        800
      )
    );
  };

  const fetchDisciplines = async () => {
    // Simulate API call
    return new Promise<{ value: string; label: string }[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            { value: 'civil', label: 'Civil' },
            { value: 'electrical', label: 'Electrical' },
          ]),
        800
      )
    );
  };

  const fetchEngineers = async () => {
    // Simulate API call
    return new Promise<{ value: string; label: string }[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            { value: 'eng1', label: 'Engineer 1' },
            { value: 'eng2', label: 'Engineer 2' },
          ]),
        800
      )
    );
  };

  const fetchRequests = async () => {
    // Simulate API call
    return new Promise<{ value: string; label: string }[]>((resolve) =>
      setTimeout(
        () =>
          resolve([
            { value: 'missing-doc', label: 'Missing Documentation' },
            { value: 'site-visit', label: 'Site Visit Required' },
            { value: 'payment', label: 'Payment Clarification' },
          ]),
        800
      )
    );
  };

  // Simulated API calls
  useEffect(() => {
    const loadData = async () => {
      const [cases, disciplines, engineers, requests] = await Promise.all([
        fetchCaseIds(),
        fetchDisciplines(),
        fetchEngineers(),
        fetchRequests(),
      ]);
      setCaseIdOptions(cases);
      setDisciplineOptions(disciplines);
      setEngineerOptions(engineers);
      setRequestOptions(requests);
    };
    loadData();
  }, []);

  const handleSubmit = () => {
    const newErrors: { [key: string]: string } = {};

    // Required fields
    if (!formData.caseId) newErrors.caseId = 'This field is required';
    if (!formData.discipline) newErrors.discipline = 'This field is required';
    if (!formData.engineer) newErrors.engineer = 'This field is required';
    if (!formData.date) newErrors.date = 'This field is required';
    if (!formData.time) newErrors.time = 'This field is required';
    if (!formData.email) newErrors.email = 'This field is required';
    if (!formData.mobile) newErrors.mobile = 'This field is required';
    if (!formData.requestClarification)
      newErrors.requestClarification = 'This field is required';

    // Email validation
    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        newErrors.email = 'Please enter a valid email address';
    }

    // Mobile validation
    if (formData.mobile) {
      const mobileRegex = /^[0-9]+$/;
      if (!mobileRegex.test(formData.mobile))
        newErrors.mobile = 'Please enter a valid mobile number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Form Data:\n' + JSON.stringify(formData, null, 2));

      if (onReset) onReset();

      setErrors({});
    }
  };

  return (
    <div>
      {/* Section 1 */}
      <div className="formGrid">
        <Select
          label="Case ID"
          required
          options={caseIdOptions}
          placeholder="Select Case ID"
          value={formData.caseId}
          onChange={(e) => onChange('caseId', e.target.value)}
          hint="Only rejected/pending Customer action cases will be displayed"
          className={errors.caseId ? 'inputError' : ''}
          error={errors.caseId ? 'This field is required' : undefined}
        />

        <Select
          label="Discipline"
          required
          options={disciplineOptions}
          placeholder="Select Discipline"
          value={formData.discipline}
          onChange={(e) => onChange('discipline', e.target.value)}
          className={errors.discipline ? 'inputError' : ''}
          error={errors.discipline ? 'This field is required' : undefined}
        />

        <Select
          label="Engineer"
          required
          options={engineerOptions}
          placeholder="Select Engineer"
          value={formData.engineer}
          onChange={(e) => onChange('engineer', e.target.value)}
          hint="Please select the designated engineer handling your application"
          className={errors.engineer ? 'inputError' : ''}
          error={errors.engineer ? 'This field is required' : undefined}
        />

        <DateField
          label="Pick a Date"
          required
          placeholder="Select Date"
          value={formData.date}
          onChange={(e) => onChange('date', e.target.value)}
          className={errors.date ? 'inputError' : ''}
          error={errors.date ? 'This field is required' : undefined}
        />

        <TimeField
          label="Time Slot"
          required
          placeholder="Select Time"
          value={formData.time}
          onChange={(e) => onChange('time', e.target.value)}
          className={errors.time ? 'inputError' : ''}
          error={errors.time ? 'This field is required' : undefined}
        />
      </div>

      <hr />

      {/* Section 2 */}
      <h3 className="mb-2">Case Details</h3>
      <div className="formGrid">
        <div className="col-span-2">
          <Select
            label="Request Clarification"
            required
            options={requestOptions}
            placeholder="Select Clarification"
            value={formData.requestClarification}
            onChange={(e) => onChange('requestClarification', e.target.value)}
            className={errors.requestClarification ? 'inputError' : ''}
            error={
              errors.requestClarification ? 'This field is required' : undefined
            }
          />
        </div>

        <div className="col-span-2">
          <TextAreaField
            label="Comments"
            placeholder="Leave your comments or questions here"
            value={formData.comments}
            onChange={(e) => onChange('comments', e.target.value)}
          />
        </div>
      </div>

      <hr />

      {/* Section 3 */}
      <div>
        <h3 className="sectionTitle">Contact Details</h3>
        <p className="sectionSubtitle">
          Meeting link and update will be sent to the below.
        </p>
        <div className="formGrid">
          <InputField
            label="Email"
            required
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e: any) => onChange('email', e.target.value)}
            className={errors.email ? 'inputError' : ''}
            error={errors.email}
          />

          <InputField
            label="Mobile"
            required
            type="number"
            placeholder="Enter your mobile number"
            value={formData.mobile}
            onChange={(e: any) => onChange('mobile', e.target.value)}
            className={errors.mobile ? 'inputError' : ''}
            error={errors.mobile ? 'This field is required' : undefined}
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="col-span-1 sm:col-span-2 text-right sm:text-left p-2">
        <Button
          variant="primary"
          className="btn-responsive"
          onClick={handleSubmit}
        >
          Confirm Appointment
          <img className="pl-2" src={RightArrow} alt="Right Arrow" />
        </Button>
      </div>
    </div>
  );
};

export default MyCase;
