# PDF Text Extractor Documentation

## Overview
The PDF Text Extractor is a React-based web application for extracting text from PDF documents directly in the browser. Built with Vite, React, and PDF.js, it ensures fast and efficient client-side processing.

Deployed and accessible at: https://pdfparsing.vercel.app/


## Features
- Drag-and-drop or click-to-upload PDF files.
- Text extraction from PDF content.
- Real-time progress tracking.
- Browser-based processing for data security.

## Tech Stack
- **Frontend**: React, Vite
- **PDF Processing**: PDF.js
- **Styling**: Tailwind CSS, shadcn/ui

## Installation

### Prerequisites
- Node.js (v14 or higher)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/GaurabPrasai/Road-to-Feelfing.git
   cd pdfparsing
   ```
2. Install dependencies:
   ```bash
   npm install
   npm install pdfjs-dist
   npm install -D tailwindcss postcss autoprefixer
   npm install shadcn-ui
   npm install path
   npm install lucide-react
   ```
3. Add shadcn/ui components:
   ```bash
   npx shadcn@latest init
   npx shadcn@latest add card progress alert textarea
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
For Vercel Deployment
If you want to deploy the app on Vercel:

1. Sign in to Vercel.
2. Create a new project and link your GitHub repository.
3. Set up environment variables (if needed).
4. Deploy the project.

Once deployed, you can access your app at the provided Vercel URL.

## Usage
1. Open the application in your browser.
2. Upload a PDF file by dragging and dropping it or clicking the upload area.
3. View extracted text in the displayed textarea.
4. Copy or save the extracted text as needed.

## Key Code Snippet
Setting up PDF.js worker:
```javascript
const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;
```

## Troubleshooting
- **File Upload Fails**: Ensure the file is a valid PDF format.
- **Worker Error**: Verify the worker URL and browser compatibility.
- **Performance Issues**: Use smaller PDFs for better performance.

## License
This project uses PDF.js, distributed under the Apache License, Version 2.0.

PDF.js License:

Copyright 2011 Mozilla Foundation

Licensed under the Apache License, Version 2.0. You may obtain a copy of the License at:

    http://www.apache.org/licenses/LICENSE-2.0


## Support
For issues or questions, contact Gaurabprasaigp@gmail.com

