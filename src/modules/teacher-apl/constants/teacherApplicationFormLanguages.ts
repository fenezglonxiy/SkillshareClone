export const TeacherApplicationFormLanguageLabel = {
  "": "Choose Language",
  english: "English",
} as const;

export type TeacherApplicationFormLanguageValue =
  keyof typeof TeacherApplicationFormLanguageLabel;

const TeachApplicationFormLanguages = [
  {
    value: "",
    label: TeacherApplicationFormLanguageLabel[""],
  },
  {
    value: "english",
    label: TeacherApplicationFormLanguageLabel["english"],
  },
] as const;

export default TeachApplicationFormLanguages;
