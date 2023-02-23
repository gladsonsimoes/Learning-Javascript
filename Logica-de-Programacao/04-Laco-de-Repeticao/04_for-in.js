/* for ... in
Existe uma segunda forma de se utilizar os laços for para percorrer propriedades
de um objeto.
Exemplo:
*/

var doc = document;
for(var prop in doc) {
document.write(prop+"<br />");
}
// Esse laço automaticamente itera pelas propriedades do objeto,
// No caso ele listara todas as propriedades do objeto Document
// responsavel pelo controle do documento exibido na tela.
// Se olhar com cuidado encontrará nessa lista o proprio método
// Write que usamos para imprimir no documento com document.write.

