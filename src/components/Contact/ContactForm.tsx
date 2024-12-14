import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    companyName: '',
    email: '',
    phone: '',
    address: '',
    bestTime: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        {
          to_email: 'phanikondru@gmail.com',
          from_name: formData.firstName,
          company: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          best_time: formData.bestTime,
          message: formData.message
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        companyName: '',
        email: '',
        phone: '',
        address: '',
        bestTime: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <div className="mb-8">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio text-[#FF8C00]"
                name="requestType"
                checked
                readOnly
              />
              <span className="ml-2">Request our service for a project</span>
            </label>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Name of your company"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Best time to call
                </label>
                <input
                  type="text"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Best time to call"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                placeholder="Your message"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#FF8C00] text-white px-8 py-3 rounded-md hover:bg-[#e67e00] transition-colors ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;