
$(document).ready( function() {

    let checkbox =$('#subscribe');

    $(".phone").mask("+7 (999) 999-99-99", {autoclear: false});

    $(".regular-modal__form").submit(function () {
        var form = $(this);
        var error = false;
        form.find('input').each(function () {
            if ($(this).val() == '') {
                $(this).addClass("has-error");
                $(this.nextElementSibling).addClass('error')
                error = true;
            } else {
                $(this).removeClass("has-error");
                $(this.nextElementSibling).removeClass('error')
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
               // url: 'handler/handler.php', раскомментировать, если нужно отправить на почту данные пользователя
                dataType: 'text',
                data: data,
                success: function (data) {
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('.form-success').removeClass("hidden");
                        setTimeout(function () {
                            $('.form-success').hide();
                            $('form input[type="text"], form input[type="tel"]').val('');
                        }, 2000)
                    }
                },
            });
        }
        return false;
    });
})





