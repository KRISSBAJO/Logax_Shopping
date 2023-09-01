import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
  <h1>404</h1>
  <h2>Page Not Found</h2>
  <p>
    The page you are looking for could not be found.
  </p>
  <Link to="/">
    <button className="btn btn-primary">Go Home</button>
  </Link>
</div>

  )
}
