// src/components/AiProcessor.jsx
import React, { useState } from 'react';
import axios from 'axios';

function AiProcessor({ file }) {
  const [processedContent, setProcessedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAiProcessing = async () => {
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('/api/process-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setProcessedContent(response.data.processedText);
    } catch (error) {
      setError('Error processing resume');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <button
        onClick={handleAiProcessing}
        className="px-4 py-2 mb-4 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Process Resume
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {processedContent && (
        <div className="w-full p-4 bg-white rounded-lg shadow-inner">
          <h3 className="text-xl font-bold mb-2">Processed Resume:</h3>
          <textarea
            value={processedContent}
            readOnly
            className="w-full p-2 border rounded-lg"
            rows="10"
          />
        </div>
      )}
    </div>
  );
}

export default AiProcessor;
