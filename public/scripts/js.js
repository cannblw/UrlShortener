$('#submit-btn').click(() => {
    const url = $('#url-input').val();
    let html = '';

    const success = data => {
        const urlId = data.data.urlId;

        $('#response').html('Your shortened url is <a href="' + window.baseUrl + '/' + urlId + '">' + window.baseUrl + '/' + urlId + '</a>');
    }

    const error = () => {
        $('#response').html('We\'re sorry, there was an error processing your request... :(');
    }

    $.ajax({
        url: '/api/shorten',
        data: {url: url},
        success: success,
        error: error
    });
});
