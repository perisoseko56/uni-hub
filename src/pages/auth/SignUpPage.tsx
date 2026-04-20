import React from 'react';
import AuthLayout from '../../components/layout/AuthLayout';
import SignUpEmail from '../../components/auth/SignUpEmail';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <SignUpEmail />
    </AuthLayout>
  );
}