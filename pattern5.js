/*
*
**
***
****
*****
******
*******
*/

// function pattern2(n){
//     for(let row = 1; row <= n; row += 1){
//         let str = "";
//         for (col = 1; col <= row; col += 1){
//             str += "*"
//         }
//         console.log(str)
//     }
// }

// pattern2(4)

/*
*****
****
***
**
*
*/

/*
In this star of print the value of star will be n - row + 1
                                                5 -  1 + 1 = 5 star for this one
                                                4 -  1 + 1 = 4 star for this one
*/


function pattern5(n){
    for(let row = 1; row <= n; row += 1){
        //task
        // the task is to concatenate "*" n - row -1 times
        let str = "";
        for (let col = 1; col <= n - row + 1; col += 1){
            str += "*"
        }
        console.log(str)
    }
}

pattern5(5)
