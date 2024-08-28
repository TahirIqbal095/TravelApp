import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div class="bg-gray-100 px-2 text-center">
      <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-extrabold text-red-500">
          <i>{error.statusText || error.message}</i>
        </h1>
        <p class="text-4xl font-medium text-gray-800">Oops!</p>
        <p class="text-xl text-gray-800 mt-4">
          Sorry, an unexpected error has occurred.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
