$(document).ready(function () {
             // $('#ajaxBtn').click(function () {
                 $.ajax({
                     url: 'https://gorest.co.in/public/v2/users',
                     type: 'GET',
                     
                     success: function (data, textStatus, xhr) {
                         console.log(data);
                     },
                     error: function (xhr, textStatus, errorThrown) {
                         console.log(textStatus);
                     }
                 });
             });
         // });