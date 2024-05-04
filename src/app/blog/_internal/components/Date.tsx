import { FC } from "react";

import dayjs from "dayjs";

type DateProps = {
  dateString: string;
};

const Date: FC<DateProps> = ({ dateString }) => {
  const dayjsDate = dayjs(dateString);

  // #region render functions start
  return (
    <time dateTime={dayjsDate.toISOString()}>
      {dayjsDate.format("MMMM ddd,YYYY")}
    </time>
  );
  // #endregion render functions end
};

export { Date };
