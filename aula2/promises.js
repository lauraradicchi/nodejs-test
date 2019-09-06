var fs = require('fs');
var Q = require('q'); 

function readArquivo(){

    var deferred = Q.defer();
    console.log('Lendo arquivo 1');
    
    fs.readFile('arquivo1.txt',"UTF-8",function (err, arquivo1) {
        deferred.resolve(arquivo1);
    });
    return deferred.promise;
}

function readArquivo2(){

    var deferred = Q.defer();
    console.log('Lendo arquivo 2');
    fs.readFile('arquivo2.txt', 'UTF-8', function (err, arquivo2) {
        deferred.resolve(arquivo2);
    });
    return deferred.promise;
}

function writeArquivo3(conteudo){
    var deferred = Q.defer();
    fs.writeFile('arquivo3.txt', conteudo, function (err ) {
        deferred.resolve(true);
    });
    return deferred.promise;
}


var conteudo = "";
readArquivo()
    .then(function(arquivo1){
        conteudo += arquivo1;
        return readArquivo2();
    })
    .then(function(arquivo2){
        conteudo+= arquivo2;
        return writeArquivo3(conteudo);
    }).then(function(){
    console.log(conteudo);
});

