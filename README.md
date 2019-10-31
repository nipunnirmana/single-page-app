## Challenge 

### Creating a Single Web Page app using Native JS (ES6) , CSS3 & HTML5 with Reusability in Mind

#### Requirement

* Creating a card based layout to load two different types of cards (using the same card with different attributes)
* Loading Data (using given js mockup data) 
* Storing data temporary for future usage 
* Filter (Search) loaded data by username & debts description 
* Cross browser Compatibility in between Chrome and Firefox 

#### Approach

1.) Creating a custom HTML element for the card ( '\<my-card>\</my-card>' ) which can load data dynamically based on available data either User or Debts 

2.) Creating a custom HTML element allows developers to reuse the component and scale based on available data

3.) Creating separate functions to list and filter data as needed

4.) Rendering and listing Card elements based on filtered data

#### Extra 

* Adding responsive UI for Desktop , Tablet & Mobile and minor UX improvements 

### Improvements that can be added by using 3rd Party frameworks

#### Approach (using React and Bootstrap)

1.) Using create-react-app to create a more efficient boilerplate as a start 

2.) Creating a react element to load card data

3.) Style using ready-to-use card component of bootstrap framework

4.) Instead of updating elements on each every search request update only what's necessary (Using Virtual dom)

5.) Finishing up Responsive UI Layout without a hassle using Bootstrap

-------------
❤️ JS
