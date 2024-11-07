import React, { useEffect, useRef, useState } from "react";
import { fabric } from "fabric";

interface CanvasProps {
  selectedTool: string;
  pageNumber: number;
  scale: number;
  rotation: number;
  onCanvasReady: (canvas: fabric.Canvas) => void;
}

export default function Canvas({
  selectedTool,
  pageNumber,
  scale,
  rotation,
  onCanvasReady,
}: CanvasProps) {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<fabric.Canvas | null>(null);
  const [isErasing, setIsErasing] = useState(false);

  // Handling the keyboard events : mainly for the Delete and the backspace events
  useEffect(() => {
    if (!fabricCanvas) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "Delete" || e.key === "Backspace") && !isErasing) {
        const activeObjects = fabricCanvas.getActiveObjects();
        if (activeObjects.length > 0) {
          activeObjects.forEach((obj) => fabricCanvas.remove(obj));
          fabricCanvas.discardActiveObject();
          fabricCanvas.renderAll();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [fabricCanvas, isErasing]);

  // canvas with pdf manipulation events 
  useEffect(() => {
    if (!canvasEl.current || fabricCanvas) return;

    const canvas = new fabric.Canvas(canvasEl.current, {
      width: 800,
      height: 1000,
      backgroundColor: "transparent",
      selection: !isErasing,
    });

    canvas.on("mouse:down", (event) => {
      if (isErasing && event.target) {
        canvas.remove(event.target);
        canvas.renderAll();
      }
    });

    canvas.on("mouse:move", (event) => {
      if (isErasing) {
        const pointer = canvas.getPointer(event.e);
        const objects = canvas.getObjects();
        objects.forEach((obj) => {
          if (obj.containsPoint(pointer)) {
            canvas.remove(obj);
            canvas.renderAll();
          }
        });
      }
    });

    setFabricCanvas(canvas);
    onCanvasReady(canvas);

    return () => {
      canvas.dispose();
      setFabricCanvas(null);
    };
  }, [onCanvasReady]);

  // TODO :Toolbar events to be integrated : completed ✅
  useEffect(() => {
    if (!fabricCanvas) return;

    setIsErasing(selectedTool === "eraser");
    fabricCanvas.isDrawingMode =
      selectedTool === "draw" || selectedTool === "highlighter";
    fabricCanvas.selection = !isErasing;

    if (fabricCanvas.isDrawingMode) {
      fabricCanvas.freeDrawingBrush.width =
        selectedTool === "highlighter" ? 20 : 2;
      fabricCanvas.freeDrawingBrush.color =
        selectedTool === "highlighter" ? "rgba(255, 255, 0, 0.4)" : "#000000";
    }

    if (isErasing) {
      fabricCanvas.defaultCursor = "not-allowed";
      fabricCanvas.hoverCursor = "not-allowed";
    } else {
      fabricCanvas.defaultCursor = "default";
      fabricCanvas.hoverCursor = "move";
    }

    const addShape = () => {
      switch (selectedTool) {
        case "text":
          const text = new fabric.IText("Click to edit", {
            left: 100,
            top: 100,
            fontSize: 20,
          });
          fabricCanvas.add(text);
          fabricCanvas.setActiveObject(text);
          break;

        case "rectangle":
          const rect = new fabric.Rect({
            left: 100,
            top: 100,
            width: 100,
            height: 100,
            fill: "transparent",
            stroke: "#000000",
            strokeWidth: 2,
          });
          fabricCanvas.add(rect);
          fabricCanvas.setActiveObject(rect);
          break;

        case "circle":
          const circle = new fabric.Circle({
            left: 100,
            top: 100,
            radius: 50,
            fill: "transparent",
            stroke: "#000000",
            strokeWidth: 2,
          });
          fabricCanvas.add(circle);
          fabricCanvas.setActiveObject(circle);
          break;
      }
    };

    if (["text", "rectangle", "circle"].includes(selectedTool)) {
      addShape();
    }

    fabricCanvas.renderAll();
  }, [selectedTool, fabricCanvas, isErasing]);

  // TODO : Zoom scale events to be handled here, 
  useEffect(() => {
    if (!fabricCanvas) return;
    fabricCanvas.setZoom(scale);
    fabricCanvas.renderAll();
  }, [scale, fabricCanvas]);

  // Rotation of the pdf
  useEffect(() => {
    if (!fabricCanvas) return;
    const center = fabricCanvas.getCenter();
    fabricCanvas.setViewportTransform([
      Math.cos((rotation * Math.PI) / 180) * scale,
      Math.sin((rotation * Math.PI) / 180) * scale,
      -Math.sin((rotation * Math.PI) / 180) * scale,
      Math.cos((rotation * Math.PI) / 180) * scale,
      center.left,
      center.top,
    ]);
    fabricCanvas.renderAll();
  }, [rotation, scale, fabricCanvas]);

  return (
    <div
      ref={canvasContainerRef}
      className="absolute top-0 left-0 pointer-events-auto"
    >
      <canvas ref={canvasEl} />
    </div>
  );
}
