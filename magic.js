/* Magic which makes this ball magical */
(function() {

  window.magic8 = {
    username : 'You',
    state : 'happy',
    
    eight : document.getElementById('eightSide'),
     ball : document.getElementById('magic8Ball'),
      tri : document.getElementById('answer'),
      box : document.getElementById('magicLog'),
        Q : document.getElementById('question'),
    
    n : 0,
    answered : 0,
    answers : ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'],
    
    /* shake the 8-ball */
    shake : function() {
      if (/shake/.test(magic8.ball.className)) return;
      if (magic8.state == 'angry') {
        window.setTimeout(function() {
          var revisit = confirm('The Magic 8-ball appears to be upset, maybe you should ask it a question later.');
          revisit && window.location.reload();
        }, 5000);
        return magic8.log('', 'I\'m not answering you... impostor !.. Now go away !!');
      }
    
      magic8.answered++;
      magic8.n = Math.floor(Math.random() * 20);
      magic8.ball.className = 'shake';
      magic8.eight.className = magic8.eight.className.replace(/hidden/, '');
      magic8.tri.src = 'answers/' + magic8.n + '.png';
    
      magic8.log(magic8.Q.value, magic8.answers[magic8.n]);
      window.setTimeout(function() {
        magic8.ball.className = '';
        magic8.eight.className += ' hidden';
      }, 1000);
    },
    
    /* update the log with questions and answers */
    log : function(question, answer) {
      var Q, A;
      magic8.Q.value = '';
      
      if (question) {
        Q = document.createElement('P');
        Q.innerHTML = '<span class="user">' + magic8.username + ' : </span>' + question;
        magic8.box.appendChild(Q);
        magic8.box.scrollTop = 99999;
      }
      
      if (answer) {
        A = document.createElement('P');
        A.innerHTML = '<span class="the-8-ball">Magic 8-ball : </span>' + answer;
        window.setTimeout(function() {
          magic8.box.appendChild(A);
          magic8.box.scrollTop = 99999;
        }, 1000);
      }
    }
  };
  
  magic8.ball.onclick = magic8.shake;
  document.getElementById('ask').onclick = magic8.shake;
  
  magic8.Q.onkeyup = function(e) {
    if (e.keyCode == 13) magic8.shake();
  };
  
  /* Change your username */
  document.getElementById('username').onclick = function() {
    var name = prompt('Tell the Magic 8-ball your name ?', magic8.username);
    
    if (name) {
      /* If the name matches the almighty 8-ball, then the ball will mock you */
      if (/^Magic 8-ball$/i.test(name)) {
        magic8.log('', 'HOW DARE YOU TRY AND IMPOSTOR ME !');
        magic8.log('', 'You know what... I\'ll dub you the "Unmagical 8-ball" and hide the naming button with my magic !');
        
        name = 'Unmagical 8-ball';
        this.style.display = 'none';
        
        magic8.state = 'angry';
        magic8.tri.src = 'answers/mad.png';
      } else magic8.log('', 'Nice to meet you, ' + name + ' !');
      
      magic8.username = name;
      for (var a, b = document.getElementsByTagName('SPAN'), i = 0; a = b[i]; i++) {
        if (/user/.test(a.className)) a.innerHTML = name + ' : ';
      }
    }
    
    return false;
  };
  
  document.getElementById('help').onclick = function() {
    alert('Click the Magic 8-Ball to generate a random answer. The ball will display the answer as well as the box below.\n\nYou can also type a question in the box below, and press the ENTER key or the ASK button to generate an answer.\n\nNOTE : If you happen to upset the 8-ball, press F5. ( It\'s touchy about others pretending to be it )');
    return false;
  };
  
})();