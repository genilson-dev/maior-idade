const MaiorIdade = (media) => {
    if (media < 16){
        return `Sua idade é ${media}, você é menor de idade e não pode votar`;
    } else if((media >= 16 && media < 18) || media >= 70){
        return `Sua idade é ${media} anos, você é menor de idade ou tem mais de 70, pode fazer o voto facultativo`;
    } else if(media >= 18 && media < 70){
        return `Sua idade é ${media} anos, você é maior de idade e seu voto é obrigatório`;
    } else {
        return `Sua idade é ${media} anos, e não é uma idade válida`;
    }
}

const result = MaiorIdade(16);
console.log(result);
