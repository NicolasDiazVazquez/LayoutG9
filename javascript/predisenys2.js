
//Navegació principal
var body = document.getElementById("nav");
body.innerHTML = `
    <!-- Menu de navegació -->
        <nav class="navbar navbar-expand-lg navbar-light border border-5 border-warning">
            <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNav" aria-controls="menuNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
                <div class="collapse navbar-collapse justify-content-center" id="menuNav">

                    <div class="align-items-start">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="../index.html"><img src="../imatges/inici.svg" alt="inici"></a>
                            </li>
                        </ul>
                    </div>
                    <div class="justify-content-center">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="nav-link" href="../pag1/llenguatgemarques1.html"><img src="../imatges/1-square.svg" alt="1"></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pag2/llenguatgemarques2.html"><img src="../imatges/2-square.svg" alt="2"></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pag3/llenguatgemarques3.html"><img src="../imatges/3-square.svg" alt="3"></a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </nav>
`;





