import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PaymentFormState = {
 address: string;
 phoneNumber: string;
 email: string;
 paymentMethod: string;
 isLoading: boolean;
 errorMessage: string | null;
};

const initialState: PaymentFormState = {
 address: "",
 phoneNumber: "",
 email: "",
 paymentMethod: "",
 isLoading: false,
 errorMessage: null,
};

export const paymentFormSlice = createSlice({
 name: "paymentForm",
 initialState,
 reducers: {
    updateForm: (state, action: PayloadAction<Partial<PaymentFormState>>) => {
      return { ...state, ...action.payload };
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;
    },
    resetForm: () => initialState,
 },
});

export const { updateForm, setLoading, setErrorMessage, resetForm } = paymentFormSlice.actions;
export default paymentFormSlice.reducer;
