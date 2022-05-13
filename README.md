# LikeCSS 
> CSS Framework Created Recently

#### Creating Body Container
```html
	<div class="body-container">
		<!-- Your Content here -->
	</div>
```

#### Simple Buttons
```html
	<button class="button btn-[type]">Hi!</button>
```
##### Button Types
###### Success Type
```html
	<button class="button btn-success">Hello Success!</button>
```

###### Info Type
```html
	<button class="button btn-info">Hello Info!</button>
```

###### Danger Type
```html
	<button class="button btn-danger">Hello Danger!</button>
```

#### Chips
```html
<div class="chip">
	<img src="hello_world.jpg">
	<label>Hello 123</label>
</div>
```
##### Chip Types
###### Success Type
```html
<div class="chip chip-success">
	<img src="hello_world.jpg">
	<label>Hello 123</label>
</div>
```
###### Info Type
```html
<div class="chip chip-info">
	<img src="hello_world.jpg">
	<label>Hello 123</label>
</div>
```

###### Danger Type
```html
<div class="chip chip-danger">
	<img src="hello_world.jpg">
	<label>Hello 123</label>
</div>
```
###### Default
```html
<div class="chip">
	<img src="hello_world.jpg">
	<label>Hello 123</label>
</div>
```
## Javascript Part

### Add Menu Item

```js
addMenu({ onclick:"js_code_here()",icon:"fa fa-icon",title:"Title Here" });
```

### Setting Theme

```js
setTheme("id or name here");
```

### Adding A Theme

```js
addTheme("body{ background:blue; }",2);
```

#### The Themes being added are also added to localStorage so the theme will be loaded when website is loaded

### Getting LCSS Version

```html
<p id="lcss-version-onload"></p>
```