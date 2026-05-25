import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oopss!</h1>
      <p>Sorry</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
