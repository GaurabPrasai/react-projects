import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Upload } from "lucide-react";
import { Progress } from "./components/ui/progress";
import { Alert, AlertDescription } from "./components/ui/alert";
import { Textarea } from "./components/ui/textarea";

// Configure the worker
const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

const PDFTextExtractor = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setLoading(true);
      setError("");
      setFileName(file.name);
      setProgress(0);
      
      const pdfData = new Uint8Array(await file.arrayBuffer());
      const pdfDoc = await pdfjsLib.getDocument({ data: pdfData }).promise;
      let extractedText = "";

      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map(item => item.str)
          .join(" ");
        extractedText += `Page ${i}:\n${pageText}\n\n`;
        
        // Update progress
        setProgress((i / pdfDoc.numPages) * 100);
      }

      setText(extractedText);
      setProgress(100);
    } catch (err) {
      console.error("PDF processing error:", err);
      setError("Failed to process PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">PDF Text Extractor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-8 h-8 mb-2 text-gray-500" />
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PDF files only</p>
            </div>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {fileName && (
          <div className="text-sm text-gray-500 mt-2">
            Selected file: {fileName}
          </div>
        )}
        
        {loading && (
          <div className="space-y-2">
            <div className="text-sm text-gray-500">Processing PDF...</div>
            <Progress value={progress} className="w-full" />
          </div>
        )}
        
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {text && (
          <Textarea
            value={text}
            readOnly
            className="min-h-[400px] font-mono"
            placeholder="Extracted text will appear here..."
          />
        )}
      </CardContent>
    </Card>
  );
};

export default PDFTextExtractor;