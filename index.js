const Alexa = require('ask-sdk-core');

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
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
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

// Responds to "tell study hub to give me a question" and the like
const QuestionHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'QuestionIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'flashcard prompt here';
    
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .reprompt("What is your answer?")
      .getResponse();
  }
};

// Responds to "tell study hub my answer is ___"
const AnswerHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AnswerIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'flashcard answer here';
    
    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
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
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();