import request from '@/utils/request'

// 根据标签查询资讯列表
export function getInfoList(data){
    return request({
        url:'/info/list',
        method:'get',
        // params:data
    })
}