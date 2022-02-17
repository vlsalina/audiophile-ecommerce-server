# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [How to use](#how-to-use)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add/Remove products from the cart
- Edit product quantities in the cart
- Fill in all fields in the checkout
- Receive form validations if fields are missed or incorrect during checkout
- See correct checkout totals depending on the products in the cart
  - Shipping always adds $50 to the order if cart total is over $3000
  - VAT is calculated as 10% of the product total, excluding shipping
- See an order confirmation modal after checking out with an order summary
- **Bonus**: Keep track of what's in the cart, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)

### Screenshot

![screenshot](https://res.cloudinary.com/do6crtyly/image/upload/v1645056575/audiophile/Desktop_-_Home_gqe1r4.png)

### Links

- [Live Site URL](https://audiophile-ecommerce-app.netlify.app/)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone the following repositories
$ git clone https://github.com/vlsalina/audiophile-ecommerce-client.git
$ git clone https://github.com/vlsalina/audiophile-ecommerce-server.git

# Go into the repository for the backend
$ cd audiophile-ecommerce-server

# Install dependencies
$ npm install

# Run the server
$ node app.js

# Now, go into the repository for the frontend
$ cd audiophile-ecommerce-client

# Install dependencies
$ npm install

# Run the app
$ npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## My process

### Built with

- [MongoDB](https://docs.atlas.mongodb.com/?_ga=2.232882589.280966400.1645011051-1449492850.1643781029&_gac=1.85307883.1645011051.Cj0KCQiA3rKQBhCNARIsACUEW_aKKbGxWOFIwI7gHR4p4H_IpqU8Grinl0oF42j731_qkWfAU5s4BE8aAhneEALw_wcB) - cloud database
- [ExpressJS](https://expressjs.com/) - Node.js framework
- [React](https://reactjs.org/) - JS library
- [Mongoose](https://mongoosejs.com/docs/guide.html) - MongoDB object modeling library
- [Redux](https://redux.js.org/) - Predictable state container for JS apps
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

#### MongoDB

I felt utilizing MongoDB for this project would really help introduce me to the concepts of the database as well as the backend layer when it came to web development as a whole. MongoDB uses JSON-like documents with optional schemas. And so, it was vital to design the structure of the documents in such a way that they would "lend themselves" to the frontend layer. Or in other words, make it as seamless as possible to get the desired data from the client side.

```javascript
{
	"title": "car",
	"required": [
		"_id",
		"year",
		"make",
		"model",
		"miles"
	],
	"properties": {
		"_id": { "bsonType": "objectId" },
		"year": { "bsonType": "string" },
		"make": { "bsonType": "string" },
		"model": { "bsonType": "string" },
		"miles": { "bsonType": "number" }
	}
}
```

The code block above is an example of a schema. Having experience with Javascript objects already, it was fairly straight forward to construct one.

#### Mongoose

After gaining a better understanding of how MongoDB worked, it was still cumbersome trying to validate input fields, and querying was still verbose and overly complex, and so I felt the need to also learn Mongoose. Mongoose provides a straight-forward, schema-based solution to model your application data.

Applying input validation and modeling was a breeze with Mongoose:

```javascript
const carSchema = new mongoose.Schema({
  year: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  miles: { type: Number, required: true },
});

const Cars = mongoose.model("Car", carSchema);
```

It also provided a way to read and write easily understandable queries, such as the example below:

```javascript
await Cars.updateMany({}, { $set: { make: "Honda" } });
```

#### Redux

Having experience with React and knowing Hooks such as useState and useContext, I was under the impression I could simply write state logic at the component level and manage data that way for the entire app. Ultimately though, I learned that such a design structure would not yield itself very well for scalability later on. Having multiple components dependent on the same data meant keeping everything in sync at all times, which proved to be difficult with React hooks alone.

Redux provided a "one source of truth" way of resolving these issues. It is is an open-source JavaScript library for managing and centralizing application state. While there was somewhat of a learning curve at first, the benefit of having the app's state all in one place and easily accessible throughout the entire app was a big game changer.

For this project, the "cart items" state could now be updated from the Product screen and still reflected across all other components.

### Continued development

Create unit and integration tests with Jest/React-Testing-Library.

## Author

- Frontend Mentor - [@vlsalina](https://www.frontendmentor.io/profile/vlsalina)
