import React, { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { PDFDocument } from "pdf-lib";
import Toolbar from "./Toolbar";
import Canvas from "./Canvas";
import NotesPanel from "./NotesPanel";
import { fabric } from "fabric";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfFile, setPdfFile] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [selectedTool, setSelectedTool] = useState("");
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setPdfFile(URL.createObjectURL(file));
    },
  });

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (pageNum: number) => {
    setPageNumber(Math.min(Math.max(1, pageNum), numPages || 1));
  };

  const adjustZoom = (delta: number) => {
    setScale((prevScale) => Math.max(0.5, Math.min(2, prevScale + delta)));
  };

  const rotate = () => {
    setRotation((prevRotation) => (prevRotation + 90) % 360);
  };

  const handleCanvasReady = useCallback((fabricCanvas: fabric.Canvas) => {
    setCanvas(fabricCanvas);
  }, []);

  const handleDownload = async () => {
    if (!pdfFile || !canvas) return;

    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();

      const dataUrl = canvas.toDataURL({
        format: "png",
        quality: 1,
      });

      const image = await pdfDoc.embedPng(dataUrl);
      const { width, height } = page.getSize();
      page.drawImage(image, {
        x: 0,
        y: 0,
        width,
        height,
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "edited-document.pdf";
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error saving PDF:", error);
    }
  };

  const handleSaveNotes = (format: "md" | "txt") => {
    const element = document.querySelector("textarea");
    if (!element) return;

    const content = element.value;
    const blob = new Blob([content], {
      type: format === "md" ? "text/markdown" : "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `notes.${format}`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {!pdfFile ? (
        <div className="p-8 flex-1">
          <div
            {...getRootProps()}
            className={`h-full border-2 border-dashed rounded-lg flex items-center justify-center cursor-pointer transition-colors
              ${
                isDragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-blue-400"
              }`}
          >
            <input {...getInputProps()} />
            <div className="text-center space-y-4">
              <Upload className="w-12 h-12 mx-auto text-gray-400" />
              <p className="text-lg text-gray-600">
                {isDragActive
                  ? "Drop your PDF here"
                  : "Drag and drop a PDF file here, or click to select"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen">
          <div className="p-4 bg-gray-50">
            <Toolbar
              pageNumber={pageNumber}
              numPages={numPages}
              scale={scale}
              onPageChange={(offset) => changePage(pageNumber + offset)}
              onZoom={adjustZoom}
              onRotate={rotate}
              onToolSelect={setSelectedTool}
              selectedTool={selectedTool}
              onDownload={handleDownload}
            />
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className="w-1/2 bg-white p-4 overflow-auto border-r border-gray-200">
              <div className="relative">
                <Document
                  file={pdfFile}
                  onLoadSuccess={onDocumentLoadSuccess}
                  className="max-w-full"
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    rotate={rotation}
                    className="max-w-full"
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                  />
                </Document>
                <Canvas
                  selectedTool={selectedTool}
                  pageNumber={pageNumber}
                  scale={scale}
                  rotation={rotation}
                  onCanvasReady={handleCanvasReady}
                />
              </div>
            </div>
            <div className="w-1/2">
              <NotesPanel
                onSave={handleSaveNotes}
                onPageJump={changePage}
                currentPage={pageNumber}
                totalPages={numPages || 1}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
