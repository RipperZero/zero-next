import { NextResponse } from "next/server";

import { _queryTimestamp } from "@/_mock/render/_mockAPI";

const GET = async (request: Request) => {
  console.log(request);

  const timestamp = await _queryTimestamp();

  return NextResponse.json(timestamp);
};

export { GET };
