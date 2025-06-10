function patern2(n){
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
patern2(5)