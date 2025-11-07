import { FC } from "react";

import { clsx } from "clsx";
import dayjs from "dayjs";

import { isNullish } from "@/shared/utils/tools";

import { ButtonLink } from "./ButtonLink";
import { RealTime } from "./client/RealTime";
import styles from "./components.module.css";
import { CustomLink } from "./CustomLink";

const TIME_FORMAT = "HH:mm:ss UTC Z";

type TimeSectionProps = {
  /** timestamp */
  timestamp: number | undefined;
  title: string;
  description: string;
};

const TimeSection: FC<TimeSectionProps> = ({
  timestamp,
  title,
  description,
}) => {
  const cleanDate = !isNullish(timestamp)
    ? dayjs.unix(timestamp).format(TIME_FORMAT)
    : undefined;

  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <section className="bg-dark">
      <div
        className={clsx(
          styles["render-layout"],
          "flex min-h-screen flex-col items-center justify-center text-center text-white",
        )}
      >
        <h1>{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <h2 className="mt-8 text-5xl text-[#00E0F3] md:text-6xl">
          {cleanDate ? cleanDate : "LOADING..."}
        </h2>
        <ButtonLink className="mt-8" href="/render">
          Back to Home
        </ButtonLink>

        <footer className="absolute bottom-2 text-gray-500">
          © {dayjs().year()} By{" "}
          <CustomLink href="https://theodorusclarence.com?ref=tsnextstarter">
            Theodorus Clarence
          </CustomLink>
        </footer>
      </div>

      <div className="absolute right-4 bottom-8 text-right text-sm font-medium sm:bottom-4">
        <p className="text-white">Real Time:</p>

        <RealTime />
      </div>
    </section>
  );
  // #endregion render functions end
};

export type { TimeSectionProps };
export { TimeSection };
