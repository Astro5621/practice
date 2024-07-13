//Відображання header під час скролу сторінки
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const showHeaderThreshold = 50; // Відстань від верху сторінки, на якій хедер з'являється

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop < showHeaderThreshold) {
            // Якщо прокрутка менше порогового значення, показати хедер
            header.style.top = '0';
        } else {
            // Якщо прокрутка більше порогового значення, сховати хедер
            header.style.top = '-80px';
        }
    });
});



//Перевірки для контактної форми
$(function() {
    $('input, select, textarea').styler();
});

$(document).ready(function() {
    // Перевірка ім'я (вводиться буква чи цифра)
    $('#name').on('input', function() {
        this.value = this.value.replace(/\d/g, '');
    });

    // Перевірка телефона (вводиться буква чи цифра, а також автоматично встановлює код +380 для номеру телефону)
    $('#phone').on('input', function() {
        this.value = this.value.replace(/[^0-9+]/g, '');
        if (!this.value.startsWith('+380')) {
            this.value = '+380';
        }
    });

    $('#contact-form').on('submit', function(event) {
        // Перевірка формату пошти
        var email = $('#email').val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            event.preventDefault();
        }

        // Перевірка чи заповнені усі поля форми
        var isValid = true;
        $('#contact-form input, #contact-form textarea').each(function() {
            if ($.trim($(this).val()) === '') {
                isValid = false;
                alert('All fields are required');
                event.preventDefault();
                return false;
            }
        });

        // Перевірка чи натиснутий чекбокс
        if (!$('#terms').is(':checked')) {
            alert('You must agree to the terms and conditions');
            event.preventDefault();
        }
    });
});
