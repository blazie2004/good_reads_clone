import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosinstance from "src/Configs/axiosinstance";
import { toast } from "react-hot-toast";

const initialState = {
    shelfList: [],
};

export const getAllBookShelves = createAsyncThunk("shelf/getAllBookShelves", async () => {
    try {
        const response = axiosinstance.get("bookshelves", {
            headers: {
                'x-access-token': localStorage.getItem("token"),
            },
        });
        toast.promise(response, {
            loading: 'Loading bookshelves data...',
            success: 'Successfully loaded all the bookshelves',
            error: "Something went wrong",
        });
        return await response;
    } catch (error) {
        toast.error("Something went wrong, cannot download bookshelves");
    }
});

const shelfSlice = createSlice({
    name: 'shelf',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBookShelves.fulfilled, (state, action) => {
            if (action?.payload?.data?.data) {
                console.log(action);
                state.shelfList = action.payload.data.data;
            }
        });
    },
});

export default shelfSlice.reducer;
