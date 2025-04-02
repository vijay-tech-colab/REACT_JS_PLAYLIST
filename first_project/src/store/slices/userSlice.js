import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchUserData = createAsyncThunk('users/fetchData', async () => {
    const res = await fetch('https://fakestoreapi.com/users');
    return await res.json();
});

const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
    await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE',
    });
    return id;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isLoading: false,
        isError: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch user data
            .addCase(fetchUserData.pending, (state) => {
                state.isLoading = true;  // Set loading to true when the fetch starts
                state.isError = false;   // Reset error state
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.isLoading = false;  // Set loading to false after fetch is done
                state.users = action.payload;  // Update users with fetched data
            })
            .addCase(fetchUserData.rejected, (state) => {
                state.isLoading = false;  // Set loading to false on error
                state.isError = true;  // Set error state to true
            })
            .addCase(deleteUser.pending ,  (state) => {
                state.isLoading = true;  // Set loading to true when the fetch starts
                state.isError = false;   // Reset error state
            })
            // Delete user
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.users = state.users.filter((user) => user.id !== action.payload);
                state.isLoading = false
            })
    },
});

export default userSlice.reducer;
export { fetchUserData, deleteUser };
