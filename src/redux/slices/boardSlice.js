import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoards: (_, action) => {
      return action.payload;
    },

    // editWorkspace: (state, action) => {
    //   return state.map((item) => {
    //     if (item._id === action.payload._id) {
    //       return {
    //         ...item,
    //         ...action.payload.updatedWorkspace,
    //       };
    //     }
    //     return item;
    //   });
    // },

    // addWorkspace: (state, action) => {
    //   return [...state, action.payload];
    // },

    // removeWorkspace: (state, action) => {
    //   return state.filter((item) => item._id !== action.payload._id);
    // },

    // addProject: (state, action) => {
    //   return state.map((item) => {
    //     if (item._id === action.payload.workspaceId) {
    //       return {
    //         ...item,
    //         projects: [...item.projects, action.payload.project],
    //       };
    //     }
    //     return item;
    //   });
    // },

    // updateProject: (state, action) => {
    //   const tempState = state.map((item) => {
    //     if (item._id === action.payload.workspaceId) {
    //       const updatedProjects = item.projects.map((project) => {
    //         if (project._id === action.payload.updatedProject._id) {
    //           return { ...project, ...action.payload.updatedProject };
    //         }
    //         return project;
    //       });
    //       return { ...item, projects: updatedProjects };
    //     }
    //     return item;
    //   });
    //   return tempState;
    // },

    // removeProject: (state, action) => {
    //   const tempState = state.map((item) => {
    //     if (item._id === action.payload.workspaceId) {
    //       const updatedProjects = item.projects.filter(
    //         (project) => project._id !== action.payload.projectId
    //       );
    //       return { ...item, projects: updatedProjects };
    //     }
    //     return item;
    //   });
    //   return tempState;
    // },
  },
});

export const { setBoards } = boardSlice.actions;
export default boardSlice.reducer;
