import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CameraIcon, XIcon, PlusIcon, LogOutIcon } from 'lucide-react';
interface ProfilePageProps {
  email: string;
  name: string;
  onLogout: () => void;
}
const SUGGESTED_INTERESTS = [
'AI & Machine Learning',
'Web Development',
'Mobile Apps',
'Data Science',
'Cybersecurity',
'Cloud Computing',
'UI/UX Design',
'Robotics',
'Blockchain',
'Game Development',
'Networking',
'Embedded Systems'];

export function ProfilePage({ email, name, onLogout }: ProfilePageProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: name || 'John Doe',
    course: '',
    yearOfStudy: '',
    personalEmail: '',
    interests: [] as string[]
  });
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const toggleInterest = (interest: string) => {
    setProfileData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest) ?
      prev.interests.filter((i) => i !== interest) :
      [...prev.interests, interest]
    }));
  };
  const handleSave = () => {
    console.log('Profile saved:', profileData);
    setIsEditing(false);
  };
  const initials = profileData.name.
  split(' ').
  map((n) => n[0]).
  join('').
  toUpperCase().
  slice(0, 2);
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Header card */}
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 overflow-hidden">
        {/* Green banner */}
        <div className="h-28 bg-gradient-to-br from-green-600 to-green-700 relative">
          <button
            onClick={onLogout}
            className="absolute top-4 right-4 flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium transition-colors bg-white/10 hover:bg-white/20 rounded-lg px-3 py-1.5">
            
            <LogOutIcon className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Avatar */}
        <div className="relative px-8 -mt-14">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-2xl border-4 border-white shadow-md overflow-hidden bg-green-100 flex items-center justify-center">
              {avatarPreview ?
              <img
                src={avatarPreview}
                alt="Profile"
                className="w-full h-full object-cover" /> :


              <span className="text-2xl font-bold text-green-700">
                  {initials}
                </span>
              }
            </div>
            {isEditing &&
            <label className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-600 hover:bg-green-700 rounded-lg flex items-center justify-center cursor-pointer transition-colors shadow-sm">
                <CameraIcon className="w-4 h-4 text-white" />
                <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden" />
              
              </label>
            }
          </div>
        </div>

        {/* Profile info */}
        <div className="px-8 pt-4 pb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                {profileData.name}
              </h2>
              <p className="text-sm text-slate-500 mt-0.5">
                {email || 'student@students.jkuat.ac.ke'}
              </p>
            </div>
            {!isEditing &&
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm font-medium text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-4 py-1.5 rounded-lg transition-colors">
              
                Edit
              </button>
            }
          </div>

          {/* Fields */}
          <div className="space-y-5">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Full Name
              </label>
              {isEditing ?
              <input
                type="text"
                value={profileData.name}
                onChange={(e) =>
                setProfileData({
                  ...profileData,
                  name: e.target.value
                })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50 text-sm" /> :


              <p className="text-sm text-slate-700 py-2.5">
                  {profileData.name || '—'}
                </p>
              }
            </div>

            {/* Course */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Course / Program
              </label>
              {isEditing ?
              <input
                type="text"
                value={profileData.course}
                onChange={(e) =>
                setProfileData({
                  ...profileData,
                  course: e.target.value
                })
                }
                placeholder="e.g. BSc Computer Science"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50 text-sm" /> :


              <p className="text-sm text-slate-700 py-2.5">
                  {profileData.course || '—'}
                </p>
              }
            </div>

            {/* Year of Study */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Year of Study
              </label>
              {isEditing ?
              <select
                value={profileData.yearOfStudy}
                onChange={(e) =>
                setProfileData({
                  ...profileData,
                  yearOfStudy: e.target.value
                })
                }
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50 text-sm">
                
                  <option value="">Select year</option>
                  <option value="1">Year 1</option>
                  <option value="2">Year 2</option>
                  <option value="3">Year 3</option>
                  <option value="4">Year 4</option>
                  <option value="5">Year 5+</option>
                </select> :

              <p className="text-sm text-slate-700 py-2.5">
                  {profileData.yearOfStudy ?
                `Year ${profileData.yearOfStudy}` :
                '—'}
                </p>
              }
            </div>

            {/* Personal Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Personal Email
              </label>
              {isEditing ?
              <input
                type="email"
                value={profileData.personalEmail}
                onChange={(e) =>
                setProfileData({
                  ...profileData,
                  personalEmail: e.target.value
                })
                }
                placeholder="your.email@gmail.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all outline-none text-slate-700 bg-slate-50/50 text-sm" /> :


              <p className="text-sm text-slate-700 py-2.5">
                  {profileData.personalEmail || '—'}
                </p>
              }
            </div>

            {/* Interests */}
            <div className="space-y-2.5">
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Interests
              </label>
              {isEditing ?
              <div className="flex flex-wrap gap-2">
                  {SUGGESTED_INTERESTS.map((interest) => {
                  const isSelected = profileData.interests.includes(interest);
                  return (
                    <motion.button
                      key={interest}
                      type="button"
                      onClick={() => toggleInterest(interest)}
                      whileTap={{
                        scale: 0.95
                      }}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${isSelected ? 'bg-green-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                      
                        {isSelected ?
                      <XIcon className="w-3 h-3" /> :

                      <PlusIcon className="w-3 h-3" />
                      }
                        {interest}
                      </motion.button>);

                })}
                </div> :

              <div className="flex flex-wrap gap-2">
                  {profileData.interests.length > 0 ?
                profileData.interests.map((interest) =>
                <span
                  key={interest}
                  className="inline-block px-3 py-1.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                  
                        {interest}
                      </span>
                ) :

                <p className="text-sm text-slate-400 py-1">
                      No interests added yet
                    </p>
                }
                </div>
              }
            </div>
          </div>

          {/* Action buttons */}
          {isEditing &&
          <div className="flex gap-3 mt-8">
              <button
              onClick={handleSave}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm shadow-green-600/20 text-sm">
              
                Save Changes
              </button>
              <button
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 font-medium py-2.5 rounded-lg transition-colors text-sm">
              
                Cancel
              </button>
            </div>
          }
        </div>
      </div>
    </div>);

}