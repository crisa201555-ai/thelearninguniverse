<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>TLU | Centro de Comando</title>
    
    <script>
        (function () {
            const session = localStorage.getItem('userTLU');
            if (!session) {
                // Si no hay sesión, borramos el cuerpo de la página para que no se vea nada
                document.documentElement.style.display = 'none';
                // Redirigimos inmediatamente
                window.location.href = 'login.html';
            }
        })();
    </script>

    <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Orbitron:wght@400;700&display=swap" rel="stylesheet">
    
    <style>
        :root { --p-blue: #0ea5e9; --p-purple: #d946ef; --bg: #020617; }
        body { 
            margin: 0; font-family: 'Fredoka', sans-serif; background: var(--bg); color: white;
            background: radial-gradient(circle at top right, #0c4a6e, #020617);
            min-height: 100vh;
        }

        nav {
            padding: 20px 50px; background: rgba(0,0,0,0.3); backdrop-filter: blur(10px);
            display: flex; justify-content: space-between; align-items: center;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .hero { text-align: center; padding: 60px 20px; }
        h1 { font-family: 'Orbitron', sans-serif; font-size: 3rem; margin: 0; text-shadow: 0 0 20px var(--p-blue); }
        
        .user-badge { color: var(--p-blue); font-weight: 700; border: 1px solid var(--p-blue); padding: 5px 15px; border-radius: 20px; text-transform: uppercase; }

        .grid-subjects {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px; max-width: 1000px; margin: 40px auto; padding: 0 20px;
        }

        .subject-card {
            background: rgba(255,255,255,0.05); border-radius: 25px; padding: 30px;
            border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; cursor: pointer; text-align: center;
        }

        .subject-card:hover { 
            transform: translateY(-10px); background: rgba(255,255,255,0.1);
            border-color: var(--p-blue);
        }

        .btn-logout {
            background: transparent; color: #ef4444; border: 1px solid #ef4444;
            padding: 8px 18px; border-radius: 10px; cursor: pointer; transition: 0.3s;
            font-family: 'Fredoka';
        }
        .btn-logout:hover { background: #ef4444; color: white; }
    </style>
</head>
<body>

    <nav>
        <div class="logo" style="font-family:'Orbitron'; font-weight:700;">TLU <span style="color:var(--p-blue)">CORE</span></div>
        <div style="display:flex; gap:20px; align-items:center;">
            <span class="user-badge" id="userName">Cargando...</span>
            <button class="btn-logout" onclick="logout()">Cerrar Sesión</button>
        </div>
    </nav>

    <div class="hero">
        <h1 id="welcomeTxt">BIENVENIDO, AGENTE</h1>
        <p style="opacity:0.7;">Identidad verificada. Acceso a sectores de aprendizaje concedido.</p>
    </div>

    <div class="grid-subjects">
        <div class="subject-card" onclick="location.href='cienciasnaturales.html'">
            <span style="font-size:3rem;">🌍</span>
            <h3>Ciencias Naturales</h3>
            <p>Ecosistemas y Vida Terrestre.</p>
        </div>
        <div class="subject-card" onclick="location.href='matematicas.html'" style="border-color:var(--p-purple);">
            <span style="font-size:3rem;">🧮</span>
            <h3 style="color:var(--p-purple)">Matemáticas</h3>
            <p>Operaciones y Fracciones.</p>
        </div>
    </div>

    <script>
        // Aplicar el nombre del usuario al cargar
        const user = localStorage.getItem('userTLU');
        if (user) {
            document.getElementById('userName').innerText = user;
            document.getElementById('welcomeTxt').innerText = `BIENVENIDO, ${user.toUpperCase()}`;
        }

        function logout() {
            if(confirm("¿Deseas cerrar la sesión segura?")) {
                localStorage.removeItem('userTLU');
                window.location.href = 'login.html';
            }
        }
    </script>
</body>
</html>
