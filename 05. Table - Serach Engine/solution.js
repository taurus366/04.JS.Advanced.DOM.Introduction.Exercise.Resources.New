function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
    const rows = document.querySelectorAll('tbody>tr');

    // function filter(input) {
    //    return input !== '' || input !== "" || input !== ' ' || input !== " " ? input : 1;
    // }
    function isEmptyString(x) {
        return x !== '' || x.length !== 0;
    }

    // function toArr(input) {
    //  let arr2 = input.filter(filter(input));
    //  console.log(arr2);
    //
    // }

    function onClick() {
        let userInput = document.getElementById('searchField').value;


        //   TODO:
        // Array.from(rows)
        //     .forEach(val => {
        //        let arr = val.textContent.split('\n')
        //            .filter(isEmptyString)
        //            .map(x => x.trim())
        //            .filter(isEmptyString)
        //            .forEach(re => {
        //               if (re.includes(userInput)){
        //                val.setAttributeNode()
        //               }else {
        //                  // TODO:
        //               }
        //            })
        //       //console.log(arr);
        //
        //     })
        for (const row of rows) {
            if (userInput.length === 0) {
                if (row.classList.contains('select')) {
                    row.setAttribute('class', '');
                }
            } else if (row.textContent.includes(userInput)) {
                row.setAttribute('class', 'select');
            } else {
                row.setAttribute('class', '');
            }

        }
    }
}