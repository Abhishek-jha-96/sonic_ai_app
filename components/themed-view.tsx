import { View, type ViewProps } from "react-native";

export function ThemedView({ style, ...otherProps }: ViewProps) {
  const defaultBackground = "#0B0B0C";
  
  const flattened = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const backgroundColorOverride = flattened?.backgroundColor;

  return (
    <View
      style={[
        { backgroundColor: backgroundColorOverride ?? defaultBackground },
        style,
      ]}
      {...otherProps}
    />
  );
}
