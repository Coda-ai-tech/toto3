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
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

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
        setFile(null);
      } else {
        setError('');
        setFile(selectedFile);
      }
    }
  };

  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('');

  const [state, formAction] = useActionState(ContactUsAction, {
    inquiry: selectedInquiryType,
  });

  return (
    <form
      className={`${styles.contactUsForm} ${styles[placement]}`}
      action={formAction}>
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
              label={
                <span>
                  <span className="text-red-500">* </span>
                  Contact Number
                </span>
              }
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
              label={
                <span>
                  <span className="text-red-500">* </span>
                  What Can We Help You With?
                </span>
              }
              classNames={{
                trigger: styles.selectTrigger,
                label: styles.selectLabel,
              }}
              name="inquiry"
              onChange={(e) => setSelectedInquiryType(e.target.value)}>
              {inquiryType.map((item) => (
                <SelectItem key={item.key}>{item.label}</SelectItem>
              ))}
            </Select>
          </div>
          <div className={`${styles.formRow}`}>
            <Textarea
              label="Message"
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
              onChange={(e) => handleFileChange(e)}
              isInvalid={error.length > 0 ? true : false}
              errorMessage={error ? error : undefined}
            />
          </div>

          {state.errors?.message && (
            <p className="text-sm text-red-500">{state.errors.message}</p>
          )}
          <div className={`${styles.formRow} ${styles.formAction}`}>
            <Button content={submitCta} />
            <span className="hidden">{file}</span>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactUsForm;
