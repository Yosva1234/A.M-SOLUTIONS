document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault(); 

  const usuarioCorrecto = getelement('/username');
  const contraseñaCorrecta = getelement('/password');


  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === usuarioCorrecto && password === contraseñaCorrecta) {

    window.location.href = "bienvenido.html"; 
  } else {
 
    alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
  }
});

function getelement(element) {
  return fetch(element)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => data.valor)
      .catch(error => {
          console.error('Hubo un problema con la solicitud:', error);
      });
}

