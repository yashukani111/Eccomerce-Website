import React, { useState, useEffect } from 'react';

const PaymentModal = ({ isOpen, onClose ,onSuccess }) => {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isQrCodeModalOpen, setIsQrCodeModalOpen] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    nameOnCard: '',
    bankName: '',
    accountNumber: '',
    accountHolderName: '',
    googlePayOption: '',
    googlePayDetails: '',
  });

  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const encodedDetails = encodeURIComponent(formData.googlePayDetails);
  // setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedDetails}`);
  // useEffect(() => {
  //   if (formData.googlePayOption === 'QR Code' && formData.googlePayDetails) {
  //     const encodedDetails = encodeURIComponent(formData.googlePayDetails);
  //     setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedDetails}`);
  //   } else {
  //     setQrCodeUrl(''); // Clear QR code URL if not QR Code option or no details
  //   }
  // }, [formData.googlePayOption, formData.googlePayDetails]);

  if (!isOpen) return null;

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setError(''); // Clear error when payment method changes
    setQrCodeUrl(''); // Clear QR code URL when payment method changes
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(''); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { cardNumber, expirationDate, cvv, nameOnCard, bankName, accountNumber, accountHolderName, googlePayOption, googlePayDetails } = formData;

    if (paymentMethod === 'Credit Card') {
      if (!cardNumber || !expirationDate || !cvv || !nameOnCard) {
        setError('Please fill in all fields.');
        return;
      }
    } else if (paymentMethod === 'Bank Transfer') {
      if (!bankName || !accountNumber || !accountHolderName) {
        setError('Please fill in all bank transfer fields.');
        return;
      }
    } else if (paymentMethod === 'Google Pay') {
      if (!googlePayOption || !googlePayDetails) {
        setError('Please provide all Google Pay details.');
        return;
      }
    }

    // If validation passes, show success modal
    setIsSuccessModalOpen(true);
    onSuccess();
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    onClose();
  };

  const openQrCodeModal = () => {

      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodedDetails}`);
      setIsQrCodeModalOpen(true);

    console.log('qrCodeUrl',qrCodeUrl)
  };

  const closeQrCodeModal = () => {
    setIsQrCodeModalOpen(false);
  };

  return (
    <>
      {/* Payment Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg w-full max-w-md mx-4">
          <div className="border-b p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Payment Information</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              ✕
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit}>
              {/* Payment Method Selection */}
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Select Payment Method</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Credit Card"
                      checked={paymentMethod === 'Credit Card'}
                      onChange={handlePaymentMethodChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Credit Card</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Bank Transfer"
                      checked={paymentMethod === 'Bank Transfer'}
                      onChange={handlePaymentMethodChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Bank Transfer</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="Google Pay"
                      checked={paymentMethod === 'Google Pay'}
                      onChange={handlePaymentMethodChange}
                      className="form-radio text-indigo-600"
                    />
                    <span className="ml-2 text-gray-700">Google Pay</span>
                  </label>
                </div>
              </div>

              {/* Payment Information (only shown if Credit Card is selected) */}
              {paymentMethod === 'Credit Card' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>

                  <div className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiration Date</label>
                      <input
                        type="text"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="MM/YY"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="123"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                    <input
                      type="text"
                      name="nameOnCard"
                      value={formData.nameOnCard}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                </>
              )}

              {/* Payment Information (only shown if Bank Transfer is selected) */}
              {paymentMethod === 'Bank Transfer' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Bank Name"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Your Account Number"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Account Holder Name</label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Account Holder Name"
                    />
                  </div>
                </>
              )}

              {/* Payment Information (only shown if Google Pay is selected) */}
              {paymentMethod === 'Google Pay' && (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Google Pay Option</label>
                    <select
                      name="googlePayOption"
                      value={formData.googlePayOption}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="">Select an option</option>
                      <option value="QR Code">QR Code</option>
                      <option value="Phone Number">Phone Number</option>
                      <option value="UPI ID">UPI ID</option>
                    </select>
                  </div>

                  {formData.googlePayOption === 'QR Code' && (
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={openQrCodeModal}
                        className="mt-2 text-blue-600 hover:text-blue-800 underline"
                      >
                        View QR Code
                      </button>
                      {/* <img src={qrCodeUrl}/> */}
                    </div>
                  )}

                  {formData.googlePayOption === 'Phone Number' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="text"
                        name="googlePayDetails"
                        value={formData.googlePayDetails}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                  )}

                  {formData.googlePayOption === 'UPI ID' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">UPI ID</label>
                      <input
                        type="text"
                        name="googlePayDetails"
                        value={formData.googlePayDetails}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter UPI ID"
                      />
                    </div>
                  )}
                </>
              )}

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-6 p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-green-800">Success!</h2>
        <button
          onClick={closeSuccessModal}
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <p className="text-gray-700 mb-6">
        Your payment was successfully processed.
      </p>
      <button
        onClick={closeSuccessModal}
        className="w-full py-3 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Close
      </button>
    </div>
  </div>
)}


      {/* QR Code Modal */}
      {isQrCodeModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-100px max-w-sm mx-4 p-6">
            <h2 className="text-lg font-semibold mb-4">QR Code</h2>
              <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$%7BencodedDetails%7D"} alt="QR Code" className="w-full " />
              <p className='text-black pt-3'>Scan and pay</p>
            <button
              onClick={closeQrCodeModal}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentModal;
