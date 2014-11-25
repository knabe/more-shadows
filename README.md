Four Shadows
============
######Four Shadows

This is a knock off of Four Shadows created by Santhosh Sundar created https://github.com/Gigacore/four-shadows.

'An approach to replace conventional 5 o'clock shadow for iconography with intelliegent time-aware, algorithm driven shadows using simple sprites. The direction of shadow changes according to the time of the day and based on the direction of the 'hour hand' of an analog clock. This results in natural and enriched user experience on the web. '

#####I wanted more shadows!
I also wanted this to not use sprites and work with SVG. 

![Screenshot](http://i.imgur.com/WzZIrs0.gif)

Design Concept
==============
It is a simple concept derived from the evolution where time was once read looking into the direction of the shadow cast from a pole and inspired by the latest iconography trend of long 5 o'clock shadows. Design must no longer be static. It needs to relate to real-world entity that humans are accustomed to over centuries. ```</enoughsaid>```

Setup
============
######1. Include jQuery and ```moreshadows.js``` into your html file.
######2. Place your divs & SVGs as defined with the class ``ms-cast``:

```HTML
<svg class="ms-cast" viewBox="0 0 512 512">
      <polygon fill="#E44D26" points="107.644,470.877 74.633,100.62 437.367,100.62 404.321,470.819 255.778,512             "/>
  <polygon fill="#F16529" points="256,480.523 376.03,447.246 404.27,130.894 256,130.894             "/>
  <polygon fill="#EBEBEB" points="256,268.217 195.91,268.217 191.76,221.716 256,221.716 256,176.305 255.843,176.305 142.132,176.305 143.219,188.488 154.38,313.627 256,313.627"/>
  <polygon fill="#EBEBEB" points="256,386.153 255.801,386.206 205.227,372.55 201.994,336.333 177.419,336.333 156.409,336.333 162.771,407.634 255.791,433.457 256,433.399"/>
  <path d="M108.382,0h23.077v22.8h21.11V0h23.078v69.044H152.57v-23.12h-21.11v23.12h-23.077V0z"/>
  <path d="M205.994,22.896h-20.316V0h63.72v22.896h-20.325v46.148h-23.078V22.896z"/>
  <path d="M259.511,0h24.063l14.802,24.26L313.163,0h24.072v69.044h-22.982V34.822l-15.877,24.549h-0.397l-15.888-24.549v34.222h-22.58V0z"/>
  <path d="M348.72,0h23.084v46.222h32.453v22.822H348.72V0z"/>
  <polygon fill="#FFFFFF" points="255.843,268.217 255.843,313.627 311.761,313.627 306.49,372.521 255.843,386.191 255.843,433.435 348.937,407.634 349.62,399.962 360.291,280.411 361.399,268.217 349.162,268.217"/>
  <polygon fill="#FFFFFF" points="255.843,176.305 255.843,204.509 255.843,221.605 255.843,221.716 365.385,221.716 365.385,221.716 365.531,221.716 366.442,211.509 368.511,188.488 369.597,176.305"/>
</svg>
```
######3. Point to the directory where image assets are stored in ```moreshadows.js``` settings.


Customizations
===================
###### Change settings as per requirement in ```fourshadows.js```.

```JS
	fourShadows.settings = {
	shadow	: '20px',
	defaultTime	: 5,
	color : '#000',
	$el	: $('.ms-cast'),
	}
```
Demo
===================
This only works in webkit browsers by default.
A polyfill for other browsers is here: https://github.com/Schepp/CSS-Filters-Polyfill

Demo
===================
http://gigacore.github.io/demos/fs/



License
===================
The MIT License (MIT)

Copyright (c) 2014 Santhosh Sundar
