import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.currentTarget);
    const file = fileInputRef.current?.files?.[0];

    try {
      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        {
          to_email: 'phanikondru@gmail.com',
          first_name: formData.get('firstName'),
          last_name: formData.get('lastName'),
          mobile: formData.get('mobile'),
          resume: file ? file.name : 'No resume attached',
          message: formData.get('message')
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      e.currentTarget.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Launch Your Career</h2>
          <p className="text-center mb-12 text-gray-600">Start your journey toward exciting job opportunities.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobile"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume Upload
              </label>
              <input
                type="file"
                name="resume"
                ref={fileInputRef}
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about yourself
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#FF8C00] text-white px-8 py-3 rounded-md hover:bg-[#e67e00] transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Your Application'}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600 text-center">Application submitted successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600 text-center">Failed to submit application. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerForm;