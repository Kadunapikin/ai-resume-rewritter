// src/components/DisplayComponent.jsx
import React from 'react';

function DisplayComponent({ content }) {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'rewritten-resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download
      </button>
      <button
        onClick={() => navigator.clipboard.writeText(content)}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
      >
        Copy to Clipboard
      </button>
    </div>
  );
}

export default DisplayComponent;
