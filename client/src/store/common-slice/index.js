import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  featureImageList: [],
  error: null,
};

export const getFeatureImages = createAsyncThunk(
  "common/getFeatureImages",
  async () => {
    const response = await axios.get(
      `http://localhost:5000/api/common/feature/get`
    );
    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "common/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `http://localhost:5000/api/common/feature/add`,
      { image }
    );
    return response.data;
  }
);

export const deleteFeatureImage = createAsyncThunk(
  "common/deleteFeatureImage",
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/common/feature/delete/${id}`
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  }
);

const commonSlice = createSlice({
  name: "commonFeature",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get Feature Images
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
        state.error = null;
      })
      .addCase(getFeatureImages.rejected, (state, action) => {
        state.isLoading = false;
        state.featureImageList = [];
        state.error = action.error.message;
      })
      // Add Feature Image
      .addCase(addFeatureImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addFeatureImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Delete Feature Image
      .addCase(deleteFeatureImage.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFeatureImage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default commonSlice.reducer;
