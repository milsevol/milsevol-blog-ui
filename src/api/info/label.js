import request from '@/utils/request'

// 查询标签列表
export function getInfoLabelList(data){
    return request({
        url:'/info/label/list',
        method:'get',
        params:data
    })
}

// 查询标
export function getInfoLabel(data){
    return request({
        url:'/info/label',
        method:'get',
        params:data
    })
}

