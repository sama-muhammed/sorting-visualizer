<img width="1752" height="880" alt="image" src="https://github.com/user-attachments/assets/9e0df731-bd33-400c-8a48-2bee0a30d28e" />


Sorting Algorithm Visualizer

The Sorting Algorithm Visualizer is a simple and educational web application built with React.js that demonstrates how different sorting algorithms organize data step by step.
Rather than complex animations, it focuses on showing the logic behind sorting — how numbers are compared, swapped, and arranged into order.

Features

View how multiple sorting algorithms process and sort arrays

Generate new random arrays instantly

Observe each step of the sorting process in real time

Simple, clean, and responsive web interface

Designed for students learning computer science and algorithm fundamentals

Algorithms Included
🔹 Bubble Sort

This algorithm repeatedly goes through the list, compares adjacent elements, and swaps them if they are in the wrong order.
Each pass brings the largest element to the end of the array — similar to how bubbles rise to the top of water.
Best for beginners but slow for large datasets (O(n²)).

🔹 Insertion Sort

Builds a sorted section one element at a time.
It picks an element from the unsorted part and places it at the correct position in the sorted part.
Efficient for small datasets or when the array is almost sorted.

🔹 Selection Sort

Divides the array into a sorted and unsorted part.
It finds the smallest element in the unsorted part and moves it to its correct position.
Simple to understand but not very efficient for large arrays.

🔹 Merge Sort

A Divide and Conquer algorithm that splits the array into halves, sorts them, and then merges them together.
It’s efficient with large datasets due to its O(n log n) time complexity.

🔹 Quick Sort

Another Divide and Conquer algorithm that chooses a pivot and partitions the array into smaller and larger elements.
It then recursively sorts the partitions.
Extremely fast on average, making it widely used in real-world systems.

How It Works

When you run an algorithm, the application:

Generates a random array of numbers.

Executes the selected sorting algorithm step by step.

Displays the changes in order dynamically on the screen.

Finishes when all numbers are correctly sorted.

Each run helps users see how algorithms differ in their process and speed.

Tech Stack

Frontend: React.js, HTML, CSS, JavaScript

Tools: Node.js, npm

Installation & Setup

Follow these steps to run the project locally 

Clone the repository

git clone https://github.com/yourusername/sorting-visualizer.git


Go to the project folder

cd sorting-visualizer


Install dependencies

npm install


Run the project

npm start


Open your browser and go to
http://localhost:3000

Educational Purpose

This project was developed to make understanding sorting algorithms easier and more interactive.
It helps users visualize logic flow, step tracking, and algorithm efficiency — bridging the gap between code and concept.
