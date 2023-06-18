
let caixa = '';

if(localStorage.getItem('caixa') == null){
    let caixa = []
    caixa = JSON.stringify(caixa)
    localStorage.setItem('caixa', caixa)
    location.reload()
} else{
    caixa = localStorage.getItem('caixa');
    caixa = JSON.parse(caixa)
}

class Tarefa{
    constructor(nome, descricao){
        this.nome = nome;
        this.descricao = descricao;
    }

}





function CriarTarefa(){
    let titulo = document.querySelector('#titulo')
    let descricao= document.querySelector('#descricao')
    let TarefaObj = new Tarefa(titulo.value, descricao.value)
    caixa.push(TarefaObj)
    console.log(caixa)
    localStorage.setItem('caixa', JSON.stringify(caixa))
    location.reload()

    carregar()

    

}

function carregar(){
 
  
        caixa.forEach(function(t){
            let titulo = t.nome;
            let list= document.querySelector('.list_tarefa');
            let tarefa = document.createElement('li');
            tarefa.classList.add('tarefa');

            let box = document.createElement('input');
            box.type = 'checkbox';
            tarefa.insertAdjacentElement('afterbegin', box)

           let span = document.createElement('span');
           span.innerHTML = titulo;
           tarefa.insertAdjacentElement('beforeend', span)
           span.classList.add('titulo')

           let btn = document.createElement('input')
           btn.value = 'Excluir';
           btn.type ='button';
           btn.classList.add('btn')


           btn.onclick = function(){
            
            let ps = titulo;
            caixa.forEach(function(a){

                if(a.nome == ps){
                    let id = caixa.indexOf(a);
                    caixa.splice(id, 1)
                     console.log(caixa)
                     localStorage.setItem('caixa', JSON.stringify(caixa))
                     location.reload()
                    
                    
                }
            })

           }



           tarefa.insertAdjacentElement('beforeend', btn)



            //tarefa.innerText = titulo;
            list.insertAdjacentElement('beforeend', tarefa)
            
        })
    

    
}



