@extends('pages.navbar')

    @section('pages')


    <div class="container">
        
        <h3 class="text-center mt-5 text-light text-monospace mb-3">Movie Info Details</h3>
        <form id="movieForm" autocomplete="off" >
            <div class="form-group">
                <label for="Movie" class="text-light">Movie Name</label>
                <input class="form-control" type="text" id="movie" placeholder="Search...">
            </div>
            <div class="form-group mb-3" >
                <button class="btn btn-danger btn-block rounded-pill text-light text-monospace" >Search Now</div>
            </div>
        </form>
    </div>
    <br>
    <div id="result" class="result">
    
    <div class="card text-center">
        <div class="card-header mb-5 mt-3">
            <samp class="text-danger">PERHATIAN !</samp>
        </div>
        <div class="card-body">
          <h5 class="card-title">Cara Penulisan Yang Tepat</h5>
          <p class="card-text">Kalian Dapat Search Nama Film Pada <a href="/movie/index.html"> Homepage </a> Terlebih Dahulu</p>
          <p>Karena Output Pada Halaman Detail Di Ambil Dari Penulisan Keyword Yang Mendekati</p>
        </div>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
            <!-- Anime Section End -->
    

    @endsection