/*
Diamond like stracture
    *
  * * *
* * * * *
  * * *
    * 
for the every row the it should be return the odd number for this one
*/


function uppertriangle(n){
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


function lowertriangle(n){
    // the lower triangle consist of only n - 1 rows
    for(let row = 1; row <= n - 1; row += 1){
        // for any given number row we have spaces = row
        let str = "";
        let spaces = row;
        for (let j = 1; j <= spaces; j += 1){
            str  += " ";
        }

        // for every row, when you increase the row number we decrease no of stars.
        // by observation we get 2*(n - row)
        let stars = 2*(n - row) - 1;
       
    }
}



