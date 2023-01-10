
// ReactDOM.render(<h1>Hi everyone</h1>, document.getElementById("root"))

// ReactDOM.render(<p>Hi, my name is Sarah!</p>, document.getElementById("root"))

/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside */

// ReactDOM.render(
//   <ul><li>Thing 1</li> <li>Thing 2</li></ul>,
//   document.getElementById("root")
// )

// function Navbar() {
//   return (
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <a className="navbar-brand" href="#">Navbar</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav mr-auto">
//               <li className="nav-item active">
//                   <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                   Dropdown
//                   </a>
//                   <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <a className="dropdown-item" href="#">Action</a>
//                   <a className="dropdown-item" href="#">Another action</a>
//                   <div className="dropdown-divider"></div>
//                   <a className="dropdown-item" href="#">Something else here</a>
//                   </div>
//               </li>
//               <li className="nav-item">
//                   <a className="nav-link disabled" href="#">Disabled</a>
//               </li>
//               </ul>
//               <form className="form-inline my-2 my-lg-0">
//                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//               </form>
//           </div>
//       </nav>
//   )
// }

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

// function MainContent() {
//   return (
//     <h1>I'm learning React!</h1>
//   )
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// )

// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

// const h1 = document.createElement("h1")
// h1.textContent.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

//JSX
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )

// ReactDOM.render(
//   page,
//   document.getElementById("root")
// )

/* Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/



// const navbar = (
//   <nav>
//     <h1>Website</h1>
//     <ul>
//       <li>Menu</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

/* Old version */
// ReactDOM.render(
//   navbar,
//   document.getElementById("root")
// )

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

/**
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */

// const page = (
//   <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//           <li>It's composable</li>
//           <li>It's declarative</li>
//           <li>It's a hireable skill</li>
//           <li>It's actively maintained by skilled people</li>
//       </ol>
//   </div>
// )

// ReactDOM.render(page, document.getElementById("root"))
// document.getElementById("root").append(JSON.stringify(page))


/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// import React from "react"
// import ReactDOM from "react-dom"

// function TemporaryName() {
//     return (
//         <div className="m-4">
//         <img src="./react-logo.png" className="mb-2" width="50px"/>
//         <p className="fw-bold fs-4">Fun facts about React</p>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }

// ReactDOM.render(<TemporaryName/>, document.getElementById("root"))


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
    
import React from "react"
import ReactDOM from "react-dom"

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Page() {
    return (
        <div>
            <Header />
            
            <MainContent />
            
            <Footer />
        </div>
    )
}

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))