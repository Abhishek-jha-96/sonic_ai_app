import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

interface CornerRadialGradientProps {
  size?: number;                // Width & height of gradient
  colors?: [string, string];    // [centerColor, edgeColor]
  positionStyle?: StyleProp<ViewStyle>; // absolute positioning
  opacity?: number;             // intensity at center
  cx?: string;                  // center x (percentage)
  cy?: string;                  // center y (percentage)
  rx?: string;                  // radius x
  ry?: string;                  // radius y
}

const CornerRadialGradient: React.FC<CornerRadialGradientProps> = ({
  size = 120,
  colors = ["#B4B2FF", "#B4B2FF"],
  positionStyle,
  opacity = 0.8,
  cx = "50%",
  cy = "50%",
  rx = "70%",
  ry = "70%",
}) => {
  const gradientId = Math.random().toString(); // unique ID for each instance

  return (
    <Svg height={size} width={size} style={positionStyle}>
      <Defs>
        <RadialGradient
          id={gradientId}
          cx={cx}
          cy={cy}
          rx={rx}
          ry={ry}
          fx={cx}
          fy={cy}
        >
          <Stop offset="0%" stopColor={colors[0]} stopOpacity={opacity} />
          <Stop offset="100%" stopColor={colors[1]} stopOpacity="0" />
        </RadialGradient>
      </Defs>
      <Rect width={size} height={size} fill={`url(#${gradientId})`} />
    </Svg>
  );
};

export default CornerRadialGradient;
