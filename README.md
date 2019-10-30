## Challenge 

### Creating a Single Web Page app using Native JS (ES 6) , CSS3 & HTML5 with Reusability in Mind

#### Requirement

* Creating a card based layout to load two different type of cards (using the same card with different attributes)
* Loading Data (using given js mockup data ) 
* Storing data temporary for future usage 
* Filter (Search) loaded data by username & debts description 
* Cross browser Compatibility in between Chrome and Firefox 

#### Approach

1.) Creating a custom HTML element for card ( '\<my-card>\</my-card>' ) which can load data dynamically based on available data either User or Debts 

2.) Creating a custom HTML element gives me the freedom to create as much as card elements (Reusability) and changing Card content dynamically (Scalability) as needed

3.) Creating a separate functions to list and filter data as needed 

4.) Rendering and listing Card elements based on filtered data

#### Extra 

* Adding responsive UI for Desktop , tablet & Mobile and minor UX improvements 

### Improves that can be added by using 3rd Party frameworks

#### Approach using React and Bootstrap 

1.) Using create-react-app to create a more efficient boilerplate as a start 

2.) Creating a react element to load card data

3.) Style using ready-to-use card component from bootstrap framework

4.) Instead of updating elements on each every search request update only whats necessary  (Using Virtual dom)

5.) Finishing up Responsive UI Layout without a hassle using Bootstrap
