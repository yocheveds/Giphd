
(function () {
    var Message;
    Message = function (arg) {
        this.text = arg.text, this.message_side = arg.message_side;
        this.draw = function (_this) {
            return function () {
                var $message;
                $message = $($('.message_template').clone().html());
                $message.addClass(_this.message_side).find('.text').html(_this.text);
                $('.messages').append($message);
                return setTimeout(function () {
                    return $message.addClass('appeared');
                }, 0);
            };
        }(this);
        return this;
    };

    $(function () {
        var getMessageText, message_side, sendMessage;
        message_side = 'right';
        getMessageText = function () {
            var $message_input;
            $message_input = $('.message_input');
            return $message_input.val();
        };
        sendMessage = function (text) {
            var $messages, message;
            if (text.trim() === '') {
                return;
            }
            $('.message_input').val('');
            $messages = $('.messages');
            message_side = message_side === 'left' ? 'right' : 'left';
            message = new Message({
                text: text,
                message_side: message_side
            });
            message.draw();
            return $messages.animate({ scrollTop: $messages.prop('scrollHeight') }, 300);
        };
        $('.send_message').click(function (e) {
            return sendMessage(getMessageText());
            var newMessage = $('.message-input').val().trim();
            sendMessage(newMessage);
        });
        $('.message_input').keyup(function (e) {
            if (e.which === 13) {
                return sendMessage(getMessageText());
            }
        });
        // sendMessage('.message_input');
      


        // setTimeout(function () {
        //     return sendMessage('Hi Sandy! How are you?');
        // }, 1000);
        // return setTimeout(function () {
        //     return sendMessage("I'm fine, thank you!");
        // }, 2000);
    });
}.call(this));



database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  // Store everything into a variable.
  var profileName = childSnapshot.val().user;
  var webAddress = childSnapshot.val().url;
  var city = childSnapshot.val().zip;
  var gender = childSnapshot.val().sex;
  var year = childSnapshot.val().age;

  $("#name").html(profileName);

    var divSearch = $("<div>");
    var imageSearch = $("<img>");
    divSearch.append(imageSearch);
    var imageGif = $(imageSearch).attr('src', webAddress);
  $("#giphy").html(imageGif);
});


