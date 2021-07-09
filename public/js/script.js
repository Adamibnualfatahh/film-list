function search() {
    $('#movie-list').html('');
    $.ajax({
        url:'http://www.omdbapi.com',
        type:'get',
        dataType:'json',
        data: {
            'apikey':'76e4617b',
            's' : $('#search-input').val()
        },
        success : function (result) {
            if (result.Response == "True") {
                let movies = result.Search;
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
     <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <img class="product__item__pic set-bg" src="`+ data.Poster +`">
                        </img>
                        <div class="product__item__text">
                            <ul>
                                <li>`+ data.Year +`</li>
                                <li>`+ data.Type +`</li> 
                                
                            </ul>
                            <h5><a href="#">`+ data.Title +`</a></h5>
                        </div>
                    </div>
                </div>
                    `)
               $('#search-input').val('');

                })
            } else {
                $('#movie-list').html(`<div class="alert alert-dark text-center" role="alert">
                <h4 class="alert-heading ">Film Yang Anda Cari Tidak Di Temukan !</h4>
                <p>Coba cari film dengan keyword yang tepat dan benar</p>
                <hr>
              </div>`)
            }
        }
    }); 
}

$('#search-button').on('click', function() {

 search();

});

$('#search-input').on('keyup', function(e){
   if(e.which === 13) {
    search();
   }
});




$('#movie-list').on('click', '.see-detail', function(){
 $.ajax ({
     url: 'http://www.omdbapi.com',
     type:'get',
     dataType:'json',
     data: {
         'apikey':'76e4617b',
         'i' : $(this).data('id')
     },
     success : function (movie) {
         if( movie.Response === "True") {

             $('.modal-body').html(` 
                         <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4"
                                    <img src="` + movie.Poster + `" class="img-fluid">
                                </div>

                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                    <li class="list-group-item">`+ movie.Released +`</li>
                                </ul>
                            </div>

                            </div>
                         </div>
                    `)
        }

    }
});

console.log($(this).data('id'));

});