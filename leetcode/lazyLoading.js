openDialog('正在读取数据') // 打开弹框
fetchDatas('/api/sutmit') // fetchDatas返回一个Promise对象
  .then(resp => {
    // 关闭弹框
    closeDialog()
  })
// 这是一段很普通的代码，在发起异步请求的时候打开一个弹窗，等数据加载回来之后关闭弹窗，
// 由于异步请求数据返回的时间不确定，如果数据返回过快，会造成弹框刚打开就立马关闭（闪屏），用户可能还没来得及看清楚弹框内的提示，体验不好
// 现在需要保证这个弹框至少显示3秒钟

// 实现lazyLoading这个函数，保证closeDialog这个函数在异步请求发出后至少3秒后才能执行
fetchDatas = lazyLoading(fetchDatas)

openDialog('正在读取数据') // 打开弹框
fetchDatas('/api/sutmit') // fetchDatas返回一个Promise对象
  .then(resp => {
    // 关闭弹框
    closeDialog()
  })



// 实现代码
function lazyLoading (oldfetch) {
  let func = (...args) => {
    return new Promise( (resolve, reject) => {
        let timeStart = new Date().getTime()
        oldfetch.apply(null, args).then(resp => {
          let timeEnd = new Date().getTime()
          if (timeEnd - timeStart < 3000) {
            setTimeout( function () { resolve(resp) }, 3000 - (timeEnd - timeStart) )
          } else {
            resolve(resp)
          }
        }).catch(err => reject(err))
    } )
  }

  return func
}
