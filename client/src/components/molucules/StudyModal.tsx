import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FC, memo } from "react";
import { useForm } from "react-hook-form";
import { useGetStudyStackByIdQuery } from "../../types/generated/graphql";
import { StackButton } from "../atoms/study/StackBotton";
import { useAddStack } from "../../hooks/study/useAddStack";
import { useRemoveStack } from "../../hooks/study/useRemoveStack";
import { useUpdateStack } from "../../hooks/study/useUpdateStack";
import { StudyModalInput } from "./stackList/StudyModalInput";
import { format } from "date-fns";

type Props = {
  title: string;
  buttonTitle: string;
  stackId: string;
};

type AddStack = {
  createdAt: string;
  skillTagId: string;
  timeStack: number;
  content: string;
};

//バリデーションチェック
const schema = yup.object().shape({
  createdAt: yup.string().required("学習日時を入力してください"),
  skillTagId: yup.string().required("学習技術を入力してください"),
  timeStack: yup
    .number()
    .min(0, "0以上の値を入力してください")
    .integer("整数で入力してください")
    .typeError("学習時間を入力してください"),
  content: yup.string().required("メモを入力してください"),
});

/**
 * モーダルコンポーネント
 */
export const StudyModal: FC<Props> = memo((props) => {
  //モーダルの開閉
  const { isOpen, onOpen, onClose } = useDisclosure();
  //propsでもらうもの
  const { title, buttonTitle, stackId } = props;
  //学習記録を１件取得クエリー（本当はdaleyを使いたい）
  const { loading, data, error } = useGetStudyStackByIdQuery({
    variables: { studyStackId: stackId },
    // fetchPolicy: "cache-and-network",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AddStack>({
    resolver: yupResolver(schema),
  });

  //記録追加フックス呼ぶ
  const { addStack } = useAddStack(onClose, reset);

  //記録を削除するフックス呼ぶ
  const { removeStack } = useRemoveStack(onClose, stackId);

  //記録を編集するフックスを呼ぶ
  const { updateStack } = useUpdateStack(onClose, stackId);

  //モーダルを開いた時のメソッド
  const openMethod = () => {
    //編集ボタンをクリックしたときには初期値をセットする
    if (data) {
      setValue(
        "createdAt",
        format(new Date(data?.getStudyStackById.node.createdAt), "yyyy-MM-dd"),
      );
      setValue("skillTagId", data?.getStudyStackById.node.skillTagId as string);
      setValue("timeStack", data?.getStudyStackById.node.timeStack as number);
      setValue("content", data?.getStudyStackById.node.content as string);
    }
    onOpen();
    if (loading || error) {
      onOpen();
    }
  };

  //モーダルを閉じた時のメソッド
  const closeMethod = () => {
    onClose();
    reset();
  };

  return (
    <>
      <Button onClick={openMethod} _focus={{ boxShadow: "none" }}>
        {buttonTitle}
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        blockScrollOnMount={false}
        closeOnOverlayClick={false}
        isCentered
      >
        <ModalOverlay />
        <ModalContent backgroundColor="green.100">
          <ModalHeader>{title}</ModalHeader>
          {title === "記録削除" && (
            <ModalBody>この記事を削除しますか</ModalBody>
          )}
          {title === "記録追加" && (
            <StudyModalInput register={register} errors={errors} />
          )}
          {title === "記録編集" && (
            <StudyModalInput register={register} errors={errors} />
          )}

          <ModalFooter>
            {title === "記録追加" && (
              <StackButton onClick={handleSubmit(addStack)} title="追加する" />
            )}
            {title === "記録編集" && (
              <StackButton
                onClick={handleSubmit(updateStack)}
                title="編集する"
              />
            )}
            {title === "記録削除" && (
              <StackButton onClick={removeStack} title="削除する" />
            )}
            <Button
              colorScheme="gray"
              mx={3}
              _focus={{ boxShadow: "none" }}
              onClick={closeMethod}
            >
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});
