// number of star will be star will printing
/*
row 1 ---> 1
row 2 ---> 3
row 3 ---> 5
row 4 ---> 7
row 5 ---> 9
*/

// space ---> 2x - 1;

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
                let stars = 2 * row - 1;
                // console.log(stars)
                for (let col = 1; col <= stars; col += 1) {
                    str += "*";
                }
                console.log(str);
        }
}
pattern3(5)




