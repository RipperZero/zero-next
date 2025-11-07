// "use client";

// import { connection } from "next/server";

// import { FC, Suspense, use, useState } from "react";

// import { Card, Skeleton, Typography } from "antd";

// import dayjs from "dayjs";

// import { getPatientList } from "@/api/mockapi";

// // import { GetPatientList } from "@api.mockapi";

// import { PatientList } from "./_internal/components/client";

// // type GetPatientListPromise = ReturnType<typeof getPatientList>;

// // const PatientList: FC<{
// //   getPatientListPromise: GetPatientListPromise;
// // }> = ({ getPatientListPromise }) => {
// //   const res = use(getPatientListPromise) as unknown as GetPatientList;

// //   return res.map((item) => {
// //     return (
// //       <Card key={item.wardId} className="w-[50vw] text-center">
// //         {item.wardNumber}
// //       </Card>
// //     );
// //   });
// // };

// // export const revalidate = 0;
// // @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
// // export const dynamic = "force-dynamic";

// type UserProps = unknown;

// const User: FC<UserProps> = () => {
//   // @see https://nextjs.org/docs/app/api-reference/functions/connection
//   // await connection();
//   // Everything below will be excluded from prerendering

//   // #region hooks start
//   const [getPatientListPromise, setGetPatientListPromise] =
//     useState(getPatientList);
//   // #endregion hooks end

//   // #region useEffect functions start;
//   // #endregion useEffect functions end

//   // #region logic functions start
//   // #endregion logic functions end

//   // #region render functions start
//   return (
//     <div className="flex flex-col gap-[8px]">
//       <Typography.Title className="text-center">
//         {"React 19 → use"}
//       </Typography.Title>

//       <div
//         className="h-[50px] w-[200px] cursor-pointer content-center rounded-lg border border-indigo-600 text-center"
//         onClick={() => {
//           setGetPatientListPromise(getPatientList());
//         }}
//       >
//         ReQuery
//       </div>

//       {/* <Typography>{dayjs().format("HH:mm:ss")}</Typography> */}
//       <Suspense
//         fallback={Array.from({ length: 6 }, (_, index) => {
//           return (
//             <Skeleton.Node key={index} className="w-[50vw]!" active fullSize />
//           );
//         })}
//       >
//         <PatientList getPatientListPromise={getPatientListPromise} />
//       </Suspense>
//     </div>
//   );
//   // #endregion render functions end
// };

// export default User;

const UserPage = () => {
  return <div>TODO FIX build</div>;
};

export default UserPage;
