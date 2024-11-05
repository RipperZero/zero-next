"use client";

import { FC, Suspense, use, useState } from "react";

import { Button, Card, Skeleton, Typography } from "antd";

import { GetPatientList } from "@api.mockapi";

import { getPatientList } from "@/api";

type GetPatientListPromise = ReturnType<typeof getPatientList>;

const PatientList: FC<{
  getPatientListPromise: GetPatientListPromise;
}> = ({ getPatientListPromise }) => {
  const res = use(getPatientListPromise) as unknown as GetPatientList;

  return res.map((item) => {
    return (
      <Card key={item.wardId} className="w-[50vw] text-center">
        {item.wardNumber}
      </Card>
    );
  });
};

type UserProps = unknown;

const User: FC<UserProps> = () => {
  // #region hooks start
  const [getPatientListPromise, setGetPatientListPromise] =
    useState(getPatientList);
  // #endregion hooks end

  // #region useEffect functions start;
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <div className="flex flex-col gap-[8px]">
      <Typography.Title className="text-center">
        {"React 19 → use"}
      </Typography.Title>

      <Button
        className="w-[200px]"
        type="primary"
        onClick={() => {
          setGetPatientListPromise(getPatientList());
        }}
      >
        ReQuery
      </Button>

      <Suspense
        fallback={Array.from({ length: 6 }, (_, index) => {
          return (
            <Skeleton.Node key={index} className="!w-[50vw]" active fullSize />
          );
        })}
      >
        <PatientList getPatientListPromise={getPatientListPromise} />
      </Suspense>
    </div>
  );
  // #endregion render functions end
};

export default User;
