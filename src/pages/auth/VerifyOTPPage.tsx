import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import OTPVerification from '../../components/auth/OTPVerification';

export default function VerifyOTPPage() {
  return (
    <AuthLayout>
      <OTPVerification />
    </AuthLayout>
  );
}