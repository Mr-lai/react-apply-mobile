 // 定义泛型
  type Params =[
    number
]
import  {unionRedData,unionBlueData,lottoRedData,lottoBlueData,eightHappy } from './data';
const handleConventionArr = (killBlueObj, killRedObj, value, radioValue, stepperValue) => { 
  console.log(killBlueObj, killRedObj, value, radioValue, stepperValue);
  const resultData = []
  if (value === 'union') {
    const arr = [...new Set([...unionRedData, ...killRedObj])]
    for (let index = 0; index < arr.length; index++) {
      if(Number(arr[index])>=34){
          delete arr[index]
        }
    }
    const arr1 = [...new Set([...unionBlueData, ...killBlueObj])]
    for (let index = 0; index < arr.length; index++) {
      if(Number(arr[index])>=17){
          delete arr1[index]
        }
    }
    if (radioValue === 'rule') {
      console.log(arr,arr1);
      
      for (let index = 0; index < stepperValue; index++) {
        resultData.push({
          red:getRandomArrayElements(arr,6).sort((a,b)=> a-b),
          blue: getRandomArrayElements(arr1,1).sort((a,b)=> a-b)
        })
      }
      return resultData
    }
  }
}
const handleDoubleArr = (killBlueObj, killRedObj, value, radioValue, redDouble, blueDouble) => { 
  console.log(killBlueObj, killRedObj, value, radioValue, redDouble, blueDouble);
  const resultData = []
  if (value === 'union') {
    const arr = [...new Set([...unionRedData, ...killRedObj])]
    for (let index = 0; index < arr.length; index++) {
      if(Number(arr[index])>=34){
          delete arr[index]
        }
    }
    const arr1 = [...new Set([...unionBlueData, ...killBlueObj])]
    for (let index = 0; index < arr.length; index++) {
      if(Number(arr[index])>=17){
          delete arr1[index]
        }
    }
    if (radioValue === 'double') {
        resultData.push({
          red:getRandomArrayElements(arr,redDouble).sort((a,b)=> a-b),
          blue: getRandomArrayElements(arr1,blueDouble).sort((a,b)=> a-b)
        })
    
      return resultData
    }
  }

}
const getRandomArrayElements = (arr: Array<Params>, count: number) => {
  let i = arr.length
  const min = i - count
  let temp = []
  let index = 0
  const shuffled = arr.slice(0);  //只是声明变量的方式, 也可以分开写
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random()); //这里的+1 是因为上面i--的操作  所以要加回来
      temp = shuffled[index];  //即值交换
      shuffled[index] = shuffled[i]; 
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

export {getRandomArrayElements,handleConventionArr,handleDoubleArr}