import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  blogData : []
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    BLOG_DATA : (state, action) => {
        state.blogData = action.payload
    }
  }
});

export const {BLOG_DATA} = blogSlice.actions

export const selectBlogData = (state) => state.blog.blogData

export default blogSlice.reducer