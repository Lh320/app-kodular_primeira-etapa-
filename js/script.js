




function gerarCartao() {
  
    let idade = document.getElementById('idade').value;
    let nome = document.getElementById('nome').value;
    let data = document.getElementById('data').value;
    let email = document.getElementById('email').value;
    let planoSelecionado = document.getElementById('plano').value;
    
    let salario = document.getElementById('salario').value;
    let precoplano;
    let novosalario;
    
    let cartao = document.createElement('div');
    cartao.classList.add('carta1');
    
    
    let criarcartao = document.getElementById('cartao');
    criarcartao.appendChild(cartao);
    
    if(idade >= 18){
    
     if( planoSelecionado == "Empresarial"){
      cartao.classList.add('carta1');
  
  
      precoplano = 150;
       novosalario = precoplano - salario;
      console.log(`${novosalario}`)
  
      
       } else if (planoSelecionado == "Premium" ){
        
        precoplano = 300;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
  
        cartao.classList.add('carta2');
  
     } else if ( planoSelecionado == "Profissional"){
  
      precoplano = 500;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
      
      cartao.classList.add('carta3');
  
       } else if ( planoSelecionado == "Intermediário"){
  
        precoplano = 80;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
      
        cartao.classList.add('carta4');
  
       } else if ( planoSelecionado == "Simples"  ){
  
        precoplano = 50;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
  
        cartao.classList.add('carta5');
      
  
      } else if ( planoSelecionado == "Corporativo" ){
  
        precoplano = 800;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
  
        cartao.classList.add('carta6');
      
  
      } else if ( planoSelecionado == "Para_ONGs"   ){
  
        precoplano = 100;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
  
        cartao.classList.add('carta7');
      
  
      } else  if (planoSelecionado == "Para_Escolas" )  {
  
        precoplano = 200;
         novosalario = precoplano - salario;
        console.log(`${novosalario}`)
        
        cartao.classList.add('carta8');
    }
  
    cartao.innerHTML = `
    <h2>Cartão de Internet</h2>
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Data de Aniversário:</strong> ${data}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Plano Escolhido:</strong> ${planoSelecionado} </p>
    <p><strong>Seu novo salario é :</strong> ${novosalario*-1} </p>
    <p><img src="img/terceira-logo(horizontal-logo-branca).png" alt=""></p>
    
   
    `
  } else{
    window.location.href = "menor/index.html";
  } 
  
  
  
  }
  