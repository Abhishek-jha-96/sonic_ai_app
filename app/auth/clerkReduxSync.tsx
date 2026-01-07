import { useEffect } from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useDispatch } from "react-redux";
import { addUser, loginSuccess } from "@/store/User/userSlice";

export function ClerkReduxSync() {
  const dispatch = useDispatch();
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const syncUser = async () => {
      const token = await getToken();

      dispatch(
        addUser({
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress || null,
          name: user.fullName
        })
      );

      dispatch(loginSuccess({ userId: user.id, token }));
    };

    syncUser();
  }, [isLoaded, user]);

  return null;
}
