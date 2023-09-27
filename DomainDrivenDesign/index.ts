import  {TennisSet}  from "./Domain/TennisSet"


const tennis = new TennisSet('juanito','pedro');
try {
  tennis.AddPoint('juanito')
  const p = tennis.AddPoint('juanito')
  const a = tennis.AddPoint('pedro')

console.log(p,a)
} catch (error:any){
  console.log(error.message)
}
