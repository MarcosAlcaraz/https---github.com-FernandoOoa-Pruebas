// La siguiente función nos ayuda a contar el total de parametro necesitados
export function GetAttributes(text){
    let CurrentWord = '';
    let ContWord = 0;
    let Flag  = true;
    let Flag2 = false;
    let ListParams = [];
    while (Flag && ContWord < text.length){
        if(Flag2 && text[ContWord] !== ',' && text[ContWord] !== ' '){
            CurrentWord += text[ContWord];
        }
        else if (text[ContWord] === "("){
            Flag2 = true;
        }
        ContWord++ ;
        if( (Flag2 && text[ContWord] === ',') || (text[ContWord] === ')')){
            ListParams.push(CurrentWord);
            CurrentWord = "";
            if(text[ContWord] === ')'){
                Flag = false;
                Flag2 = false;
            }
        }
    }
    return (ListParams);
}

//con esta funcion obtenemos el nombre de la función que el ususario esta consultando
export function GetNameFunction(text){
    let ContWord = 0;
    let Flag = true;
    let Name = '';
    let Characters = ['',''];
    while (Flag && ContWord < text.length){
        if( Characters[0] !== '' && Characters[1] === '' ){
            if(text[ContWord] === ' '){
                Characters[1] = ' ';
            }
        }
        else if( Characters[0] !== '' && Characters[1] !== '' ){
            if( ( text[ContWord] ==="(" || text[ContWord] === ' ' ) && Name.length >= 1 ){
                Flag = false;
            }
            if(text[ContWord] !== ' ' && text[ContWord] !== '('){
                Name += text[ContWord];
            }
        }
        else if( Characters[0] === '' && Characters[1] === '' ){
            if(text[ContWord] !== ' '){
                Characters[0] = '#';
            }
        }
        ContWord ++;
    }
    return(Name);
}