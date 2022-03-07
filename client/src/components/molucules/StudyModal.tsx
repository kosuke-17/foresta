import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StackList } from "../../hooks/study/useStackList";
import { ALL_STUDYSTACK_QUERY } from "../../queries/query";
import { useAddStudyStackMutation } from "../../types/generated/graphql";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {
  title: string;
  buttonTitle: string;
};

const schema = yup.object().shape({
  createdAt: yup.string().required(),
  skillTagId: yup.string().required(),
  timeStack: yup.number().required(),
  content: yup.string().required(),
});

export const StudyModal: FC<Props> = (props) => {
  //モーダルの開閉
  const { isOpen, onOpen, onClose } = useDisclosure();
  //propsでもらうもの
  const { title, buttonTitle } = props;

  const { register, handleSubmit, reset } = useForm<StackList>({
    mode: "onSubmit",
    //エラーのある入力が再度バリデーションされるタイミングを設定
    reValidateMode: "onChange",
    //外部のバリデーションメソッドを実行
    resolver: yupResolver(schema),
  });

  const [addStudyStack] = useAddStudyStackMutation({
    //refetch機能を追加
    refetchQueries: [{ query: ALL_STUDYSTACK_QUERY }],
    awaitRefetchQueries: true,
  });

  //記録追加
  const onSubmit: SubmitHandler<StackList> = (data) => {
    console.log("記録追加");
    addStudyStack({
      variables: {
        stack: {
          createdAt: data.createdAtStart,
          skillTagId: data.skillTagId,
          timeStack: data.timeStack,
          content: data.content,
          //一旦指定のユーザー
          userId: "621c795fea18ffdb80e66462",
        },
      },
    });
    //入力値リセット
    reset();
  };

  return (
    <>
      <Button onClick={onOpen} _focus={{ boxShadow: "none" }}>
        {buttonTitle}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {title === "記録削除" && (
            <ModalBody>この記事を削除しますか</ModalBody>
          )}
          {title === "記録編集" ||
            ("記録追加" && (
              <ModalBody>
                日付:
                <Input
                  variant="outline"
                  placeholder="日付"
                  type="date"
                  {...register("createdAtStart")}
                />
                技術:
                <Input
                  variant="outline"
                  placeholder="技術"
                  type="text"
                  {...register("skillTagId")}
                />
                時間:
                <Input
                  variant="outline"
                  placeholder="時間"
                  type="number"
                  {...register("timeStack")}
                />
                メモ:
                <Textarea placeholder="メモ" {...register("content")} />
              </ModalBody>
            ))}

          <ModalFooter>
            <Button
              variant="ghost"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              {buttonTitle}する
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              キャンセル
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
