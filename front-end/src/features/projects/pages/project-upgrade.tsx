import {
  BottomHeader,
  FlexDiv,
  Title,
  WhiteBoxNoshad,
} from "@/components/elements";
import { Head } from "@/components/head";
import { ProjectFeedbacksSidebar } from "@/features/feedbacks";

import { usePostProject } from "../api";
import { ProjectUpdateForm } from "../components/project-update-form";
import { ProjectUpdateValues } from "../types";

export const ProjectUpgrade = ({ projectId }: { projectId: string }) => {
  const projectIdNum = Number(projectId);
  const postProjectMutation = usePostProject();

  const onSubmit = async (values: ProjectUpdateValues) => {
    const todo = await postProjectMutation.mutateAsync({ data: values });
    // console.log(todo);
  };

  return (
    <>
      <Head
        title="프로젝트 버전 업 | 프로젝트"
        description="개발새발 프로젝트 버전 업"
      />
      <BottomHeader locations={["프로젝트 버전 업"]} />
      <FlexDiv direction="row" align="flex-start" gap="3rem" padding="2rem 0">
        <WhiteBoxNoshad width="65%" padding="2.25rem">
          <Title
            title="프로젝트 버전 업"
            description="프로젝트의 버전을 올립니다."
          />
          <ProjectUpdateForm projectId={projectIdNum} onSubmit={onSubmit} />
        </WhiteBoxNoshad>
        <ProjectFeedbacksSidebar projectId={projectId} />
      </FlexDiv>
    </>
  );
};
