import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  // call useRouteError so we can access error data while routing
  const err = useRouteError();
  return (
    <div className="error-page bg-red-400">
      <h1>Oops! The page you are looking for not found.</h1>
      <h3 className="error-data">{err.data}</h3>
      <h3 className="error-back-home">
        <Link to="/">Back Home</Link>
      </h3>
    </div>
  )
}

export default Error;