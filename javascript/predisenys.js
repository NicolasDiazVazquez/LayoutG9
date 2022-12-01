
//Navegació
var body = document.getElementById("nav");
body.innerHTML = `
    <!-- Menu de navegació -->
        <nav class="navbar navbar-expand-lg navbar-light border border-5 border-warning">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav" aria-controls="menuNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                <div class="collapse navbar-collapse justify-content-center" id="menuNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="llenguatgemarques.html"><img src="imatges/1-square.svg" alt="1"></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href=""><img src="imatges/2-square.svg" alt="2"></a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href=""><img src="imatges/3-square.svg" alt="3"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
`;