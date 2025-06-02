"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface FormData {
  // Personal Details
  applicantName: string;
  dateOfBirth: string;
  panNumber: string;
  fatherName: string;
  motherName: string;
  phoneNumber: string;
  email: string;
  spouseName: string;
  applicationDate: string;
  applicationTime: string;

  // Residence Details
  currentAddress: string;
  residenceType: 'own' | 'parent' | 'rented' | 'company';
  permanentAddress: string;

  // Employment Details
  employmentType: 'salaried' | 'self-employed';
  companyName: string;
  companyAddress: string;
  officePhone: string;
  designation: string;
  timeInCurrentJob: string;

  // Loan Details
  loanType: 'HL' | 'LAP' | 'car' | 'BL' | 'PL';
  vehicleDetails?: string;
  invoicePrice?: number;
  loanAmount: number;
  tenure: number;

  // References
  reference1Name: string;
  reference1Address: string;
  reference1Phone: string;
  reference2Name: string;
  reference2Address: string;
  reference2Phone: string;

  // Previous Loan Details
  previousBank?: string;
  previousLoanType?: string;
  previousLoanAmount?: number;
  previousLoanStartDate?: string;

  // Declaration
  signature: string;
}

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    applicantName: '',
    dateOfBirth: '',
    panNumber: '',
    fatherName: '',
    motherName: '',
    phoneNumber: '',
    email: '',
    spouseName: '',
    applicationDate: format(new Date(), 'yyyy-MM-dd'),
    applicationTime: format(new Date(), 'HH:mm'),
    currentAddress: '',
    residenceType: 'own',
    permanentAddress: '',
    employmentType: 'salaried',
    companyName: '',
    companyAddress: '',
    officePhone: '',
    designation: '',
    timeInCurrentJob: '',
    loanType: 'PL',
    vehicleDetails: '',
    invoicePrice: 0,
    loanAmount: 0,
    tenure: 12,
    reference1Name: '',
    reference1Address: '',
    reference1Phone: '',
    reference2Name: '',
    reference2Address: '',
    reference2Phone: '',
    previousBank: '',
    previousLoanType: '',
    previousLoanAmount: 0,
    previousLoanStartDate: '',
    signature: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { data, error } = await supabase
        .from('loan_applications')
        .insert([formData]);

      if (error) throw error;
      
      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        ...formData,
        applicantName: '',
        dateOfBirth: '',
        panNumber: '',
        // ... reset other fields
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? Number(value) : value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Personal Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700">
                Applicant's Name *
              </label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                required
                value={formData.applicantName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date of Birth *
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700">
                PAN Number *
              </label>
              <input
                type="text"
                id="panNumber"
                name="panNumber"
                required
                value={formData.panNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                Father's Name *
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                required
                value={formData.fatherName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                Mother's Name *
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                required
                value={formData.motherName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                required
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email ID *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="spouseName" className="block text-sm font-medium text-gray-700">
                Spouse Name
              </label>
              <input
                type="text"
                id="spouseName"
                name="spouseName"
                value={formData.spouseName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Residence Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Residence Details</h2>
          <div className="space-y-6">
            <div>
              <label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">
                Current Address *
              </label>
              <textarea
                id="currentAddress"
                name="currentAddress"
                required
                value={formData.currentAddress}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Residence Type *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['own', 'parent', 'rented', 'company'].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="residenceType"
                      value={type}
                      checked={formData.residenceType === type}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">
                      {type === 'parent' ? 'Parent Own' : type === 'company' ? 'Company Lease' : type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="permanentAddress" className="block text-sm font-medium text-gray-700">
                Permanent Address *
              </label>
              <textarea
                id="permanentAddress"
                name="permanentAddress"
                required
                value={formData.permanentAddress}
                onChange={handleChange}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Employment Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Office/Employment Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employment Type *
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['salaried', 'self-employed'].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="employmentType"
                      value={type}
                      checked={formData.employmentType === type}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700 capitalize">
                      {type === 'self-employed' ? 'Self Employed' : type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
                  Designation *
                </label>
                <input
                  type="text"
                  id="designation"
                  name="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">
                  Company Address *
                </label>
                <textarea
                  id="companyAddress"
                  name="companyAddress"
                  required
                  value={formData.companyAddress}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="officePhone" className="block text-sm font-medium text-gray-700">
                  Office Phone Number *
                </label>
                <input
                  type="tel"
                  id="officePhone"
                  name="officePhone"
                  required
                  value={formData.officePhone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="timeInCurrentJob" className="block text-sm font-medium text-gray-700">
                  Time in Current Job/Business *
                </label>
                <input
                  type="text"
                  id="timeInCurrentJob"
                  name="timeInCurrentJob"
                  required
                  value={formData.timeInCurrentJob}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Loan Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Loan Details</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Loan Type *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { value: 'HL', label: 'Home Loan' },
                  { value: 'LAP', label: 'Loan Against Property' },
                  { value: 'car', label: 'Car Loan' },
                  { value: 'BL', label: 'Business Loan' },
                  { value: 'PL', label: 'Personal Loan' }
                ].map((type) => (
                  <label key={type.value} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="loanType"
                      value={type.value}
                      checked={formData.loanType === type.value}
                      onChange={handleChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type.label}</span>
                  </label>
                ))}
              </div>
            </div>
            {formData.loanType === 'car' && (
              <>
                <div>
                  <label htmlFor="vehicleDetails" className="block text-sm font-medium text-gray-700">
                    Vehicle Details
                  </label>
                  <input
                    type="text"
                    id="vehicleDetails"
                    name="vehicleDetails"
                    value={formData.vehicleDetails}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="invoicePrice" className="block text-sm font-medium text-gray-700">
                    Invoice Price
                  </label>
                  <input
                    type="number"
                    id="invoicePrice"
                    name="invoicePrice"
                    value={formData.invoicePrice}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                  Loan Amount *
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  name="loanAmount"
                  required
                  value={formData.loanAmount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="tenure" className="block text-sm font-medium text-gray-700">
                  Tenure (months) *
                </label>
                <input
                  type="number"
                  id="tenure"
                  name="tenure"
                  required
                  min="1"
                  max="360"
                  value={formData.tenure}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* References Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">References</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Reference 1</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="reference1Name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="reference1Name"
                    name="reference1Name"
                    required
                    value={formData.reference1Name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reference1Address" className="block text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <textarea
                    id="reference1Address"
                    name="reference1Address"
                    required
                    value={formData.reference1Address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reference1Phone" className="block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="reference1Phone"
                    name="reference1Phone"
                    required
                    value={formData.reference1Phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">Reference 2</h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="reference2Name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="reference2Name"
                    name="reference2Name"
                    required
                    value={formData.reference2Name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reference2Address" className="block text-sm font-medium text-gray-700">
                    Address *
                  </label>
                  <textarea
                    id="reference2Address"
                    name="reference2Address"
                    required
                    value={formData.reference2Address}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="reference2Phone" className="block text-sm font-medium text-gray-700">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="reference2Phone"
                    name="reference2Phone"
                    required
                    value={formData.reference2Phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Loan Details Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Previous Loan Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="previousBank" className="block text-sm font-medium text-gray-700">
                Bank
              </label>
              <input
                type="text"
                id="previousBank"
                name="previousBank"
                value={formData.previousBank}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="previousLoanType" className="block text-sm font-medium text-gray-700">
                Loan Type
              </label>
              <input
                type="text"
                id="previousLoanType"
                name="previousLoanType"
                value={formData.previousLoanType}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="previousLoanAmount" className="block text-sm font-medium text-gray-700">
                Loan Amount
              </label>
              <input
                type="number"
                id="previousLoanAmount"
                name="previousLoanAmount"
                value={formData.previousLoanAmount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="previousLoanStartDate" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="previousLoanStartDate"
                name="previousLoanStartDate"
                value={formData.previousLoanStartDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Declaration Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Declaration</h2>
          <div>
            <label htmlFor="signature" className="block text-sm font-medium text-gray-700">
              Signature *
            </label>
            <input
              type="text"
              id="signature"
              name="signature"
              required
              value={formData.signature}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-8 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
            Application submitted successfully!
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
            Error submitting application. Please try again.
          </div>
        )}
      </form>
    </motion.div>
  );
} 