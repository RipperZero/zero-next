import dayjs from "dayjs";

const Date = ({ dateString }) => {
  const dayjsDate = dayjs(dateString);

  return (
    <time dateTime={dayjsDate.toISOString()}>
      {dayjsDate.format("MMMM ddd,YYYY")}
    </time>
  );
};

export { Date };
