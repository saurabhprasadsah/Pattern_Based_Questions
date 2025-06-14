// function fizzbuzz(n){
//     console.time("fizzbuzz time")
//     for(let i = 1; i <= n; i++){
//         if(i % 3 ===  0 && i % 5 === 0){
//             console.log("fizzbuzz")
//         }else if(i % 3 === 0){
//           console.log("fizz")
//         }else if( i % 5 === 0){
//             console.log("buzz")
//         }else{
//             console.log(i)
//         }
//     }
//     console.timeEnd("fizzbuzz time")
// }

// fizzbuzz(15)

// using flag i want to 
function fizzbuzz(n){
    for(let i = 1; i <= n; i++){
        let flag = "";
        if(i % 3 === 0){
            flag = flag + "fizz"
        }
        if(i % 5 === 0){
            flag = flag + "buzz"
        }
        console.log(flag || i)
    }
}
fizzbuzz(15)


