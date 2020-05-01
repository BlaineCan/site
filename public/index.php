<!DOCTYPE html>
<!-- ** Copyright 2020. Blaine Cantrell. Made in Texas. -->

<html lang="en-US">
        <head>
                <meta content="text/html" charset="UTF-8">
                <meta name="google-site-verification" content="w5kC1j4k9M-Czj-feilz4R5YOJQ-6xe7_9_ZksMOR0s">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Blaine Cantrell</title>
                <link rel="stylesheet" type="text/css" href="styles.css">
                <link rel="icon" href="https://img.icons8.com/color/96/000000/earth-planet.png" type="image/png">
               <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125052926-1"></script>
               <!-- I decided to keep the google analytics stuff. Don't ask me why. I do not have an answer for you.-->
                <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'UA-125052926-1');
                </script>
        </head>
        <body>
                <main>
                        <!-- This is literally the only div. Why does it have a class name? :) -->
                        <div>
                                <img src= "./img/spaceman.gif" alt="Image not found 🤷">
                                <p><?php
					$greetings = array("Good morning!", "Good afternoon!", "Good evening!");
					echo $greetings[0];
				?></p>
                                <p>My name is Blaine.</p>
                                <p>I build things and do stuff.</p>
                                <ul>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Whatchamazog">Github</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/blaine-cantrell-9795a559/">LinkedIn</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Whatchamazogg">Twitter</a></li>
                                        <li><a target="_blank" rel="noopener noreferrer" href="https://dev.to/whatchamazog">Dev.to</a></li>
                                </ul>
                       </div>
                </main>
        </body>
</html>

<!-- *** Copyright 2020. Blaine Cantrell. Made in Texas *** -->