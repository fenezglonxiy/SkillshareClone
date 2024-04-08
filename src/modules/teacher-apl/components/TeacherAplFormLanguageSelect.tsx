/** @jsxImportSource @emotion/react */

import { SelectChangeEvent, Theme } from "@mui/material";
import Button from "../../../Button/Button";
import Select from "../../../forms/Select/Select";
import SelectOption from "../../../forms/Select/SelectOption/SelectOption";
import SvgRightArrow from "../assets/SvgRightArrow";
import getTeacherAplFormLanguageSelectCss from "./__styles__/getTeacherAplFormLanguageSelectCss";
import TeacherApplicationFormLanguages, {
  TeacherApplicationFormLanguageLabel,
  TeacherApplicationFormLanguageValue,
} from "../constants/teacherApplicationFormLanguages";
import { useState } from "react";
import TeacherAplFormModal from "../../teacher-apl-form-modal/components/TeacherAplFormModal";

type Props = {
  theme: Theme;
};

const renderValue = (value: TeacherApplicationFormLanguageValue) =>
  TeacherApplicationFormLanguageLabel[value];

const TeacherAplFormLanguageSelect: React.FC<Props> = ({ theme }) => {
  const styled = getTeacherAplFormLanguageSelectCss(theme);

  const [selectedLanguage, setSelectedLanguage] =
    useState<TeacherApplicationFormLanguageValue>("");

  const handleSelectLanguage = (
    event: SelectChangeEvent<any>,
    _: React.ReactNode
  ) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div css={styled.root}>
      <div css={styled.content}>
        <Select
          variant="filled"
          css={styled.select}
          renderValue={renderValue}
          onChange={handleSelectLanguage}
          displayEmpty
        >
          {TeacherApplicationFormLanguages.map((language) => (
            <SelectOption
              key={language.value}
              value={language.value}
              invertedSelectedColor
              iconDisabled
            >
              {language.label}
            </SelectOption>
          ))}
        </Select>

        <Button
          size="small"
          disabled={selectedLanguage === ""}
          css={styled.button}
        >
          <SvgRightArrow />
        </Button>

        <TeacherAplFormModal theme={theme} />
      </div>
    </div>
  );
};

export default TeacherAplFormLanguageSelect;
