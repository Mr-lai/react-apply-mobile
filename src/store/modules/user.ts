import { createSlice } from '@reduxjs/toolkit'
import {httpInstance} from '@/utils/http';
const userStore = createSlice({
    name:"user",
    //数据状态
    initialState: {
      token: ""
    },
    // 同步修改方法
    reducers: {
      setToken (state,action) {
        state.token = action.payload
      }
    }
}) 
// 解构出actionCreater
const { setToken } = userStore.actions

const fetchLogin = (loginForm) => {
  return async(dispatch) => {
    // 1.发送异步请求
    const res = await httpInstance.post('/authorizations', loginForm)
    // 2.提交同步action进行token的存入
    dispatch(setToken(res.data.token))
  }
}


// 获取reducer函数
const userReducer = userStore.reducer


export { setToken,fetchLogin }

export default userReducer