import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "reactjs",
    body: "The library for web and native user interfaces",
  },
  {
    id: 2,
    title: "nodejs",
    body: "Node.js® is an open-source, cross-platform JavaScript runtime environment. Download for Linux (x64). 18.18.0 LTSRecommended For Most Users · Other Downloads ...",
  },
];
// easy way
// const PostSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     addPost: (state, action) => {
//       state.push(action.payload);
//     },
//   },
// });

// callback way
const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
          },
        };
      },
    },
    deletePost: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const FetchAllPosts = state => state.posts;
export const { addPost, deletePost } = PostSlice.actions;

export default PostSlice.reducer;
