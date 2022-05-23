const Person = (name,age)=>{
  return{
    name,
    age,
    birthday(){
      console.log(`${name}长大了一岁`);
      age++
    },
    eat(){
      console.log(`${name}正在吃饭`);
    }
  }
}

// 工厂模式实现继承

const Student = (name, age, job) => {
  const prototype = Person(name, age); //继承 Person 对象
  return Object.assign({}, prototype, {
    job,
    study() {
      console.log(`${name}正在学习`);
    },
  });
};

let student1 = Student('Ian',27,'student')
// console.log(student1);

// let obj1 = {
//   a:1,
//   b:3,
//   c:6
// }
// let {b,c} = obj1
// console.log(b);