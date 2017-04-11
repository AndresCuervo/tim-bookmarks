Just some notes:

it looks like the `src` on the HTML ID `jp_audio_0` is going to be the correct
thing to download.

For reference, the links look like this:

cloudfront-url      ⬇️              / episode name .mp3 file name ⬇️  / security stuff ⬇️ 
http://d1bc2ce8jqskpv.cloudfront.net/129_Rachmaninoff_01.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjEyOV9SYWNobWFuaW5vZmZfMDEubXAzKiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTQ5MTk1MzkzMH0sIklwQWRkcmVzcyI6eyJBV1M6U291cmNlSXAiOiIxMDQuMTMxLjE4MS4zNy8zMiJ9fX1dfQ__&Signature=JG3MrmVu62-~ycPu9C-FXuDiQE3nV6LYLYWYeYsHg2BfYpIHg2teNIdCbQc5YuTrMcwErU9gxavj7tEjiRLWJ7qYC-HvpB1dG0Vgh3pj0KBNQiqOUXZKjzZbEl47RPvcJ34sxS0w4eyXnEU1aG5ISPYTJn9VXp9qt9ExDZtoY~M_&Key-Pair-Id=APKAJX2XWWNX52ZU57XA

This helpful SO question:
https://stackoverflow.com/questions/3749231/download-file-using-javascript-jquery

leads me to this code (slightly modified), which sets [this great HTML5 feature](http://caniuse.com/#feat=download):

```
function downloadURI(uri) {
    var link = document.createElement("a");
    link.download = true;
    link.href = uri;
    link.click();
}
```

So, my thought is to just cycle through the numbers, with this function?

Okay, so the security credentials change every time, which is annoying, seems like
we'll have to click and re-grab the code each time.

The player links have this on them:
```
href="javascript:openPlaylist(2)"
```

But, oh, actually that opens the playlist, not changes the src ...

**But ooooh!** For example, when you run the following code, it changes
the `#jp_audio_0.src` to the third file!!

```
var block = document.querySelector("#p_block3");
block.childNodes[1].click();

// or, more compactly: document.querySelector("#p_block3").childNodes[1].click()
```

So, theoretically, you could just loop to click each player selection and
then download each file? Moving over to downloadFiles.js to try some stuff out.

-----
Cool, `downloadFiles.js` downloads the files, now I installed the npm file
`bookmarklet` using Yarn, and the final file is compiled using the following command:

```
bookmarklet downloadFiles.js out.js
```

