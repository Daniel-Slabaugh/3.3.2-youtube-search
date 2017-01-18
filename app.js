
// https://www.googleapis.com/youtube/v3/search
  
var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
    var settings = {
        url: YOUTUBE_BASE_URL,
        data: {
            part: 'snippet',
            key: 'AIzaSyDLjauZER3uHHRv0Cdkrtpmhr209TYTLxA',
            q: searchTerm
        },
        dataType: 'json',
        type: 'GET',
        success: callback
    };
    $.ajax(settings);
}




function displaySearchData(data) {
    var resultElement = '';
    if (data.items.length > 0) {
        data.items.forEach(function(item) {
            resultElement += '<img src="' + item.snippet.thumbnails.default.url 
            + '" alt="ClipHere" style="width:304px;height:228px;">';
        });
    } else {
        resultElement += '<p>No results</p>';
    }
    $('.js-search-results').html(resultElement);
}

function watchSubmit() {
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var query = $(this).find('.js-query').val();
        getDataFromApi(query, displaySearchData);
    });
}

$(function(){watchSubmit();});








