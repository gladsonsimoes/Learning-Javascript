
        //sem vetor
        // var pessoa1 = "Ramon";
        // var pessoa2 = "Gladson";
        // var pessoa3 = "João";
        // console.log (pessoa1)
         
        // " var listPessoa = Array() " e o " var listaPessoa = [] " é a mesma coisa

        var listaPessoa = [];
        listaPessoa[0] = "Ramon";
        listaPessoa[1] = "Gladson";
        listaPessoa[2] = "João";

        console.log(listaPessoa);

        var listaAlunos = ["Lucas", "Francisco", "José" , "Renato"];

        console.log(listaAlunos);

        listaAlunos[4] = "Gladson";

        console.log(listaAlunos);

        //Inserindo itens no final do vetor
        listaAlunos.push("Reinado");
        console.log(listaAlunos);

        //Inserindo itens no começo do vetor
        listaAlunos.unshift("Júlio");
        console.log(listaAlunos);

        //Removendo itens no final do vetor
        listaAlunos.pop();
        console.log(listaAlunos);

        //Removendo itens no começo do vetor
        listaAlunos.shift();
        console.log(listaAlunos);

        //ordenando vetor ordem alfabetica
        listaAlunos.sort();
        console.log(listaAlunos);   

        //vetor variado
        var vetorCoisas = []
        vetorCoisas[0] = "Olá";
        vetorCoisas [1] = 2022;
        vetorCoisas [2] = true;
        vetorCoisas ["nome"] = "Ramon";
        vetorCoisas ["funcao"] = function teste(){};
        console.log(vetorCoisas);
        console.log(vetorCoisas ["nome"]); 
