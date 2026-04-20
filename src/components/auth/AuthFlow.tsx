import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from '../../components/auth/LoginForm';
import { SignUpEmail } from './SignUpEmail';
import { OTPVerification } from './OTPVerification';
import { CreateProfile } from './CreateProfile';
import { ProfilePage } from '../../pages/profile/ProfilePage';
type Step =
'login' |
'signup-email' |
'otp' |
'create-profile' |
'forgot-password' |
'success' |
'profile';
export function AuthFlow() {
  const [currentStep, setCurrentStep] = useState<Step>('login');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const handleLogin = () => {
    setUserName('Student');
    setEmail('student@students.jkuat.ac.ke');
    setCurrentStep('profile');
  };
  const handleSignUpEmailNext = (studentEmail: string) => {
    setEmail(studentEmail);
    setCurrentStep('otp');
  };
  const handleOTPVerify = () => {
    setCurrentStep('create-profile');
  };
  const handleProfileFinish = (name?: string) => {
    if (name) setUserName(name);
    setCurrentStep('success');
    setTimeout(() => {
      setCurrentStep('profile');
    }, 2000);
  };
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95
    }
  };
  return (
    <div className="w-full px-4 py-8">
      <AnimatePresence mode="wait">
        {currentStep === 'login' &&
        <motion.div
          key="login"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}>
          
            <LoginForm onNavigate={setCurrentStep} onLogin={handleLogin} />
          </motion.div>
        }

        {currentStep === 'signup-email' &&
        <motion.div
          key="signup-email"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}>
          
            <SignUpEmail
            onNext={handleSignUpEmailNext}
            onBack={() => setCurrentStep('login')} />
          
          </motion.div>
        }

        {currentStep === 'otp' &&
        <motion.div
          key="otp"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}>
          
            <OTPVerification
            email={email}
            onVerify={handleOTPVerify}
            onBack={() => setCurrentStep('signup-email')} />
          
          </motion.div>
        }

        {currentStep === 'create-profile' &&
        <motion.div
          key="create-profile"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}>
          
            <CreateProfile
            onFinish={handleProfileFinish}
            onBack={() => setCurrentStep('otp')} />
          
          </motion.div>
        }

        {currentStep === 'success' &&
        <motion.div
          key="success"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
          
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7" />
              
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-green-700 mb-2">
              Account Created!
            </h2>
            <p className="text-slate-500">Setting up your profile...</p>
          </motion.div>
        }

        {currentStep === 'profile' &&
        <motion.div
          key="profile"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}>
          
            <ProfilePage
            email={email}
            name={userName}
            onLogout={() => {
              setCurrentStep('login');
              setEmail('');
              setUserName('');
            }} />
          
          </motion.div>
        }

        {currentStep === 'forgot-password' &&
        <motion.div
          key="forgot-password"
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center">
          
            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              Reset Password
            </h2>
            <p className="text-slate-500 mb-6">
              Password reset flow would go here.
            </p>
            <button
            onClick={() => setCurrentStep('login')}
            className="text-green-600 hover:text-green-700 font-medium">
            
              Back to Login
            </button>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}