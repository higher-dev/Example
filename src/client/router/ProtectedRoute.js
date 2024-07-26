import { RedirectToSignIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/clerk-react';

function ProtectedRoute({ children }) {
  const { isSignedIn } = useUser();

  return (
    <>
      { !isSignedIn ?
        <RedirectToSignIn>
          {children}
        </RedirectToSignIn>
        : children
      }
    </>
  );
}

export default ProtectedRoute;
