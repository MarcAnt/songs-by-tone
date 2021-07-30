export type MyOption = {
  label: string;
  value: string;
};

export const options = [
  { value: "all", label: "Tonos/Acordes" },
  { value: "tones", label: "Tonos" },
  { value: "chords", label: "Acordes" },
];

export const styles = {
  option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
    // const color = chroma(data.color);
    // console.log(data, isDisabled, isFocused, isSelected, styles);
    return {
      ...styles,
      backgroundColor: isFocused ? "#66339980" : null,
      color: "#333333",
    };
  },
};
