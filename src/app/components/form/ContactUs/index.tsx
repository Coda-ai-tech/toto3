'use client';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Input, Textarea, Select, SelectItem } from '@heroui/react';
import {
  ButtonVariation,
  ButtonColor,
  ButtonAction,
  ButtonShape,
} from '@/types';
import { useActionState } from 'react';
import { ContactUsAction } from '@/actions/contactUs';
import styles from './ContactUsForm.module.scss';

const Button = dynamic(() => import('@@/Button'), { ssr: false });

const inquiryType = [
  { key: 'general', label: 'General Inquiry' },
  { key: 'repair-service', label: 'Repair & Service' },
  { key: 'commercial-projects', label: 'Commercial Projects' },
  { key: 'others', label: 'Others' },
];

const ContactUsForm = ({ placement }: { placement: 'home' | 'contactUs' }) => {
  const [error, setError] = useState('');
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('');

  // Initialize action state for the contact form
  const [state, formAction] = useActionState(ContactUsAction, {});

  const submitCta = {
    label: 'SUBMIT',
    variant: ButtonVariation.contain,
    color: ButtonColor.primary,
    shape: ButtonShape.horizontal,
    icon: null,
    link: {
      type: ButtonAction.submit,
      href: null,
    },
  };

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError('File size exceeds 5MB. Please select a smaller file.');
      } else {
        setError('');
      }
    } else {
      setError('');
    }
  };

  return (
    <form className={`${styles.contactUsForm} ${styles[placement]}`} action={formAction}>
      <legend>Contact TOTO</legend>
      <fieldset>
        <div className={`${styles.formFields}`}>
          <div className={`${styles.formRow}`}>
            <Input
              label={
                <span>
                  <span className="text-red-500">* </span>
                  Name
                </span>
              }
              name="username"
              required
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabel }}
            />
            <Input
              label={<span>Contact Number</span>}
              type="text"
              name="number"
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabel }}
            />
          </div>
          <div className={`${styles.formRow}`}>
            <Input
              label={
                <span>
                  <span className="text-red-500">* </span>
                  Email
                </span>
              }
              type="email"
              required
              name="email"
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabel }}
            />
            <Select
              label={<span>What Can We Help You With?</span>}
              classNames={{
                trigger: styles.selectTrigger,
                label: styles.selectLabel,
              }}
              name="inquiry"
              onChange={(e) => setSelectedInquiryType(e.target.value)}
            >
              <SelectItem key="">Select an option</SelectItem>
              {inquiryType.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className={`${styles.formRow}`}>
            <Textarea
              label={
                <span>
                  <span className="text-red-500">* </span>
                  Message
                </span>
              }
              required
              name="message"
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabel }}
            />
          </div>
          <div className={`${styles.formRow} mt-6`}>
            <Input
              label="Please provide photos or copy of receipts (if applicable) for our reference."
              labelPlacement="outside"
              type="file"
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabelOutside }}
              accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
              name="file"
              onChange={handleFileChange}
              isInvalid={error.length > 0}
              errorMessage={error || undefined}
            />
          </div>

          {/* Display all errors */}
          {state.errors && (
            <div className="text-sm text-red-500">
              {Object.entries(state.errors).map(([key, errors]) =>
                Array.isArray(errors) ? (
                  errors.map((error, idx) => <p key={`${key}-${idx}`}>{error}</p>)
                ) : (
                  <p key={key}>{errors}</p> // Handle single string (e.g., server error)
                )
              )}
            </div>
          )}
          {/* Display success message */}
          {state.success && <p className="text-sm text-green-500">{state.success}</p>}

          <div className={`${styles.formRow} ${styles.formAction}`}>
            <Button content={submitCta} />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactUsForm;