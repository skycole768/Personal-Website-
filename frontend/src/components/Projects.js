import ProjectCard from "./ProjectCard";
import '../styles/projects.css';
import DAWGIT from '../images/DAWGIT.png'
import DAWGEAT from '../images/DAWGEAT.png'
import React from "react";

const Projects = React.forwardRef((props, ref) => {

  const {contactRef} = props

  const projects = [
    { 
      title: 'Olea Mpox Health Platform',
      description:
        "Olea Mpox Health Support Platform is a comprehensive web application designed to provide multilingual health support for Mpox. Developed using Next.js, hosted on AWS EC2 and Vercel, this scalable platform integrates advanced technologies to deliver 24/7 assistance.<br><br>" +
        "• OpenAI GPT-3.5: Powers the chatbot to offer intelligent and context-aware responses to user inquiries about Mpox, ensuring accurate and relevant information.<br>" +
        "• Google API: Used to provide an interactive map that helps users locate nearby clinics for Mpox-related care.<br>" +
        "• MUI: Framework for creating a responsive and user-friendly interface that enhances the overall user experience.<br><br>" +
        "As the project lead, I managed a team of four using Scrum agile methodology to ensure efficient development and effective collaboration.<br><br>" +
        "Key Features:<br>" +
        "• 24/7 Multilingual Support: Offers continuous assistance in multiple languages to cater to a diverse user base.<br>" +
        "• Interactive Map: Provides users with an easy-to-use map for finding nearby clinics and healthcare facilities.<br>" +
        "• Scalable Design: Built to handle a growing number of users and interactions efficiently.<br><br>" +
        "This project demonstrates a commitment to leveraging advanced AI and technology to improve access to Mpox healthcare, while effectively managing a development team and utilizing modern deployment strategies.",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'skycole768',       // Replace with your GitHub username if applicable
      repo: 'Mpox_Chatbot'
    },
    { 
      title: 'FindTune',
      description:
        "FindTune is an innovative React application designed to enhance music discovery through voice recordings. Users can record their voice using a simple interface, and the app leverages advanced AI technologies to find and recommend songs that match the recorded content.<br><br>" +
        "• Voice Recording: Users can easily record their voice with a single button click.<br>" +
        "• Whisper AI: Utilizes Hugging Face's Whisper API to transcribe the recorded voice into text accurately.<br>" +
        "• Spotify Integration: Searches through Spotify's extensive music library to find songs that contain lyrics or themes related to the transcribed text.<br>" +
        "• Save and Manage: Allows users to save and manage their discovered songs, creating a personalized playlist based on their voice recordings.<br><br>" +
        "Key Features:<br>" +
        "• Seamless Voice-to-Text Conversion: Powered by Whisper AI for accurate and efficient transcription.<br>" +
        "• Smart Music Discovery: Matches voice recordings with Spotify's vast catalog to suggest relevant songs.<br>" +
        "• User-Friendly Interface: Easy-to-use design for recording, searching, and managing music.<br><br>" +
        "FindTune represents a creative fusion of voice technology and music discovery, offering a unique way for users to explore and enjoy music based on their personal voice recordings.",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'lisaComments',       // Replace with your GitHub username if applicable
      repo: 'FindTune'
    
    },
    { 
      title: 'AI Virtual Mental Health Therapist',
      description:
    "AI Mental Health Chatbot is an advanced web application developed to offer continuous, multilingual mental health support. Built using Next.js and deployed on AWS EC2, this scalable solution leverages cutting-edge technology to deliver effective mental health assistance around the clock.<br><br>" +
    "• OpenAI GPT-3.5: Utilized for providing intelligent, empathetic, and context-aware responses to users, ensuring high-quality mental health support.<br>" +
    "• Next.js: Framework used for developing a robust and scalable frontend application that enhances user experience.<br>" +
    "• AWS EC2: Platform for deploying and scaling the application, ensuring reliable and efficient performance.<br><br>" +
    "As the project lead, I managed a team of four using Scrum agile methodology to ensure timely delivery and effective collaboration.<br><br>" +
    "Key Features:<br>" +
    "• 24/7 Multilingual Support: Provides continuous assistance in multiple languages to cater to a diverse user base.<br>" +
    "• Scalability: Designed to handle a growing number of users and interactions efficiently.<br>" +
    "• Team Leadership: Led a team through the development process using Scrum methodology, focusing on iterative progress and clear communication.<br><br>" +
    "This project demonstrates a commitment to leveraging AI for enhancing mental health support while effectively managing a development team and utilizing modern deployment strategies.",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'sufyan360',       // Replace with your GitHub username if applicable
      repo: 'AI_Customer_Support'
    
    },
     { 
      title: 'Check my Professor',
      description:
    "Professor Recommendation Chatbot is an interactive web application built with Next.js, designed to provide personalized professor recommendations based on user input. Utilizing Pinecone API and OpenAI GPT-3.5 Turbo, this application offers accurate and context-aware suggestions from a curated database.<br><br>" +
    "• OpenAI GPT-3.5 Turbo: Used for interpreting user preferences and generating relevant queries, ensuring intelligent and context-aware recommendations.<br>" +
    "• Pinecone API: Facilitates efficient and precise searching within a vector database of professor profiles, providing fast and accurate results.<br>" +
    "• Next.js: Framework utilized for developing a responsive and user-friendly frontend interface.<br><br>" +
    "As the project lead, I managed a team of four using Scrum agile methodology to ensure effective collaboration and timely delivery.<br><br>" +
    "Key Features:<br>" +
    "• Personalized Recommendations: Provides tailored suggestions based on user descriptions of their ideal professor.<br>" +
    "• Efficient Search: Employs Pinecone API to quickly locate matching professor profiles from a detailed database.<br>" +
    "• User-Friendly Interface: Built with Next.js to offer a smooth and engaging user experience.<br><br>" +
    "This project highlights the integration of advanced AI technologies to enhance the process of finding ideal academic mentors, demonstrating leadership in managing development and utilizing modern technology solutions.",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'sufyan360',       // Replace with your GitHub username if applicable
      repo: 'professor_check'
    
    },
    { 
      title: 'Memory Base',
      description:
        "Memory Base is a dynamic web application built with Next.js and MUI, designed to help users generate and manage flashcards efficiently. The application leverages several advanced technologies to deliver a seamless user experience:<br><br>" +
        "• Clerk API: Used for handling user authentication and management, ensuring secure and personalized access.<br>" +
        "• OpenAI GPT-3.5 Turbo: Utilized to generate flashcards based on user-provided topics. This powerful AI tool creates custom flashcards tailored to the user's needs.<br>" +
        "• Stripe API: Manages the payment process for subscribing to Basic or Pro plans, offering users a straightforward way to access premium features.<br><br>" +
        "Key Features:<br>" +
        "• Flashcard Generation: Automatically create flashcards based on topics specified by the user, using OpenAI's advanced language model.<br>" +
        "• Flashcard Management: Users can create, organize, and manage multiple sets of flashcards tailored to their study needs.<br>" +
        "• Subscription Plans: Users can choose between Basic and Pro subscriptions, with the payment process handled seamlessly via Stripe.<br><br>" +
        "Memory Base combines cutting-edge technologies with a user-friendly interface to enhance the learning experience through effective flashcard management.",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'sufyan360',       // Replace with your GitHub username if applicable
      repo: 'memory_base'
    
    },
    { title: 'Pantry Tracker',
      description: 
        "Pantry Tracker is a responsive web application built with MUI and Next.js, featuring a Firebase backend and deployed on Vercel. " +
        "The app allows users to efficiently track their pantry items, with the ability to add, edit, and remove items as needed.<br><br>" +
        "Key Features:<br>" +
        "• Add new pantry items with detailed information.<br>" +
        "• Edit existing pantry items to keep your inventory up-to-date.<br>" +
        "• Remove items when they are no longer needed.<br><br>" +
        "This project showcases the seamless integration of frontend and backend technologies to create a user-friendly and functional application for managing pantry inventories.<br><br>" +
        "Check out the live version of the app: <a href='https://pantry-azure.vercel.app/' target='_blank' rel='noopener noreferrer'>Pantry Tracker</a>",
      imageUrl: 'YOUR_IMAGE_URL_HERE',  // Replace with the actual image path or URL
      owner: 'skycole768',       // Replace with your GitHub username if applicable
      repo: 'Pantry-Tracker'
    
    },
    { title: 'Dawgit Web App', 
      description: "A web application built with React that replicates the core functionalities of Reddit. It features a MySQL backend that allows users to search through posts and interact with the content. Authorized users can also add, update, and delete their own posts and comments.<br><br>" +
              "Key Features:<br>" +
              "• Search and browse through posts and comments.<br>" +
              "• Users can create new posts, as well as edit or delete their own content.<br>" +
              "• Interaction with posts includes commenting and voting.<br><br>" +
              "This application combines a robust backend with a dynamic frontend to provide a comprehensive platform for user-generated content.",
      imageUrl: DAWGIT,
      owner: "xHiQuality",
      repo: "4050project"
    },
    { title: 'DawgEats Web App', 
      description:
              "A dynamic web application built with React that showcases local restaurants in Athens. The application interfaces with a MongoDB backend, providing users with the ability to search for restaurants, view detailed information, and explore various dining options.<br><br>" +
              "Key Features:<br>" +
              "• Search and filter through a diverse range of restaurants.<br>" +
              "• View detailed profiles for each restaurant, including menu items and reviews.<br>" +
              "• Authorized users can add new restaurants, as well as update or delete existing entries.<br><br>" +
              "This application combines a user-friendly interface with robust backend functionality to enhance the dining experience for the Athens community.",
      imageUrl: DAWGEAT,
      owner: "tc89585",
      repo: "DawgEats"
    
    },
    {
      title: 'Data Structures: Sorting Algorithms Implementation',
      description:
        "This project implements various sorting algorithms in Java, including QuickSort, HeapSort, MergeSort, and SelectionSort, as part of a sorting driver application. The project demonstrates the implementation of fundamental sorting techniques and allows for flexibility in testing with different data inputs.<br><br>" +
        "Compilation and Execution:<br>" +
        "• To compile the project: `javac SortDriver.java`<br>" +
        "• To run the code with a specified input file: `java SortDriver fileName.txt`<br>" +
        "• To run the code with user-specified data length (no input file): `java SortDriver`<br><br>" +
        "Additional Notes:<br>" +
        "The code and algorithmic logic are partially based on Mr. Meena's slides, with proper citation as per project guidelines. The project includes implementations for QuickSort, HeapSort, MergeSort, and SelectionSort, showcasing a variety of sorting techniques and their applications.",
      imageUrl: DAWGEAT,  
      owner: 'skycole768',
      repo: 'data-structures-project-03',
  }, 
    {
      title: 'Data Structures: Binary Tree Operations',
      description:
        "A Java-based project focused on implementing and analyzing various operations on binary trees, including retrieving single parents, counting leaf nodes, and finding cousins.<br><br>" +
        "Key Functions and Complexities:<br>" +
        "• getSingleParent: Identifies and prints nodes with exactly one child. This function operates with a time complexity of O(n), utilizing a recursive approach to traverse the tree and check each node.<br>" +
        "• getLeafNodes: Counts the number of leaf nodes in the binary tree. The time complexity is O(n), achieved through a recursive traversal that checks each node's children.<br>" +
        "• getCousins: Finds and prints the cousins of a specified node. This function operates with a time complexity of O(n^(log2(3))), involving level determination and cousin retrieval through multiple recursive passes.<br><br>" +
        "This project demonstrates the application of recursive algorithms and the analysis of their complexities in manipulating and querying binary trees, emphasizing efficient traversal and node processing techniques.",
      imageUrl: DAWGEAT,  
      owner: 'skycole768',
      repo: 'data-structures-project-03',
  }, 
    {
      title: 'Data Structures: Doubly Linked List Operations',
      description:
        "A Java-based project that delves into the complexities of working with doubly linked lists, implementing and analyzing key operations such as reversing the list, swapping alternate nodes, and deleting a subsection of nodes based on specified bounds.<br><br>" +
        "Key Operations and Complexities:<br>" +
        "• reverseList: Reverses the entire linked list with a time complexity of O(n), achieved by iterating through the list and swapping pointers.<br>" +
        "• swapAlternates: Swaps alternate nodes within the linked list, resulting in a time complexity of O(n^2) due to nested operations and repeated node retrieval.<br>" +
        "• deleteSubsection: Deletes nodes within a specified range, with an overall time complexity of O(n^2), reflecting the multiple passes needed to identify and remove nodes.<br><br>" +
        "This project showcases a deeper exploration of algorithmic efficiency in manipulating doubly linked lists, highlighting the trade-offs between time complexity and functionality.",
      imageUrl: DAWGEAT,  
      owner: 'skycole768',
      repo: 'data-structures-project-02',
  }, 
    {
      title: 'Data Structures: Linked List Operations',
      description:
        "A Java-based project focused on implementing and analyzing various operations on linked lists, including insertion, deletion, merging, and finding intersections.<br><br>" +
        "Key Operations and Complexities:<br>" +
        "• insertItem: Inserts an item into the linked list with a time complexity of O(n^2), due to nested loops and method calls.<br>" +
        "• deleteItem: Deletes an item from the linked list with a time complexity of O(n), influenced by searching and node retrieval.<br>" +
        "• mergeList: Merges two sorted linked lists, resulting in an overall time complexity of O(n^3) due to multiple nested operations.<br>" +
        "• findIntersection: Identifies the intersection of two linked lists with a time complexity of O(n^3), reflecting the nested loop structure and node comparisons.<br><br>" +
        "This project highlights the intricacies of algorithmic complexity in data structures, offering practical insights into the performance of linked list operations.",
      imageUrl: DAWGEAT,  
      owner: 'skycole768',
      repo: 'data-structure-project-01-',
  }, 
    {
      title: 'Connect4',
      description: (
        "Welcome to the classic Connect 4 game, now in a text-based version! " +
        "Test your strategic skills by dropping discs into a 7x6 grid, aiming" +
        " to connect four of your discs in a row — vertically, horizontally, " +
        "or diagonally — before your opponent does.<br><br>" +
        "Player Modes:<br>" +
        "-h -h: Human vs. Human - Play against a friend in a head-to-head battle of wits.<br>" +
        "-h -c: Human vs. Computer - Challenge the computer!<br>" +
        "-c -c: Computer vs. Computer - Watch two players battle it out in an automated match.<br><br>" +
        "Simply choose your mode, and let the game begin! With clear prompts and<br>" +
        "intuitive commands, you can focus on outmaneuvering your opponent and claiming victory."
      ),
      imageUrl: DAWGEAT,  
      owner: 'skycole768',
      repo: 'Connect4',
  }, 
  {
    title: 'Gallery Application',
    description: (
    "A GUI application built using JavaFX 11 that allows users to search for images based on query results from the iTunes Search API." +
    "The application displays a visually appealing gallery of images, fetched dynamically based on the search query.<br><br>" +
    "Key Features:<br>" +
    "• Search Functionality: Enter a query to retrieve and display relevant images from the iTunes Search API.<br>" +
    "• Dynamic Gallery: The application showcases images in a user-friendly gallery layout, adjusting to the number of search results.<br>" +
    "• JavaFX 11: Utilizes JavaFX 11 for creating a responsive and interactive user interface, ensuring a smooth user experience.<br><br>" +
    "You can request access to the private repository or contact me for more details."
    ),
    imageUrl: DAWGEAT,  
    owner: 'skycole768',
    repo: 'Gallery',
    private: true
},
{
title: 'Minesweeper Alpha',
  description: (
    "Minesweeper Alpha is a modern text-based implementation of the classic Minesweeper game, built using Java and JavaFX. " +
    "The project features advanced game mechanics that bring a fresh take on the classic gameplay.<br><br>" +
    "Key Features:<br>" +
    "• Advanced Mechanics: Includes features such as flagging mines, revealing cells, and a timer.<br>" +
    "• Custom Difficulty: Allows players to choose from different difficulty levels.<br><br>" +
    "Technologies Used:<br>" +
    "• Java: The core programming language used for development.<br>" +
    "• JavaFX: Framework used for creating the graphical user interface.<br><br>" +
    "You can request access to the private repository or contact me for more details."
  ),
  imageUrl: DAWGEAT,  // Replace with an appropriate image URL for Minesweeper Alpha
  owner: 'skycole768',
  repo: 'MinesweeperAlpha',
  private: true
},
  ];
  
    return (
      <div className="Projects" ref={ref}>
        <h1 className="header">Projects</h1>
        <div className = "projects-container">
          {projects.map((project, index) => {
             console.log(index); // Should log 'number'
             return <ProjectCard key={index} item={project} contactRef={contactRef}/>;
           })}
      </div>
    </div>
    );
  });
  
  export default Projects;