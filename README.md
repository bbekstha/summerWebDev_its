# its_webDev_VueCLI

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
### Project Goals
   Reproduce the vanillaJS version of the website with VueJS CLI to compare pros and cons of each approach

### Project layout
- ./public
   - index.html
      - Base html which contains root div for content rendering.

- ./src
   - ./assets: Contains media and other files used in the website.
   - ./components: Contains definition for the components used in the website.
   - ./routesFunctionalities: Contains implementation of the functionalities
    for different component and views
      - cookieFunction.js
         - Contains getter and setter methods for cookie storage.
      - DOMFunction.js
         - Contains function to create and modify the DOM elements.
      - stock.js, repo.js, protected.js, personSearch.js
         - Contains functions to handle functionalities of respective components
   - ./views: Contains definitions for the routing views.
      - home.vue, stock.vue, repo.vue, protectedCont.vue, searchPerson.vue
         - Contains template, props, and methods for the respective views.
   - App.vue
      - Contains template for the root container div
   - format.css
      - Contains styling and formatting of the website elements.
   - main.js
      - Root source file that contains root vue instance, router and protected routing logic.
      - Renders App view defined in App.vue.
   - router.js
      - Contains routes definition for navigation.
      - Relates paths to respective components.
- package.json
   - Contains information for handling project dependencies and other configurations such as name, author, scripts relating to the project.
- README.md
   - This file.


### Programming approach
   - Script files under routesFunctionalities folder that handle the
      functionalities use either fetch or XHTTP request call to retrieve
      related data in JSON format. The JSON is then parsed to populate
      dynamically created table for users to see.
   - As mentioned above, the vue files under views folder defines the template,
      props and methods used by available route paths.
      - As required they also import helper functions exported
        from the above mentioned script files. This helps in code management
        for large apps and is one of the advantages of using the VueJS CLI.

### Pros
- Easier code management and debugging for large scale app by using modules managed by vue

### Cons
- Compared to cdn implementation, node and other
   various package installation is required.
