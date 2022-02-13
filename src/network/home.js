import {request} from "./request"
export function getHomeMultidata(){
  return request({url:'/home/multidata'})
}
// request({
//   url:'/home/multidata'
// })11
// 首页有很多请求 都写在home.vue里耦合度太高
// 之后就是home.vue面向home.js开发 而不用面向request.js了

