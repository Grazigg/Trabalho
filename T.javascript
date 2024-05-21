<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo JavaScript</title>
</head>
<body>
    <h1 id="mensagem">Olá!</h1>
    <button onclick="mostrarMensagem()">Clique aqui</button>

    <script>
        function mostrarMensagem() {
            document.getElementById('mensagem').textContent = 'Olá, Mundo!';
        }
    </script>
</body>
</html>

      
