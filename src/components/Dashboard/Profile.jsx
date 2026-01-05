import React, { useState, useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaCamera,
  FaGraduationCap,
  FaBriefcase,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaGlobe
} from 'react-icons/fa';

const Profile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [profileData, setProfileData] = useState({
    displayName: user?.displayName || '',
    email: user?.email || '',
    photoURL: user?.photoURL || '',
    phone: '',
    location: '',
    bio: '',
    jobTitle: '',
    company: '',
    education: '',
    skills: [],
    socialLinks: {
      linkedin: '',
      github: '',
      twitter: '',
      website: ''
    },
    preferences: {
      emailNotifications: true,
      courseReminders: true,
      marketingEmails: false,
      publicProfile: true
    }
  });

  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setProfileData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() && !profileData.skills.includes(newSkill.trim())) {
      setProfileData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setProfileData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    
    try {
      // Update Firebase profile
      if (profileData.displayName !== user?.displayName || profileData.photoURL !== user?.photoURL) {
        await updateUser({
          displayName: profileData.displayName,
          photoURL: profileData.photoURL
        });
      }
      
      // Here you would typically save additional profile data to your backend
      // await saveProfileToBackend(profileData);
      
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error('Profile update error:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Reset to original user data
    setProfileData(prev => ({
      ...prev,
      displayName: user?.displayName || '',
      email: user?.email || '',
      photoURL: user?.photoURL || ''
    }));
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-gray-600 mt-1">Manage your account information and preferences</p>
        </div>
        
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="btn btn-primary"
          >
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="btn btn-secondary"
              disabled={isLoading}
            >
              <FaTimes className="mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="btn btn-success"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="loading-spinner mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <FaSave className="mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Profile Picture & Basic Info */}
        <div className="lg:col-span-1">
          <div className="card text-center">
            <div className="relative inline-block mb-6">
              <img
                src={profileData.photoURL || '/src/assets/icon.jpg'}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-gray-200"
              />
              {isEditing && (
                <button className="absolute bottom-0 right-0 bg-primary-blue text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                  <FaCamera />
                </button>
              )}
            </div>
            
            <h2 className="text-2xl font-bold mb-2">{profileData.displayName || 'User'}</h2>
            <p className="text-gray-600 mb-4">{profileData.email}</p>
            
            {profileData.jobTitle && (
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <FaBriefcase />
                <span>{profileData.jobTitle}</span>
                {profileData.company && <span>at {profileData.company}</span>}
              </div>
            )}
            
            {profileData.location && (
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-4">
                <FaMapMarkerAlt />
                <span>{profileData.location}</span>
              </div>
            )}
            
            <div className="text-sm text-gray-500">
              Member since {new Date(user?.metadata?.creationTime || Date.now()).toLocaleDateString()}
            </div>
          </div>

          {/* Skills */}
          <div className="card mt-6">
            <h3 className="text-lg font-bold mb-4">Skills</h3>
            
            {isEditing && (
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a skill"
                  className="input flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                />
                <button
                  onClick={handleAddSkill}
                  className="btn btn-primary btn-sm"
                >
                  Add
                </button>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {skill}
                  {isEditing && (
                    <button
                      onClick={() => handleRemoveSkill(skill)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaTimes className="text-xs" />
                    </button>
                  )}
                </span>
              ))}
              {profileData.skills.length === 0 && (
                <p className="text-gray-500 text-sm">No skills added yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Main Profile Form */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Personal Information */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="displayName"
                  value={profileData.displayName}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={profileData.email}
                  className="input"
                  disabled={true}
                />
                <p className="text-sm text-gray-500 mt-1">Email cannot be changed</p>
              </div>
              
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="City, Country"
                />
              </div>
              
              <div className="form-group md:col-span-2">
                <label className="form-label">Profile Picture URL</label>
                <input
                  type="url"
                  name="photoURL"
                  value={profileData.photoURL}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="https://example.com/photo.jpg"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Professional Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={profileData.jobTitle}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="Software Developer"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  name="company"
                  value={profileData.company}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="Tech Corp"
                />
              </div>
              
              <div className="form-group md:col-span-2">
                <label className="form-label">Education</label>
                <input
                  type="text"
                  name="education"
                  value={profileData.education}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="Bachelor's in Computer Science"
                />
              </div>
              
              <div className="form-group md:col-span-2">
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  className="textarea"
                  rows="4"
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                />
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Social Links</h3>
            
            <div className="space-y-4">
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <FaLinkedin className="text-blue-600" />
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="socialLinks.linkedin"
                  value={profileData.socialLinks.linkedin}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <FaGithub className="text-gray-800" />
                  GitHub
                </label>
                <input
                  type="url"
                  name="socialLinks.github"
                  value={profileData.socialLinks.github}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="https://github.com/username"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <FaTwitter className="text-blue-400" />
                  Twitter
                </label>
                <input
                  type="url"
                  name="socialLinks.twitter"
                  value={profileData.socialLinks.twitter}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="https://twitter.com/username"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label flex items-center gap-2">
                  <FaGlobe className="text-green-600" />
                  Website
                </label>
                <input
                  type="url"
                  name="socialLinks.website"
                  value={profileData.socialLinks.website}
                  onChange={handleInputChange}
                  className="input"
                  disabled={!isEditing}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="card">
            <h3 className="text-xl font-bold mb-6">Preferences</h3>
            
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="preferences.emailNotifications"
                  checked={profileData.preferences.emailNotifications}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-4 h-4 text-primary-blue"
                />
                <span>Email notifications for course updates</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="preferences.courseReminders"
                  checked={profileData.preferences.courseReminders}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-4 h-4 text-primary-blue"
                />
                <span>Course deadline reminders</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="preferences.marketingEmails"
                  checked={profileData.preferences.marketingEmails}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-4 h-4 text-primary-blue"
                />
                <span>Marketing emails and promotions</span>
              </label>
              
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="preferences.publicProfile"
                  checked={profileData.preferences.publicProfile}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-4 h-4 text-primary-blue"
                />
                <span>Make my profile public</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;