"use client";

// import { connection } from "next/server";
import { FC, use } from "react";

import { Card } from "antd";

import { GetPatientList } from "@api.mockapi";

import { getPatientList } from "@/api";

type GetPatientListPromise = ReturnType<typeof getPatientList>;

type PatientListProps = {
  getPatientListPromise: GetPatientListPromise;
};

// TODO: ban server request
const PatientList: FC<PatientListProps> = ({ getPatientListPromise }) => {
  // #region hooks start
  const res = use(getPatientListPromise) as unknown as GetPatientList;
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return res.map((item) => {
    return (
      <Card key={item.wardId} className="w-[50vw] text-center">
        {item.wardNumber}
      </Card>
    );
  });
  // #endregion render functions end
};

export type { PatientListProps };
export { PatientList };
