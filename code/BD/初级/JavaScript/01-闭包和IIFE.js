// 任务一
// 基于 students 数组和 map()，编写匿名回调函数在 map()中调用，按如下要求处理 students 数据

// 以下面的格式为数组中的每个项目返回一个字符串： <name> :学号 <ID> 总分<score>排名第<rank>
// 将返回的数据存储在新的 studentsFullInfo 变量中
// 不要删除 musicData 变量
// 请勿更改任何 musicData 内容

let students = [
  { name: "Susan", ID: 1, score: "90", rank: 6 },
  { name: "Jackson", ID: 2, score: "88", rank: 7 },
  { name: "Bob", ID: 3, score: "45", rank: 18 },
  { name: "Jennie", ID: 3, score: "99", rank: 1 },
  { name: "Amy", ID: 3, score: "39", rank: 21 },
  { name: "Lisa", ID: 3, score: "78", rank: 8 },
];

let studentsFullInfo = students.map(student =>{
  return `${student.name}:学号${student.ID} 总分${student.score} 排名第${student.rank}`
})
// console.log(studentsFullInfo);


// 任务二
// 基于 students 数组和 filter()，编写匿名回调函数在 filter()中调用，按如下要求处理 students 数据

// 筛选出成绩不及格的学生，
// 将返回的数据存储在新的 failList 变量中

let failList = students.filter(student=>{
  return student.score<60
})
// console.log(failList);

// 任务三
// 参考数组方法forEach (opens new window)方法功能,编码实现一个 foreach()函数

Array.prototype.forEach1 = function (cb){

  let thisArg  = arguments[1]||window
  let _arr = this
  // let index = this
  // let array = this
  for (let i = 0; i < _arr.length; i++) {
    cb.call(thisArg,_arr[i],i,_arr)
  }
}
// students.forEach((x,index)=>console.log(x,index))
// students.forEach1(((x,i)=>console.log(x,i)),this)


// 任务
// 编写一个闭包函数实现一个函数式编程,完成两个非递减数组按顺序合并功能函数,调用形式 -> merge(arr1)(arr2)。

// 给你两个按 非递减顺序 排列的整数数组  arr1 和 arr2,请你 合并 arr2 到 arr1 中，使合并后的数组同样按 非递减顺序 排列。
function merge(arr1) {
  return function fn1 (arr2) {
    arr1= [...arr1,...arr2]
    arr1.sort()
    return arr1
  }
  fn1()
}
console.log(merge([1, 5, 8])([2, 4])); // =>[1,2,4,5,8]
console.log(merge([6, 9])([1, 2])); // =>[1,2,6,9]

