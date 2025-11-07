"use client";

// import { connection } from "next/server";
import { FC, use } from "react";

import { Card } from "antd";

import { AxiosResponse } from "axios";

import { GetPatientList } from "@api.mockapi";

import { getPatientList } from "@/api/mockapi";

type GetPatientListPromise = ReturnType<typeof getPatientList>;

type PatientListProps = {
  getPatientListPromise: GetPatientListPromise;
};

// TODO: ban server request
const PatientList: FC<PatientListProps> = ({ getPatientListPromise }) => {
  // @see https://nextjs.org/docs/app/api-reference/functions/connection
  // await connection()

  // #region hooks start
  const res = use(
    getPatientListPromise,
  ) as unknown as AxiosResponse<GetPatientList>;
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return res.data.map((item) => {
    return (
      <Card key={item.id} className="w-[50vw] text-center">
        {item.userName}
      </Card>
    );
  });
  // #endregion render functions end
};

export type { PatientListProps };
export { PatientList };
