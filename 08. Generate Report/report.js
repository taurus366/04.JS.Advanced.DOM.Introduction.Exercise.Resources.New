function generateReport() {

    let types = document.querySelectorAll('table>thead>tr>th');

    let names = document.querySelectorAll('table>tbody>tr');


    let tables = [];
    for (let i = 0; i < names.length; i++) {
        let object = {};
        for (let j = 0; j < types.length; j++) {
            let arr = names[i].textContent.split('\n')
                .map(re => re.trim())
                .filter(re => re !== '');
            if (types[j].querySelector('input').checked) {
                object[types[j].textContent.trim().toLowerCase()] = arr[j];
            }
        }
        tables.push(object);


    }


   // console.log(tables)

    document.getElementById('output').textContent = JSON.stringify(tables);

}