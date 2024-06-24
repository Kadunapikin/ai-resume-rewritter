// src/App.jsx
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import AiProcessor from './components/AiProcessor';
import DisplayComponent from './components/DisplayComponent';

function App() {
  const [file, setFile] = useState(null);
  const [processedContent, setProcessedContent] = useState('');

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  const handleProcessedContent = (content) => {
    setProcessedContent(content);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Resume Rewriter</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {file && (
        <AiProcessor file={file} onProcessedContent={handleProcessedContent} />
      )}
      {processedContent && <DisplayComponent content={processedContent} />}
    </div>
  );
}

export default App;
