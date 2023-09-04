import { MessageBox } from 'element-ui'

export default function myconfirm(text) {
  return new Promise((resolve, reject) => {
    MessageBox.confirm(text, '系统提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      resolve(true)
    }).catch(() => {
      reject(false)
    })
  }).catch(() => {
    return false
  })
}
