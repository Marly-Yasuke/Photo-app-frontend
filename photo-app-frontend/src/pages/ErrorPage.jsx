import errorGif from "../assets/404.gif";
function ErrorPage() {
  return (
    <div>
      <h1>Error 404 page not found!</h1>
      <img src={errorGif} alt="error 404" />
    </div>
  );
}

export default ErrorPage;
