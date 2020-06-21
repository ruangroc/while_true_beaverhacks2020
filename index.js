const Alexa = require('ask-sdk-core');
const flashcards = require('flashcards')['flashcards'];
const numCards = flashcards.length;

// Responds to "study hub"
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Welcome to your study hub';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Responds to "tell study hub hello"
const HelloHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Hello there';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  }
}

// Responds to "tell study hub to help me"
const HelpHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Say start to begin studying your flashcards. Begin your responses with My Answer Is. Say stop at any time to stop.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

// Responds to "tell study hub to stop"
const CancelAndStopHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent');
  },
  handle(handlerInput) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const speakOutput = 'You got ' + attributes.numberCorrect + ' cards correct. Good session!'
    attributes.speechOutput = speakOutput;
    
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .withShouldEndSession(true)
      .getResponse();
  }
};

const SessionEndedHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);
    console.log(error.trace);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

function askQuestion(handlerInput) {
  const attributes = handlerInput.attributesManager.getSessionAttributes();
  console.log(attributes.numberCorrect);
  if (!attributes.numberCorrect) {
    attributes.numberCorrect = 0;
  }
  console.log(flashcards);
  console.log(flashcards.length);
  var random = Math.floor(Math.random() * numCards);
  console.log(random);
  attributes.speechOutput = flashcards[random]['q'];
  attributes.correctAnswer = flashcards[random]['a'];
  const speakOutput = flashcards[random]['q'];
  
  return handlerInput.responseBuilder
    .speak(speakOutput)
    .reprompt("What is your answer?")
    .getResponse();
}

// Responds to "tell study hub to give me a question" and the like
const QuestionHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'QuestionIntent';
  },
  handle(handlerInput) {
    return askQuestion(handlerInput)
  }
};

// Responds to "tell study hub my answer is ___"
const AnswerHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent';
  },
  handle(handlerInput) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    const response = handlerInput.requestEnvelope.request.intent.slots.answer.value;
    const correctAnswer = attributes.correctAnswer;
    var speakOutput = '';
    
    if (response === correctAnswer) {
      attributes.numberCorrect++;
      speakOutput = 'Correct! Would you like another card?';
      attributes.speechOutput = speakOutput;
    }
    else {
      speakOutput = "The correct answer is: " + correctAnswer + '. Would you like another card?';
    }
    attributes.speechOutput = speakOutput;
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt('Would you like another card?')
      .withShouldEndSession(false)
      .getResponse();
  }
};

const YesHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
    return askQuestion(handlerInput);
  }
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloHandler,
    QuestionHandler,
    AnswerHandler,
    HelpHandler,
    CancelAndStopHandler,
    SessionEndedHandler,
    YesHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();