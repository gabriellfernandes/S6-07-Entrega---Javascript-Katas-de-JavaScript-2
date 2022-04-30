// comece a criar a sua função add na linha abaixo
function add(a,b){
    soma = a + b
    return soma
}
// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(a,b){

    let mult = 0
    
    for(let i = 0; i < b; i++){
        mult = add(mult,a)
    }

    return mult
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(a,b){
    
    let pow = 1
    
    for(let i = 0; i < b; i++){
        
        pow = multiply(pow,a)
    }

    return pow
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(x){
    let fat = 1
    
    for (let i = 1 ;i <= x; i++){    
        fat = multiply(fat,i)
    }

    return fat
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(x){
    let n = [0, 1]
    let resultado = 0
    
    for (let i = 0 ;i < x; i++){    
        n.push(add(n[i],n[add(i,1)]))
    }

    resultado = n[x]

    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
