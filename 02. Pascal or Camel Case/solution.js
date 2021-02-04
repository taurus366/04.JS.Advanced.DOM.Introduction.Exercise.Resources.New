function solve() {

  let [text , type] = document.getElementsByTagName('input');

    function camelCase(input) {
        let arrr = input.split(' ');

        let counter = 0;
      return  arrr
            .map(result => {
                counter ++ ;
               return  counter === 1 ? result.substr(0,1).toLowerCase() + result.substr(1).toLowerCase() : result.substr(0,1).toUpperCase() + result.substr(1).toLowerCase();

            })
    }

    function pascalCase(input) {
        arrr = input.split(' ');

        return arrr
            .map(result => result.substr(0,1).toUpperCase() + result.substr(1).toLowerCase())
    }
    let text2 = '';
    switch (type.value) {
        case 'Camel Case' :
      text2 =  camelCase(text.value).join('');
            break;
        case 'Pascal Case' :
            text2 = pascalCase(text.value).join('');
            break;
        default : text2 = 'Error!';
    }

    document.getElementById('result').textContent = text2;
}