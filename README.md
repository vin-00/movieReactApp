# 🎬 Movie Explorer

Movie Explorer is a sleek and responsive movie browsing application built with **React**, **TailwindCSS**, and powered by **The Movie Database (TMDb) API**. It allows users to search for movies, explore all available titles, and view trending films based on real-time search data using **Appwrite** as the backend database.

![image](https://github.com/user-attachments/assets/e5924a53-9dc4-49e8-9ff1-22b2b930a7a4)
![image](https://github.com/user-attachments/assets/8049986a-2d13-405f-9dea-94c3eb458f8d)

---

## 🚀 Features

- 🔍 **Search Movies** – Quickly search for your favorite movies with real-time results.
- 🎞️ **Browse All Movies** – Discover a wide range of movies fetched from TMDb API.
- 📈 **Trending Section** – View the top 5 trending movies based on user searches, dynamically updated with Appwrite.
- ⚡ **Fast & Responsive** – Optimized for both desktop and mobile experiences with TailwindCSS.

---

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/)
- **Styling:** [TailwindCSS](https://tailwindcss.com/)
- **API:** [TMDb API](https://developer.themoviedb.org/docs)
- **Backend/Database:** [Appwrite](https://appwrite.io/)

---

## 🧠 How It Works
- 🔄 Fetching Movies
Uses TMDb API to fetch and display a list of movies.

Search queries are sent to the API as users type in the search bar.

- 📊 Tracking Search Trends
When a user searches for a movie:

The search term is logged in the Appwrite database.

A counter is incremented for each movie title.



Trending section pulls the top 5 most searched movies from the Appwrite database.
