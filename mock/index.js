import Mock from 'mockjs'
import label from './api/info/label.js'
import info from './api/info/info.js'
const baseURL = process.env.VUE_APP_BASE_API
Mock.mock(`${baseURL}/info/label/list`, 'get', () => {
  return label.getInfoLabelList
})

Mock.mock(`${baseURL}/info/list`, 'get', () => {
  return info.getInfoList
})