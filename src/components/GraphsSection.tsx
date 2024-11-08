import React, { useState, useEffect, useRef } from "react";
import { AxesSpacingType, RangeType } from "../types/configTypes";
import { PatternENUM } from "../types/enums";

interface GraphsSectionProps {
  range: RangeType;
  pointSpace: number;
  pattern: PatternENUM;
  pointCount: number;
  axesSpacing: AxesSpacingType;
  spiralTurns: number;
}

interface PointType {
  x: number;
  z: number;
}

const GraphsSection: React.FC<GraphsSectionProps> = ({
  range,
  pointSpace,
  pattern,
  pointCount,
  axesSpacing,
  spiralTurns,
}) => {
  const [points, setPoints] = useState<PointType[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);



  return (
    <div>
    </div>
  );
};

export default GraphsSection;