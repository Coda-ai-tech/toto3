'use client';
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
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
import Swal from 'sweetalert2';

const Button = dynamic(() => import('@@/Button'), { ssr: false });

const inquiryType = [
  { key: 'general', label: 'General Inquiry' },
  { key: 'repair-service', label: 'Repair & Service' },
  { key: 'commercial-projects', label: 'Commercial Projects' },
  { key: 'others', label: 'Others' },
];

// Temporary IconList type; replace with actual type from your project
type IconList = any;

interface ButtonElement<T> {
  label: string;
  variant: ButtonVariation;
  color: ButtonColor;
  shape: ButtonShape;
  icon: T;
  link: {
    type: ButtonAction;
    href: string | null;
  };
}

const ContactUsForm = ({ placement }: { placement: 'home' | 'contactUs' }) => {
  const [error, setError] = useState('');
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>('');

  // Initialize action state for the contact form
  const [state, formAction] = useActionState(ContactUsAction, {});

  const submitCta: ButtonElement<IconList> = {
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

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB per file
  const MAX_TOTAL_SIZE = 10 * 1024 * 1024; // 10MB total
  const MAX_FILES = 5; // Max 5 files

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles.length > 0) {
      if (selectedFiles.length > MAX_FILES) {
        setError(`Maximum ${MAX_FILES} files allowed.`);
        return;
      }

      const totalSize = Array.from(selectedFiles).reduce((sum, file) => sum + file.size, 0);
      if (totalSize > MAX_TOTAL_SIZE) {
        setError('Total file size exceeds 10MB.');
        return;
      }

      for (const file of Array.from(selectedFiles)) {
        if (file.size > MAX_FILE_SIZE) {
          setError(`File "${file.name}" exceeds 5MB.`);
          return;
        }
      }
      setError('');
    } else {
      setError('');
    }
  };

  // Handle form submission with processing spinner popup and timeout
  const handleSubmit = async (formData: FormData) => {
    // Show processing spinner popup
    Swal.fire({
      title: 'Processing...',
      html: '<div></div>',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Set a timeout for the form action
      const result = await Promise.race([
        formAction(formData),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error('Form submission timed out after 40 seconds')), 40000)
        ),
      ]);
      return result;
    } catch (err) {
      console.error('Form submission error:', err);
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: err.message || 'An unexpected error occurred. Please try again.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  // Show SweetAlert2 popup for success or error
  useEffect(() => {
    if (state.errors || state.success) {
      Swal.close(); // Close spinner popup
    }

    if (state.errors) {
      const errorMessages = Object.entries(state.errors)
        .flatMap(([_, errors]) => (Array.isArray(errors) ? errors : [errors]))
        .join('\n');
      Swal.fire({
        icon: 'error',
        title: 'Form Submission Error',
        text: errorMessages,
        confirmButtonColor: '#3085d6',
      });
    } else if (state.success) {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: state.success,
        confirmButtonColor: '#000',
      });
    }
  }, [state]);

  return (
    <form className={`${styles.contactUsForm} ${styles[placement]}`} action={handleSubmit}>
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
              <>
                <SelectItem key="">Select an option</SelectItem>
                {inquiryType.map((item) => (
                  <SelectItem key={item.key} value={item.key}>{item.label}</SelectItem>
                ))}
              </>
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
              label="Please provide photos or copy of receipts (if applicable) for our reference. Maximum 5 photos are allowed and less than 10MB in total."
              labelPlacement="outside"
              type="file"
              className={`${styles.formField}`}
              classNames={{ label: styles.fieldLabelOutside }}
              accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
              name="file"
              multiple
              onChange={handleFileChange}
              isInvalid={error.length > 0}
              errorMessage={error || undefined}
            />
          </div>

          <div className={`${styles.formRow} ${styles.formAction}`}>
            <Button content={submitCta} />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default ContactUsForm;