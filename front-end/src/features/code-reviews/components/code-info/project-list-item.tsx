import dayjs from "dayjs";

import { FlexDiv, TagChipSub, Text, Count } from "@/components/elements";

import { CodeListItemWrapper } from "@/features/projects/components/related-codes/style";
import { Dispatch, SetStateAction } from "react";

type ProjectListItemProps = {
  projectListItem: {
    closed: boolean;
    date?: Date;
    feedbackCnt: number;
    img: string;
    introduction: string;
    likeCnt: number;
    projectId: number;
    tags: string[];
    title: string;
    version: number;
  };
  setSelectedProjectId: Dispatch<SetStateAction<number>>;
  selected: boolean;
};

export const ProjectListItem = ({
  projectListItem: {
    closed,
    date,
    feedbackCnt,
    img,
    introduction,
    likeCnt,
    projectId,
    tags,
    title,
    version,
  },
  setSelectedProjectId,
  selected,
}: ProjectListItemProps) => {
  return (
    <CodeListItemWrapper
      onClick={() => setSelectedProjectId(projectId)}
      shadColor={selected ? "main" : ""}
    >
      <FlexDiv width="100%" justify="space-between" pointer={true}>
        <FlexDiv>
          <Text bold={true} color="main">{`V${version}`}</Text>
          <Text bold={true} padding="0 1rem 0 0.3rem" pointer={true}>
            {title}
          </Text>
          {tags.map((tag, idx) => (
            <TagChipSub tag={tag} key={idx} />
          ))}
        </FlexDiv>
        <FlexDiv>
          <Count
            type="like"
            isChecked={liked}
            cnt={likeCnt}
            onClickFunc={() => {}}
          />
          {/* <Count type="code" isChecked={null} cnt={reviewCnt} /> */}
        </FlexDiv>
      </FlexDiv>

      <FlexDiv width="100%" justify="start" pointer={true} align="end">
        <Text padding="0 1.5rem" size="0.8rem">
          {dayjs(date).format("YY.MM.DD")}
        </Text>
      </FlexDiv>
    </CodeListItemWrapper>
  );
};
