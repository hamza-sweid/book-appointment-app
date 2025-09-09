import React, { useState } from 'react';
import styles from './BookAppointment.module.scss';
import MyCase from './components/MyCase';
import AppointmentIcon from '../../public/assets/appointment.svg';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

const BookAppointment: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'myCase' | 'general'>('myCase');
  const [formData, setFormData] = useState({
    caseId: '',
    discipline: '',
    engineer: '',
    date: '',
    time: '',
    requestClarification: '',
    comments: '',
    email: '',
    mobile: '',
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      caseId: '',
      discipline: '',
      engineer: '',
      date: '',
      time: '',
      requestClarification: '',
      comments: '',
      email: '',
      mobile: '',
    });
  };

  return (
    <div className="mainPage">
      <Breadcrumb
        items={[
          { label: 'Government Entities', href: '#' },
          { label: 'Rak Municipality', href: '#' },
          { label: 'Appointments', href: '#' },
          { label: 'Book an Appointment' },
        ]}
      />
      <div className="flex">
        <img src={AppointmentIcon} alt="Appointment Icon" />
        <h3 className="pl-2">Book an Appointment</h3>
      </div>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === 'myCase' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('myCase')}
        >
          My Case
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === 'general' ? styles.active : ''
          }`}
          onClick={() => setActiveTab('general')}
        >
          General Enquiries
        </button>
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'myCase' && (
          <MyCase
            formData={formData}
            onChange={handleChange}
            onReset={resetForm}
          />
        )}
        {activeTab === 'general' && <p>General Enquiries Form will go here</p>}
      </div>
    </div>
  );
};

export default BookAppointment;
