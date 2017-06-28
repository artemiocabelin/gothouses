$(document).ready(function() {

    $('.pics').click(function(){
        var house = $(this).attr('id');
        $.get('https://www.anapioficeandfire.com/api/houses/'+house, function(res){
            $('#view').remove();
            // console.log(res);
            var name = res.name;
            var words = res.words;

            var titles = '';
            var arr = res.titles;
            for(var i = 0;i < arr.length;i++) {
                titles += arr[i]+', ';
            }
            
            $('#description').append('<div id="view"><p>Name: '+name+'</p><p>Words: '+words+'</p><p>Titles: '+titles+'</p></div>')


        },'JSON');
    });

});