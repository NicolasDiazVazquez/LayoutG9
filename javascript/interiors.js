
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



//Footer custom
var body = document.getElementById("footer");
body.innerHTML = `

    <footer class="text-center text-lg-start border border-5 border-warning ">  
        <section class="">
            <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Creadors -->
                    <h4 class="text-uppercase fw-bold">Creadors</h4>
                    <p>
                    <a href="#!" class="text-reset">Edgar Medina</a>
                    </p>
                    <p>
                    <a href="#!" class="text-reset">Nico Diaz</a>
                    </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- GitHub -->
                    <h4 class="text-uppercase fw-bold">Repository</h4>
                    
                    <a href="https://github.com/NicolasDiazVazquez/LayoutG9" class="text-reset"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="">GitHub</a>
                
                </div>
            </div>
        </section>
            <!-- Copyright -->
                <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
                    © 2022 Copyright
                </div>
                <div style="background-color: rgba(0, 0, 0, 0.05);">
                    <a href="#"><img src="../imatges/arrow.PNG"alt="img"></a> 
                </div>
    </footer>
`;




