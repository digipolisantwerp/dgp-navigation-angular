# Dgp navigation Angular directive

v0.1.1

## What is this repository for?

The Dgp navigation Angular directive gives you a scaffold for top and side navigation.


----------



## How to use

### data-dgp-top-nav

The `.nav-top` class makes sure the top navigation uses the dgp custom Bootstrap styling.

You can divide it in three sections (we assume the naming needs no explanation):

* `.nav-top-left`
* `.nav-top-right`
* `.nav-top-center`

Logo, company name and side navigation toggle go in `.nav-top-left`, each with their own class.

**Very important!**
To guarantee complete compatibility with Internet Explorer 9 `.nav-top-center` must come last in your html code.

```html
<nav data-dgp-top-nav="" class="nav-top">
  <ul class="nav-top-left">
    <li class="nav-top-logo">
      <a href="#" title=""><span>Your Project</span></a>
    </li>
    <li class="nav-top-toggle" data-dgp-sidenav-collapse="asideNavLeft">
      <a href="#" title="Open menu"><i class="fa fa-bars"><span class="sr-only">Open menu</span></i></a>
    </li>
    <li class="nav-top-app">
      <h1><a href="#">My App</a></h1>
    </li>
    <li>
      <a href="#">Menu L1</a>
    </li>
    <li>
      <a href="#">Menu L2</a>
    </li>
  </ul>
  <ul class="nav-top-right">
    <li class="active">
      <a href="#">Menu R1</a>
    </li>
    <li>
      <a href="#">Menu R2</a>
    </li>
  </ul>
  <ul class="nav-top-center">
    <li>
      <input type="search" class="input-search" placeholder="Zoeken">
    </li>
  </ul>
</nav>
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
data-dgp-sidenav-collapse | `string` | `''` | Toggle the side navigation with the corresponding id. In order to make the toggle to work, the `data-toggle-id` attribute needs to be defined on the side navigation (see below).
Use this attribute on the `.toggle item.

### data-dgp-nav-aside

The `.nav-aside` class makes sure the side navigation uses the custom dgp Bootstrap styling.

Use multiple instances of `.nav-aside-section`, to divide the menu into multiple sections.

You can optionally use `.nav-aside-title` to give each section a title.

Use `<ul>` to bring hierarchy to your menu.

We don't encourage the use of icons in your side navigation, but if your app needs them, make sure you add the `fa-fw` class in order to align them correctly.

Add `data-dgp-nav-aside` to the `.nav-aside element in order to activate extra behaviour among which:

* Detecting and collapsing submenus
* Highlighting the active (sub)menu item

###### Left or right navigation ######

The extra class `.nav-left` or `.nav-right` in the wrapping div will determine where your menu is positioned.

> **Important!** Add class="has-nav-left" or class="has-nav-right" to your `<html>` in order to create the extra (needed) space and behaviour for your side navigation.

```html
<div data-dgp-nav-aside="" data-auto-select="true" data-toggle-id="asideNavLeft" class="nav-aside nav-left">
  <aside>
    <div class="nav-aside-section">
      <p class="nav-aside-title">Section title</p>
      <ul>
        <li>
          <a href="#">
            <span>Menu item</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Menu item with badge</span>
            <span class="badge">2</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>Menu item with submenu items</span>
          </a>
          <ul>
            <li>
              <a href="#">
                <span>Submenu item</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Submenu item with badge</span>
                <span class="badge">8</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-fw fa-cogs"></i>
            <span>Menu item with icon</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</div>
```

### Options

Attr | Type | Default | Details
--- | --- | --- | ---
data-auto-select | `boolean` | `true` | When `true, the first submenu item is automatically selected when its corresponding (main) menu item is clicked.
data-toggle-id | `string` | `''` | This id is used to trigger the menu by the `data-toggle-side-nav directive (see above).

###### API code: ######

```javascript
var element = $("sidenav");
var sideNav = window.dgpApi.sideNavigation(element);
// to start the side navigation
sideNav.init({
  accordion: false,
  gotoPage: false
});

// to open or close the menu
sideNav.toggleMenu();
```
