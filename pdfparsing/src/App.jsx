import { useState, useEffect } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Configure the worker
const pdfjsWorkerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorkerSrc;

function PDFTextExtractor() {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setLoading(true);
            setError("");
            
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
            }

            setText(extractedText);
        } catch (err) {
            console.error("PDF processing error:", err);
            setError("Failed to process PDF. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileUpload}
                    className="mb-2 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                />
            </div>
            
            {loading && (
                <div className="mb-4 text-blue-600">
                    Processing PDF...
                </div>
            )}
            
            {error && (
                <div className="mb-4 text-red-600">
                    {error}
                </div>
            )}
            
            {text && (
                <textarea
                    value={text}
                    readOnly
                    className="w-full h-96 p-2 border rounded-md"
                    placeholder="Extracted text will appear here..."
                />
            )}
        </div>
    );
}

export default PDFTextExtractor;