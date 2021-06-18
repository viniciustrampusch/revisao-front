/*console.log('Ordem 1');

axios.get('http://localhost:8080/usuario')
     .then(response => {
         console.log(response.data);
         console.log('Ordem 2');
      })
     .catch(error => console.log(error));

console.log('Ordem 3');*/

async function buscarUsuarios() {
    try {
        // start no loading
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        const lista = document.getElementById('usuarios');
    
        for (let usuario of data) {
            lista.innerHTML += `<li>${usuario.name}</li>`;
        }
    } catch (error) {
        document.getElementsByTagName('h1')[0].innerHTML += '<br/> ocorreu um erro';
    } finally {
        // stop no loading
    }
}

buscarUsuarios();
