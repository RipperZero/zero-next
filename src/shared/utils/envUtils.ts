const getApiServerURL = () => {
  return process.env.NEXT_PUBLIC_API_URL;
};

const getApiTimeOut = () => {
  const timeout = Number(process.env.API_TIME_OUT);

  return Number.isNaN(timeout) ? undefined : timeout;
};

export { getApiServerURL, getApiTimeOut };
