# Advice-Generator-App

Hello everybody! 👋 </br>
✨ Welcome to the Advice Generator App! This is a simple Advice Generator application that fetches random advice from an API and displays it to the user. The app is built using HTML, CSS, and JavaScript.


## 👀 Overview

### 📷 Screenshot

![screencapture-tucecifci-github-io-Advice-Generator-App-2024-07-22-11_04_50](https://github.com/user-attachments/assets/e9e7f403-a40b-418f-a633-5510c5c0835b)

![screencapture-tucecifci-github-io-Advice-Generator-App-2024-07-22-11_04_59](https://github.com/user-attachments/assets/e2f49881-082a-47c3-ab2e-d30bad4bd06d)



https://github.com/user-attachments/assets/bf30cd19-1698-4713-bd51-56f0acf04662


### 🔗 Links

https://tucecifci.github.io/Advice-Generator-App/

## My process

### 💡 Built with

The Random Quotes Generator is built using the following technologies:

- HTML5: Used for structuring the webpage content.
- CSS3: Used for styling the user interface.
- JavaScript: Used for fetching and displaying random quotes.

### 🧠 What I learned

During the development of this application, I gained experience and insights in the following areas:

- Working with APIs: Learned how to fetch data from an external API using the fetch function in JavaScript.
- DOM Manipulation: Practiced manipulating the DOM to dynamically update the content displayed to the user.
- Error Handling: Implemented basic error handling to ensure the application can gracefully handle API request failures.
- Project Structure: Improved my understanding of structuring a simple web project with separate HTML, CSS, and JavaScript files.

```javascript
  const dice = document
  .querySelector(".dice")
  .addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      const adviceId = data.slip.id;
      const advice = data.slip.advice;

      document.querySelector(".advice-id").innerText = `ADVICE #${adviceId}`;
      document.querySelector(".advice-text").innerText = `"${advice}"`;
    })
    .catch((err) => console.log(err));
}
```

### 👩🏼‍💻 Features

- Fetch Random Advice: Users can click a button to fetch and display a random piece of advice.
- Display Advice ID: Along with the advice, the app also displays the unique ID associated with that advice.
- Error Handling: The app handles errors gracefully and logs them to the console.


### 🤔 How to Use

- Open the application in a web browser.
-  Click the "Get Advice" button to fetch and display a random piece of advice along with its ID.

### 🤌🏻 Useful resources

- https://api.adviceslip.com/
- https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub

## 🏳️‍🌈 Author

- Tuğçe Çifci - [@tucecifci](https://github.com/tucecifci)
- Frontend Mentor - [@tucecifci](https://www.frontendmentor.io/profile/tucecifci)
