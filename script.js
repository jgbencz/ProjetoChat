const botaoInicio = document.getElementById('botaoinicio');
const trans = document.getElementById('trans');

// verifica se o navegador suporta a API do speech
if ('webkitSpeechRecognition' in window) {
  const reconhecimento = new webkitSpeechRecognition();
  // diz que o processo de reconhecimento sera continuo
  reconhecimento.continuous = true;
  // diz que o processo sera feito em partes, ou seja, ira escrever palavra por palavra
  reconhecimento.interimResults = true;

  // coloca o idioma em portugues
  reconhecimento.lang = 'pt-BR';

  // quando falar este evento acontecera (ate rimou)
  reconhecimento.onresult = function(event) {
    const resultadofala = event.results[event.results.length - 1][0].transcript;
    console.log(resultadofala);
    // vai la no html, no elemento trans, e escreve o que ta sendo dito e armazenado no resultadofala
    trans.innerText = resultadofala;
  };

  botaoInicio.addEventListener('click', () => {
    reconhecimento.start();
  });
}
// se tudo der errado aqui esta o refugio
else {
  trans.innerText = 'Reconhecimento de fala não suportado';
}