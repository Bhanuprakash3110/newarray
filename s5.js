function generatepassword(length,includenumbers=true,includeSpecial=false){
    const uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseletters="abcdefghijklmnopqrstuvwxyz";
    const numbers="0123456789";
    const specialchars="!@#$%^&*()_+{}[]/<>?',.";

    let charpool=lowercaseletters+uppercaseletters

    if(includenumbers){
        charpool+=numbers;
    }
    if(includeSpecial){
        charpool+=specialchars;

    }
    
    let password='';

    password+=uppercaseletters[Math.floor(Math.random()*uppercaseletters.length)]

    if(includenumbers){
        password+=numbers[Math.floor(Math.random()*numbers.length)];
    }

    if(includeSpecial){
        password+=specialchars[Math.floor(Math.random()*specialchars.length)];
    }

    for(let i=password.length;i<length;i++){
        password+=charpool[Math.floor(Math.random()*charpool.length)];
    }
    return password;
}
console.log(generatepassword(10,true,true))
