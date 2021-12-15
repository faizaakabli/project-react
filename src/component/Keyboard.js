import React from 'react';

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
export default function Keyboard(){
    const numbers = letter.split('');
   
    const listItems = numbers.map((numbers) => <button>{numbers}</button>)
    console.log(numbers);
    return (
       listItems
       
    )
}
