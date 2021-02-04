function solve() {

    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    let arr2 = [];

    let counter = 0;
    for (let i = 0; i < input.length; i++) {
    if (input[i] === '.'){
        if (i !== 0){
            counter++;
        }else {
          input =  input.substring(i+1);
            i = -1;
        }

    }
    if (counter === 3){
        if (input.substring(0,i+1).length > 0){
            arr2.push(input.substring(0,i+1));
        }

      input = input.substring(i+1);
        counter = 0;
        i = -1;
    }
    if (input.length -1 === i){
        arr2.push(input);
    }
    }

    // for (let i = 0; i < arr.length; i++) {
    //
    // }
  //  console.log(arr2.join(''));
    //output.textContent = input.textContent;
    for (const arr2Element of arr2) {
        output.innerHTML += `<p>${arr2Element}</p>`
    }
   // output.innerHTML = `<p> ${arr2.join('')} </p>`



}