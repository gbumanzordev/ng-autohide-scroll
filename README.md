# Auto-hide Scroll

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## How to use
In order to use this directive you just need to specify the styling for the scroll bar in the `style.scss` file, the most important part is the one that contains the `scroll-out` class.

Your HTML code should now look like this:

```html
<div class="container" appAutoHideScroll>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
```

After that, you just only need to call the directive anywhere you think it will be required to. If you want to change the `scroll-out` class name to any other name you'd like, you can but you will need to change the same name that's in the directive to avoid issues.

Questions? [@umanzorgerson](https://www.twitter.com/umanzorgerson "Contact me on twitter") or you can leave a pull request in this repo.