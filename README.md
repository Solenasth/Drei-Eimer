# Drei Eimer (Three buckets)

This project is a take home excercise, and this page is my take on the problem, I focused on my forte, and even tought not all of the planned functionality made it, due to time constrains; I feel like it looks cool enough to be on the interwebs.

## tech inside
* 📦 Parcel 
* 🌺 Prettier 
* 📝 EsLint 
* 💅 Styled Components 
* 💄 Sass!
* 🐉 fontAwesome for React 
* ⚛️ React with hooks.

## How to run it
1: npm install
2: npm start 

that's it

## Finished Features
### Animated Gradient hero image that looks very sassy
![Animated gradient hero image](https://user-images.githubusercontent.com/27336508/63577697-98068680-c554-11e9-88d2-be9f788c41a0.gif)

I tried to polish the design as much as possible in the time frame, Animated Hero Images and Gradients are very cool right now, I think it makes quite the first impression, and its super easy to do too! 

![lets look at the source code...](https://user-images.githubusercontent.com/27336508/63578117-6e9a2a80-c555-11e9-972a-ad286676a465.png)

its technically not possible to directly animate gradients, so instead we make the background huge and move it with a simple animation, im using a combination of styled components and complementing animations on Sass, Styled comps takes care of all possible class colissions. while Sass allows me to quickly prototype animations globally.
```@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.Hero {
  animation: gradientBG 40s ease infinite;
}
```
### Consistent Styling and pretty user interactions / components. 
I took insprition from CssTricks, and applied some of their advanced techniques to the page and the elements. 
![button showcase](https://user-images.githubusercontent.com/27336508/63578901-0cdac000-c557-11e9-8e37-e1330f94856d.gif)

### Display a previous Solution / buid new. 
the Solution component can react to displaying a previously made solution or allow the user to build one, depending on the props it receives.

this is an example of how the component renders the steps, note that it is very visual, the icons respond to the status of the buckets, but this can improve further. 

![premade](https://user-images.githubusercontent.com/27336508/63579318-f719ca80-c557-11e9-96d1-3eef7e7eba56.png)

this is an example of how the component reacts to building a new solution. 
just as before, i tried to do it as user friendly and visual as possible in the time I was given, in this case, the card is a form. 

![NEWSolution](https://user-images.githubusercontent.com/27336508/63579486-668fba00-c558-11e9-99de-cc1f51b70e35.png)

The field for Origin only displays when its needed, such as in the TRANSFER action. 

![Origin](https://user-images.githubusercontent.com/27336508/63579608-ac4c8280-c558-11e9-9364-ee5e24d3f72b.png)





