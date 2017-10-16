// 将数据结构转换为树状图

var data = [{
  province: '广东省',
  city: '广州市',
  name: '天河区'
},{
  province: '浙江省',
  city: '杭州市',
  name: '西湖区'
},{
  province: '广东省',
  city: '广州市',
  name: '海珠区'
},{
  province: '北京市',
  city: '北京市',
  name: '海淀区'
}]

var keys = ['province', 'city', 'name']


const transObject = function(objs, keys) {
  const hashTable = {}, result = []

  for (let i = 0; i < objs.length; i++) {
    let hash = hashTable, arr = result

    for (let j = 0; j < keys.length; j++) {
      let key = keys[j], filed = objs[i][key]

      if (!hash[filed]) {
        let pusher = { value: filed }

        if (j < keys.length - 1) {
          pusher.children = []
        }

        arr.push(pusher)
        hash[filed] = {
          $$pos: arr.length - 1
        }
      }

      hash = hash[filed]
      arr = arr[hash.$$pos].children

    }
  }

  return result
}

transObject(data, keys)
