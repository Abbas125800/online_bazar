function ProtectedRoute({ children }) {
  // Token-less mode: always allow access
  return children;
}

export default ProtectedRoute;
