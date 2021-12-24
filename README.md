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