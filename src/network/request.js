import axios from 'axios'
export function request(config){
// 1.创建对象实例
const instance=axios.create({
  baseURL:'http://152.136.185.210:7878/api/hy66',
  timeout:5000
})
// 2.axios的拦截器

instance.interceptors.request.use((config)=>{
  return config//拦截了得放！！！！！【否则main.js会有TypeError】
},(err)=>{
  // console.log(err);//请求失败来到这 这个位置很少来到
})
// instance.interceptors.response;
// 2.2响应拦截
      instance.interceptors.response.use(res=>{
        // console.log(res);//响应拿到的是结果，所以是result
        return res.data
      },err=>{
        console.log(err);
      })
// 3.发送真正的网络请求
return instance(config)


}

