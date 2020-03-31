/**************axios封装***************/
import http from "./http"
function formData(item) {
    //转换成表单
    let form = new FormData();
    for (let key in item) {
        form.append(key, item[key]);
        // //console.log(form.get(key));
    }
    return form;
}
 function request(url,method="get",data,headerType={"Content-type":"application/x-www-form-urlencoded"}){
      return new Promise((resolve, reject)=>{
          if(method=="get"){
              http.get(url,{
                params:data
              }).then((res)=>{
                  resolve(res.data)                //axios其他信息过滤掉，只拿res里的data数据
              }).catch(error=>{
                  reject(error)
              })
           }else if(method=="post"){
              if(headerType["Content-type"]=="application/x-www-form-urlencoded"){
                 data =  formData(data)
              }
              http.post(url,data,{
                  headers: headerType             //请求头的数据格式
              }).then((res)=>{
                  resolve(res.data)               //axios其他信息过滤掉，只拿res里的data数据
              }).catch(error=>{
                  reject(error)
              })
          }

      })
}
export  default  request