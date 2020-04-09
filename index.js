// const axios = require('axios');

(function () {
    var generateRandomSessionId = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
    var clicks = [];
    var clickApp = {
        trackClick: function (evt) {
            var click = {
                // "originalTarget": evt.explicitOriginalTarget,
                "x": evt.pageX,
                "y": evt.pageY,
                "sessionId": generateRandomSessionId(),
                "timestamp": Date.now()
            }
            console.log(click);

            axios.post("/registerClick", click)
                .then(function (response) {
                    console.log(response);
                });
        }
    }
    document.addEventListener('click', function (event) {
        clickApp.trackClick(event);
    });
})();