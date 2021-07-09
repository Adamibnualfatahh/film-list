
$(document).ready(function(){
    var apikey="76e4617b"

    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie = $("#movie").val()

        var result =""

        var url = "http://www.omdbapi.com/?apikey="+apikey

        $.ajax({
            method:'GET',
            url:url+"&t="+movie,
            success:function(data){
                console.log(data)

                result = `
                <section class="details spad infoku" id="infoku">
<div class="container">
<div class="anime__details__content">
    <div class="row">
        <div class="col-lg-3">
            <div class="" src="">
                <img class="anime__details__pic set-bg"src="`+data.Poster+`" alt="">
            </img>
            </div>
        </div>
        <div class="col-lg-9">
            <div class="anime__details__text">
                <div class="anime__details__title">
                    <h3>`+data.Title+`</h3>
                    <span>`+data.Country+`/`+data.Year+`</span>
                </div>
                <div class="anime__details__rating">
                    <div class="rating text-light">
                       <p>Rating : `+data.imdbRating+`/10</p>
                    </div>
                    <span>`+data.imdbVotes+`Votes</span>
                </div>
                <p>`+data.Plot+`</p>
                <div class="anime__details__widget">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <ul>
                                <li><span>Genre:</span> `+data.Genre+`</li>
                                <li><span>Actor:</span> `+data.Actors+`</li>
                                <li><span>Language:</span> `+data.Language+`</li>
                                <li><span>Director:</span> `+data.Director+`</li>
                                <li><span>Writer:</span> `+data.Writer+`</li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <ul>
                                <li><span>Scores:</span>`+ data.Metascore+`</li>
                                <li><span>Rating:</span>`+ data.imdbRating +`</li>
                                <li><span>Duration:</span>`+ data.Runtime +`</li>
                                <li><span>Awards:</span>`+ data.Awards +`</li>
                                <li><span>Released:</span>`+ data.Released +`</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
</section>
                `
            $("#result").html(result)
            }
        })
    })
})
