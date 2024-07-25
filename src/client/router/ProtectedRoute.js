import { RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  return (
    <RedirectToSignIn>
      {children}
    </RedirectToSignIn>
  );
}

export default ProtectedRoute;
