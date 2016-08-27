var APP_ID = "amzn1.ask.skill.bef809de-5f87-4192-a079-1719e113b8f6";

var AlexaSkill = require('./AlexaSkill');
var PhilosoraptorThoughts = require('./PhilosoraptorThoughts');

/**
 * Philosoraptor is a child of AlexaSkill.
 */
var Philosoraptor = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Philosoraptor.prototype = Object.create(AlexaSkill.prototype);
Philosoraptor.prototype.constructor = Philosoraptor;

Philosoraptor.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("Philosoraptor onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    this.getSurprise(response);
};

Philosoraptor.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("Philosoraptor onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

Philosoraptor.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("Philosoraptor onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};

Philosoraptor.prototype.intentHandlers = {
    "GetSurprise": function (intent, session, response) {
        this.getSurprise(response);
    },

    "GetMeme": function (intent, session, response) {
        this.getMeme(response);
    },

    "GetRoar": function (intent, session, response) {
        this.getRoar(response);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        this.exit(response);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        this.exit(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        this.help(response);
    }
};

Philosoraptor.prototype.getSurprise = function (response) {
    var thoughts = new PhilosoraptorThoughts();
    var surprise = thoughts.getSurprise();
    response.tellSSML(surprise);
};

Philosoraptor.prototype.getRoar = function (response) {
    var thoughts = new PhilosoraptorThoughts();
    var roar = thoughts.getRoar();
    response.tellSSML(roar);
};

Philosoraptor.prototype.getMeme = function (response) {
    var thoughts = new PhilosoraptorThoughts();
    var meme = thoughts.getMeme();
    response.tellSSML(meme);
};

Philosoraptor.prototype.help = function (response) {
    var speechOutput = "Say 'Ask for a meme.' or 'Ask for a roar.' or 'Exit.'";
    response.ask(speechOutput, speechOutput);
};

Philosoraptor.prototype.exit = function (response) {
    var speechOutput = "";
    response.tell(speechOutput);
};

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Philosoraptor skill.
    var skill = new Philosoraptor();
    skill.execute(event, context);
};

