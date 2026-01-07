import { createSlice, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit";

// User type
export interface User {
  id: string;
  name: string | null;
  email: string | null;
}

// Adapter for normalized user collection
const usersAdapter = createEntityAdapter<User>();

// Initial state = entity state + auth state
const initialState = usersAdapter.getInitialState({
  auth: {
    userId: null as string | null,   // currently logged-in user
    token: null as string | null,
    status: "idle" as "idle" | "loading" | "authenticated" | "error",
  },
});

// Slice
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // --- Entity operations ---
    addUser: usersAdapter.addOne,
    addUsers: usersAdapter.addMany,
    updateUser: usersAdapter.updateOne,
    removeUser: usersAdapter.removeOne,

    // --- Auth operations ---
    loginSuccess: (
      state,
      action: PayloadAction<{ userId: string; token: string | null }>
    ) => {
      state.auth.userId = action.payload.userId;
      state.auth.token = action.payload.token;
      state.auth.status = "authenticated";
    },
    logout: (state) => {
      state.auth.userId = null;
      state.auth.token = null;
      state.auth.status = "idle";
    },
    setAuthStatus: (
      state,
      action: PayloadAction<"idle" | "loading" | "authenticated" | "error">
    ) => {
      state.auth.status = action.payload;
    },
  },
});

export const {
  addUser,
  addUsers,
  updateUser,
  removeUser,
  loginSuccess,
  logout,
  setAuthStatus,
} = userSlice.actions;

// Selectors
export const userSelectors = usersAdapter.getSelectors<{
  users: typeof initialState;
}>((state) => state.users);

// Extra selector to get current logged-in user
export const selectCurrentUser = (state: { users: typeof initialState }) => {
  const { userId } = state.users.auth;
  return userId ? userSelectors.selectById(state, userId) : null;
};

export const selectAuthStatus = (state: { users: typeof initialState }) =>{
  return state.users.auth.status;
};

export default userSlice.reducer;
