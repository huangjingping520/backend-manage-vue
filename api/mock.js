import Mock from 'mockjs'
import homeApi from './mockServeData/home.js'
import userApi from './mockServeData/user.js'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/api\/user\/add/, 'post', userApi.createUser)
Mock.mock(/api\/user\/edit/, 'post', userApi.updateUser)