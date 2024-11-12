import { useEffect, useRef } from "react";
import { RangeType } from "../types/configTypes";

interface GraphsSectionProps {
  range: RangeType;
}

const GraphsSection = ({ range }: GraphsSectionProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 設置坐標系的縮放和偏移
    const scale = 10;
    const margin = 50; // 留給標籤的邊距
    const offsetX = margin + range.width / 2;
    const offsetY = margin + range.height / 2;

    // 設置 canvas 大小
    canvas.width = range.width + 2 * margin;
    canvas.height = range.height + 2 * margin;

    // 繪製網格線
    const drawGrid = () => {
      ctx.strokeStyle = "#e0e0e0";
      ctx.lineWidth = 0.5;

      // 繪製垂直線
      for (let x = -30; x <= 30; x += 10) {
        const xPos = x * scale + offsetX;
        ctx.beginPath();
        ctx.moveTo(xPos, 0);
        ctx.lineTo(xPos, canvas.height);
        ctx.stroke();
      }

      // 繪製水平線
      for (let y = -30; y <= 30; y += 10) {
        const yPos = y * scale + offsetY;
        ctx.beginPath();
        ctx.moveTo(0, yPos);
        ctx.lineTo(canvas.width, yPos);
        ctx.stroke();
      }
    };

    // 繪製座標軸
    const drawAxes = () => {
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 1;

      // X軸
      ctx.beginPath();
      ctx.moveTo(margin, offsetY);
      ctx.lineTo(canvas.width - margin, offsetY);
      ctx.stroke();

      // Y軸
      ctx.beginPath();
      ctx.moveTo(offsetX, margin);
      ctx.lineTo(offsetX, canvas.height - margin);
      ctx.stroke();
    };

    // 繪製虛線方框
    const drawDashedBox = () => {
      ctx.strokeStyle = "#666";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      const boxWidth = range.width;
      const boxHeight = range.height;
      ctx.beginPath();
      ctx.rect(margin, margin, boxWidth, boxHeight);
      ctx.stroke();

      ctx.setLineDash([]);
    };

    // 執行所有繪製
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawAxes();
      drawDashedBox();
    };

    draw();

    // 處理視窗大小改變
    const handleResize = () => {
      draw();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [range]);

  return (
    <div className="mx-auto my-auto">
      <canvas ref={canvasRef} className="border border-gray-300" />
    </div>
  );
};

export default GraphsSection;
