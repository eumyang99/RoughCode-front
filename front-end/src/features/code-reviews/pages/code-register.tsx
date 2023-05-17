import { useRouter } from "next/router";

import {
  BottomHeader,
  FlexDiv,
  Title,
  WhiteBoxNoshad,
} from "@/components/elements";
import { Head } from "@/components/head";

import { usePostCode } from "../api/post-code";
import { CodeReviewSidebar } from "../components/code-review-sidebar";
import { CodeUpdateForm } from "../components/code-update-form";
import { CodeUpdateValues } from "../types";

export const CodeRegister = () => {
  const router = useRouter();
  const postCodeMutation = usePostCode();

  const onSubmit = async (values: CodeUpdateValues) => {
    const codeIdNum = await postCodeMutation.mutateAsync({
      data: values,
    });
    const codeIdStr = String(codeIdNum);
    router.push(`/code-review/${codeIdStr}`);
  };

  return (
    <>
      <Head title="코드 등록 | 코드 리뷰" description="개발새발 코드 등록" />
      <BottomHeader locations={["코드 등록"]} />
      <FlexDiv direction="row" align="flex-start" gap="3rem" padding="2rem 0">
        <WhiteBoxNoshad width="65%" padding="2.25rem">
          <Title title="프로젝트 등록" description="프로젝트를 등록합니다." />
          <CodeUpdateForm codeId={-1} onSubmit={onSubmit} />
        </WhiteBoxNoshad>
        <CodeReviewSidebar />
      </FlexDiv>
    </>
  );
};
