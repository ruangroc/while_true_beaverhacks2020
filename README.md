<h1>The Study Hub! -- BeaverHacks Summer 2020</h1>

<h2>About</h2>
  The Study Hub is a website that allows users to create their own flashcards. These flashcards can then be sent to an Amazon Alexa, which will quiz the user out-loud. 

<h2>Technologies & Tools</h2>
  The webpage for creating flashcards was made with Node.js, React, and JS/HTML/CSS. 
  The Alexa Voice User Interaction (VUI) model and skill was created in the Alexa Developer Console.
  We used Node.js to create the server that maps voice commands to Alexa responses.
  The Study Hub Web UI was served publicly on an Apache Server with DNS supported by Amazon's Route 53. 
  Reverse proxying was to be handled by Apache Server as well (ran out of time to get this working).
  The Alexa Skill was also hosted and ran on an express server (Node.js).
  SSL Certificates were granted for the https://alexa.tristanluther.com domain by Let's Encrypt Certbot
  
<h2>Images</h2>

  Website for creating flashcards
  ![First](https://cdn.discordapp.com/attachments/723233269449097328/724375068351922286/Annotation_2020-06-21_142711.png)
  ![Second](https://cdn.discordapp.com/attachments/723233269449097328/724375080339243108/Annotation_2020-06-21_142712.png)
  
  Alexa Developer Console
  ![Third](https://user-images.githubusercontent.com/43560455/85236828-43cb6d80-b3d6-11ea-937c-4db6b5f05f37.png)

  Apache Web Server Config
  ![Fourth](https://tristanluther.com/beaverhacks/capture.PNG)

<h2>What We Learned</h2>
  It was our first time making new Amazon Alexa skills. We learned how to create a skill, an invocation, and intents that form a model Alexa can use to interact with a user via speech commands. We also learned how to create handlers for mapping user voice commands to Alexa responses. This was the first time our team had set-up a subdomain as well with the alexa subdomain and the first time experimenting with reverse proxies.
  
<h2>Future Improvements</h2>
  If we had more time to work on this project, we'd like to add the ability to make more than just 5 flashcards. Also given more time we could have worked out issues with the reverse proxies on the server which would have made our project publicly accessable.
