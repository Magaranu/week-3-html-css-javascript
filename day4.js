// for (var i =0; i<=100;i=i+2){


// console.log(i,"anushka")
// }
// // while loop
// var i = 0
// while(i<=5){
//     console.log(i,"anushka")
//     i++
// }
//  do while loop
// let i= 0
// do{
//     console.log(i,"anushka")
//     i++
// }
// while(i<=5){
// }
 
// acces data
var response ={
    
    // status: 100,
    // message:"success",
    // data:[
    //     {

        id: 1,
        age: 22,
        name:"anushka",
        nationality: "nepali"
    }
// ]
// }
// console.log(response.data[0].age)
for(let key in response){
    console.log(response[key])
}
var names = ["anushka", "sujan", "sujal", "sujita"]
for (let name of names){
    console.log(name)


}