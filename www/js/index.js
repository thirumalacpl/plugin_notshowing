
  alert('index.js');
var app = {

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        var push = PushNotification.init({
            "android": {
                "senderID": "224978017474"
            },
            "ios": {"alert": "true", "badge": "true", "sound": "true"}, 
            "windows": {} 
        });


    push.on('registration', function(data) {
        alert('to database');
        console.log("registration event");
        var gcm_regid = data.registrationId;
        $.post('http://staging.eimpressive.com/thiru/insert.php', {gcm_regid: gcm_regid});
 return false;
    });
        
     /*   push.on('registration', function(data) {
            console.log("registration event");
            document.getElementById("regId").innerHTML = data.registrationId;
            console.log(JSON.stringify(data));
        });*/

/*        push.on('notification', function(data) {
        	console.log("notification event");
            console.log(JSON.stringify(data));
            var cards = document.getElementById("cards");
            var card = '<div class="row">' +
		  		  '<div class="col s12 m6">' +
				  '  <div class="card darken-1">' +
				  '    <div class="card-content black-text">' +
				  '      <span class="card-title black-text">' + data.title + '</span>' +
				  '      <p>' + data.message + '</p>' +
				  '    </div>' +
				  '  </div>' +
				  ' </div>' +
				  '</div>';
            cards.innerHTML += card;
            
            push.finish(function () {
                console.log('finish successfully called');
            });
        });*/

    /*    push.on('error', function(e) {
            console.log("push error");
        });*/
    }
};

app.initialize();