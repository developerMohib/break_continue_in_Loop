
/* ------------- Break -------------------*/
/* 
    Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

let number = 0 ;
let given_number = 10;
document.write('I have 200. but it stop when hit 10 = ')
while(number <= 200 ){
    if(number === given_number){
        break;
    }
    number++;
    document.write( number + ' ');
}


/* 
    Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
document.write('<br>Stop When you find summation exceeds 100 <br>');
let number1 = 1;
let sum = 0;
let total = 100;
while(number1 < 100){
    document.write(number1 + ' ');
    number1++
    sum = sum + number1;
    if( sum >= total){
        document.write('i am done.');
        break;
    }
}
let result = sum;
document.write('summation = '+ result);

/* 
    Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

document.write('<br> Find Out the Number which one is the nearest square. <br> ');

let number2 = 1;
let square_num = 4 ;
while(number2 <= 20){
    document.write(number2 + ' ')
    number2++;
    if(square_num === number2){
        document.write('i find a square Number =' + square_num);
        break;
    }

}
/* ------------- Continue -------------------*/

/* 
    Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
document.write('<br> This is Even Number Loop---<br>');

for ( let evNm = 1 ; evNm <= 40; evNm++){
    if(evNm % 2 == 0){
        continue
    }
    document.write( evNm + ' ');
}
document.write('<br> This is Odd Number Loop----<br>');

let evenNm = 1;
while(evenNm <= 40){
    evenNm++;
    if(evenNm % 2 !== 0 ){
        continue
    }
    document.write(evenNm + ' ');
}
/*
    display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
document.write('<br> Display odd number from 55 to 85 and skip the numbers divisible by 5----<br>');
let aNumber = 55;
while (aNumber < 85){
    aNumber++;
    if(aNumber % 2 !== 0 && aNumber % 5 == 0)
    document.write(aNumber + ' ') ;
}
