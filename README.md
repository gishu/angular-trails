- [Angular Bootcamp](#angular-bootcamp)
  - [Development server](#development-server)
  - [Bootstrap](#bootstrap)
- [01-Components](#01-components)
- [02-Data-binding](#02-data-binding)

# Angular Bootcamp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

Each numbered section is a branch in this code repository. Each commit in the branch is a stepping stone to learning that particular aspect of Angular.

Hope you have fun, 
-- Gishu!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Bootstrap

 Create the project with

`ng new [projectName] --directory [dir] [--dry-run] [--minimal]`


How it boots up:

* index.html pulls in main.js
  * main.ts has the code to bootstrap the main Module - AppModule
    * AppModule specifies the bootstrap Component = AppComponent
      * The <app-root> selector in index.html is replaced with the template of the AppComponent
  * styles.css is included in ; contains application wide styles 

# 01-Components
- Markup an exported class with Component decorator. This has 3 attributes - the HTML template, the selector/tag, the styles. 
- template and styles can be inline or seperate files.
- Update the angular module's declarations attribute to include the new component class.

Angular code generators

`ng g[enerate] c[omponent] my-uber`

## View Encapsulation <!-- omit in toc -->
By default, Components have ViewEncapsulation.Emulated. This applies a unique attribute to each element in the component's template. e.g. _ngcontent-wpo-c12 and any styles are modified to include this attribute e.g. `p[_ngcontent-wpo-c12]` so the styles only apply within this component.

If you apply ViewEncapsulation.None to a component, then the styles will leak to all other components. Usually not desirable.

## Content projection <!-- omit in toc -->
you can project content into a custom component with the ng-content directive

# 02-Data-binding
* string interpolation {{ }}
* property binding []
* event binding ()
* 2-way / ngModel [()] Note: banana in a box