$('#submit-btn').click(() => {
    const url = $('#url-input').val();
    let html = '';

    const success = data => {
        console.log(data);

        const id = 'dsdsadsad';

        $('#response').html('Your shortened url is <a href="{{baseUrl}}/' + id + '">{{baseUrl}}/' + id + '</a>');
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
