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
    const margin = 50;
    const baseLength = window.innerHeight - 200;

    // 設置 canvas 大小
    let canvasWidth, canvasHeight;
    if (range.width > range.height) {
      canvasWidth = baseLength + margin * 2;
      canvasHeight = (range.height * baseLength) / range.width + margin * 2;
    } else {
      canvasWidth = (range.width * baseLength) / range.height + margin * 2;
      canvasHeight = baseLength + margin * 2;
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 簡化的繪製網格線函數
    const drawGrid = () => {
      ctx.strokeStyle = "red";
      ctx.lineWidth = 0.5;

      // 垂直中心線
      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.stroke();

      // 水平中心線
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();

      // 繪製垂直線和水平線
      const maxSegments = 10;
      const segmentSize = 10 * scale;

      for (let i = 1; i <= maxSegments; i++) {
        // 垂直線
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 + i * segmentSize, 0);
        ctx.lineTo(canvas.width / 2 + i * segmentSize, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2 - i * segmentSize, 0);
        ctx.lineTo(canvas.width / 2 - i * segmentSize, canvas.height);
        ctx.stroke();

        // 水平線
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 + i * segmentSize);
        ctx.lineTo(canvas.width, canvas.height / 2 + i * segmentSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2 - i * segmentSize);
        ctx.lineTo(canvas.width, canvas.height / 2 - i * segmentSize);
        ctx.stroke();
      }
    };

    // 繪製虛線方框
    const drawDashedBox = () => {
      ctx.strokeStyle = "#999";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      ctx.beginPath();
      ctx.rect(
        margin,
        margin,
        canvas.width - margin * 2,
        canvas.height - margin * 2
      );
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // 執行所有繪製
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
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
      <canvas ref={canvasRef} className="border border-gray-300 m-4" />
    </div>
  );
};

export default GraphsSection;
