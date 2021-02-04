function search() {

    const inputText = document.getElementById('searchText').value;
    const ellements = document.querySelectorAll('#towns>li');
    let result = document.getElementById('result');
    let counter = 0;
    for (let i = 0; i < ellements.length; i++) {
        let temp2 = ellements[i];


        let temp = ellements[i].textContent.toLowerCase();
        if (temp.includes(inputText.toLowerCase()) && inputText.length !== 0) {
            console.log(ellements[i])

            temp2.style.fontWeight = 'bold';
            temp2.style.textDecoration = 'underline'

            counter++;

        }else {
            temp2.style.fontWeight = 'normal';
            temp2.style.textDecoration = 'none';
        }
    }

    result.textContent = `${counter} matches found`;

}
