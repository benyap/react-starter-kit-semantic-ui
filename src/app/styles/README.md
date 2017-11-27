# SCSS Breakpoints

The `_bp.scss` file contains SCSS mixins which help create a consistent convention for using CSS media queries for responsive design. The file contains a list of predefined breakpoint widths, a mixin to apply styles to a specific breakpoint or above, and a mixin to apply styles to a specific breakpoint range. To use these mixins, import the `_bp.scss` file into your SCSS file. 

### Breakpoint widths

The following widths are used in by the SCSS mixins: 

```
$bp-xxs:  359px;
$bp-xs:   480px;
$bp-sm:   640px;
$bp-md:   768px;
$bp-lg:   1024px;
$bp-xl:   1244px;
$bp-xxl:  1410px;
```

### @mixin bp-above($bp)

The `$bp` argument can take one of the following values: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

This mixin applies the mixin's content to all breakpoints larger than the specified breakpoint. For example, if `$bp` was `md`, the mixin content would be applied when the width is greater than 768px (`md`). 

#### Usage example

```scss
@import '_bp.scss';

.class {
  font-size: 16px;
  
  @include bp-above(md) {
    font-size: 24px;
  }
}
```

Using the mobile first approach, by default the font size will be 16px. If the screen is wider than 768px, the font size will be increased to 24px.

### @mixin bp-only($bp)

The `$bp` argument can take one of the following values: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl`.

This mixin applies the mixin's content from the previous breakpoint up until the specified breakpoint. For example, if `$bp` was `md`, the mixin content would be applied when the width was between 641px and 768px. 

#### Usage example

```scss
@import '_bp.scss';

.class {
  font-size: 16px;
  
  @include bp-only(md) {
    font-size: 24px;
  }
}
```

By default the font size will be 16px. If the screen is wider than 640px (`sm`) and less than 768px (`md`), the font size will be increased to 24px.

