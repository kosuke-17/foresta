import { FC, memo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Box } from "@chakra-ui/react";

export const Calendar: FC = memo(() => {
  return (
    <Box
      padding="1rem 10rem"
      margin="1rem"
      bg="#f0fff4"
      border="1px solid #6BE4A3"
      borderRadius="3xl"
    >
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        // locale='ja' // 日本語化
        eventColor="#48BB78"
        events={[
          { title: "GraphQL学習する", start: "2022-03-01" },
          // endに指定した日付は含まないので注意
          { title: "Node.js", start: "2022-03-10", end: "2022-03-15" },
        ]}
        // selectable="true"
      />
    </Box>
  );
});
