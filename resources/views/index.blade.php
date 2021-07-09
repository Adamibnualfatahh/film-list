
    @extends('pages.navbar')

    @section('pages')
    @include('pages.search')
    <section class="hero movie-list">
        <div class="container">
            <div class="hero__slider owl-carousel">
                <div class="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero__text">
                                <h2>Informasi Tentang Film Terlengkap</h2>
                                <p>Search Film By Name</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero__items set-bg" data-setbg="img/blog/details/bd-item-1.jpg">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero__text">
                                <h2>Web Hanya Memberikan Informasi</h2>
                                <p>Bukan Berisi Film/Video</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero__items set-bg" data-setbg="img/blog/details/bd-item-2.jpg">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero__text">
                                <h2>Tidak Menyebarkan Film Bajakan</h2>
                                <p>Menonton Film Lebih Baik Di Web Resmi/Bioskop</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hero__items set-bg" data-setbg="img/blog/details/bd-item-3.jpg">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="hero__text">
                                <h2 class="text-black-50">Tidak Menyebarkan Film Bajakan</h2>
                                <p class="text-dark">Menonton Film Lebih Baik Di Web Resmi/Bioskop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Hero Section End -->

    <!-- Product Section Begin -->
    <section class="product spad"></section>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="trending__product">
                        <div class="row">
                            <div class="col-lg-8 col-md-8 col-sm-8">
                                <div class="section-title">
                                    <h4 class="text-light">Info</h4>
                                    <h4 class="text-danger">Film</h4>
                                </div>
                            </div>
                        </div>
                        
                        <div class="row justify-content-center " id="movie-list">
                            <h3 class="text-light text-monospace mr-3">Menunggu Pencarian Film...</h3>
                    
                            <div class="d-flex justify-content-center ">
                                <div class="spinner-border text-light 	
                                d-none d-sm-block" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                              </div>
        
                        </div>

                    <!-- Button trigger modal -->

  
 
                   
</div>
</div>
</div>
</div>
</section>

    @endsection
