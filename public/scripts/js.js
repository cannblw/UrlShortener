$(document).ready(() => {
    const urlInput = $('#url-input');
    const responseContainer = $('#response');
    const detailedErrorContainer = $('#error-detail');
    const token = $('meta[name="csrf-token"]').attr('content');

    $.ajaxSetup({
        beforeSend: xhr => {
            xhr.setRequestHeader('Csrf-Token', token);
        },
        xhrFields: {
            withCredentials: true
        }
    });

    $('#form').on('submit', e => {
        e.preventDefault();

        const url = urlInput.val();

        // Display loader
        responseContainer.html('<div class="loader"></div>');

        const success = data => {
            const urlID = data.data.urlID;
            detailedErrorContainer.html('')
            responseContainer.html('Your shortened url is <a href="' + window.baseUrl + '/' + urlID + '">' + window.baseUrl + '/' + urlID + '</a>');
        }

        const error = (req, status, err) => {
            const data = JSON.parse(req.responseText);

            responseContainer.html('There was an error processing your request... :(');
            detailedErrorContainer.html(data.message)
        }

        // Check if the input is a correct URL
        const re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

        if (!re.test(url)) {
            urlInput.addClass('is-invalid');
            responseContainer.html('Please, enter a valid URL.');
        } else {
            urlInput.removeClass('is-invalid');

            $.ajax({
                type: 'POST',
                url: '/api/shorten',
                data: {url: url},
                success: success,
                error: error
            });
        }
    });

    $('#url-input').on('input', () => {
        if(urlInput.hasClass('is-invalid')) {
            urlInput.removeClass('is-invalid');
        }

        if (responseContainer.html() != '') {
            responseContainer.html('');
        }

        if (detailedErrorContainer.html() != '') {
            detailedErrorContainer.html('');
        }
    })
});
