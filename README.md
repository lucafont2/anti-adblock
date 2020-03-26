# AdBlock-Detector
A simple script for detecting AdBlock

# V1 script
>Requirements: 
```
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
```
>Generate random script
```
cd v1
npm i uniqid && npm i md5
node randomizer.js
```
Output is saved in output.txt
>Try the preGenerated script in v1/demo.js

>How to call
```
(async function(){
    var po = new a31fsy3a8k87odmsp("low"/*mode*/,$/*call for jquerry*/);
    console.log("There is adblock?:", await po.check());
})();
```
>Available modes
Note: mode only change the numer of checks. Use "low"/"normal" for better performances
```
low
normal :default
strict
```
