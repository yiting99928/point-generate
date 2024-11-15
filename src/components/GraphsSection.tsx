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
    const baseLength = window.innerHeight - 400;

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

    // 將原點移動到矩形的正中央
    ctx.translate(canvas.width / 2, canvas.height / 2);

    // 簡化的繪製網格線函數
    const drawGrid = () => {
      ctx.strokeStyle = "red";
      ctx.lineWidth = 0.5;

      const xValues = [];
      const yValues = [];

      // 繪製垂直中心線
      ctx.beginPath();
      ctx.moveTo(0, -canvas.height / 2);
      ctx.lineTo(0, canvas.height / 2);
      ctx.stroke();

      // 繪製水平中心線
      ctx.beginPath();
      ctx.moveTo(-canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, 0);
      ctx.stroke();

      // 繪製垂直線
      for (let i = 10; i <= Math.floor(range.width / 2); i += 10) {
        const xValue = i;

        // 右側垂直線
        ctx.beginPath();
        ctx.moveTo(xValue * scale, -canvas.height / 2);
        ctx.lineTo(xValue * scale, canvas.height / 2);
        ctx.stroke();

        // 左側垂直線
        ctx.beginPath();
        ctx.moveTo(-xValue * scale, -canvas.height / 2);
        ctx.lineTo(-xValue * scale, canvas.height / 2);
        ctx.stroke();

        xValues.push(xValue, -xValue);
      }

      // 繪製水平線
      for (let i = 10; i <= Math.floor(range.height / 2); i += 10) {
        const yValue = i;

        // 上側水平線
        ctx.beginPath();
        ctx.moveTo(-canvas.width / 2, yValue * scale);
        ctx.lineTo(canvas.width / 2, yValue * scale);
        ctx.stroke();

        // 下側水平線
        ctx.beginPath();
        ctx.moveTo(-canvas.width / 2, -yValue * scale);
        ctx.lineTo(canvas.width / 2, -yValue * scale);
        ctx.stroke();

        yValues.push(yValue, -yValue);
      }

      // 排序並輸出 x 和 y 軸的數值
      console.log(
        "X-Axis Values:",
        xValues.sort((a, b) => a - b)
      );
      console.log(
        "Y-Axis Values:",
        yValues.sort((a, b) => a - b)
      );
    };

    // 繪製虛線方框
    const drawDashedBox = () => {
      ctx.strokeStyle = "#999";
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);

      ctx.beginPath();
      ctx.rect(
        -canvas.width / 2 + margin,
        -canvas.height / 2 + margin,
        canvas.width - margin * 2,
        canvas.height - margin * 2
      );
      ctx.stroke();
      ctx.setLineDash([]);
    };

    // 執行所有繪製
    const draw = () => {
      ctx.clearRect(
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
      );
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
