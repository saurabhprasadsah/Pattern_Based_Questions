//for every row print some space followed by some starts.
// let n = 10;
// for (let row = 1; row <= n; row += 1) {
//         let str = "";
//         //no of spaces in the current row
//         let space = n - row;
//         for (let j = 1; j <= space; j += 1) {
//             str += " ";
//         }
//         let stars = row;
//         for (let col = 1; col <= stars; col += 1) {
//             str += "*";
//         }
//         console.log(str);
// }
function pattern3(n){
        for (let row = 1; row <= n; row += 1) {
            //task -- <some spaces><some starts>
            // n = 7, row = 3, "     ***"---> this string will be printing for this
            //so lets build the space first;
                let str = "";
                //no of spaces in the current row
                let space = n - row;
                for (let j = 1; j <= space; j += 1) {
                    str += " ";
                }
                // after the above loop ends we will have having (n - row) spaces;
                let stars = row;
                // console.log(stars)
                for (let col = 1; col <= stars; col += 1) {
                    str += "*";
                }
                console.log(str);
        }
}
pattern3(5)