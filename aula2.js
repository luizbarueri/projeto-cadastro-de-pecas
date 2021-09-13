//tipos de variaveis
//var
//let
//const
const alunos = ['Marcos', 'Jr', 'Paula'];
console.log('quantidade de caracteres');
if (alunos.length <= 10) {
    console.log('os alunos podem ser cadastrados');
    console.log("quantidade de alunos: " + alunos.length)
}
console.log('quantidade de caracteres');
for (let index = 0; index < alunos.length; index ++) {
    const atual = alunos[index];
    if (atual.length < 3) {
        console.log(atual + ' o aluno possui nome inferior a 3 caracteres e não pode ser cadastrado.')
    } else {
        console.log(atual + " : o aluno(a) pode ser cadastrado: " + atual.length + " caracteres.");
    }
}
