declare module "@api.test" {
  // import { makeHttpCallA } from "@/@typedoc/shared";

  /**
   * The options type for {@link makeHttpCallA}.
   */
  type MakeHttpCallAOptions = {
    url: string;

    /** e.g. GET, POST, PUT, DELETE */
    method: string;

    /** e.g. `{ 'Authorization': 'Bearer <access token>' }` */
    headers: Record<string, string>;
    body: string | Blob | FormData;
    mode: "cors" | "no-cors" | "same-origin";
  };
}
