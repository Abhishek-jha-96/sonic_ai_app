export const VOICE_ICONS = {
  adam: require("@/assets/images/voices/adam.png"),
  bella: require("@/assets/images/voices/bella.png"),
  emma: require("@/assets/images/voices/emma.png"),
  george: require("@/assets/images/voices/george.png"),
  isabella: require("@/assets/images/voices/isabella.png"),
  lewis: require("@/assets/images/voices/lewis.png"),
  michael: require("@/assets/images/voices/michael.png"),
  nicole: require("@/assets/images/voices/nicole.png"),
  sarah: require("@/assets/images/voices/sarah.png"),
} as const;

export type VoiceName = keyof typeof VOICE_ICONS;
