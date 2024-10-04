# Recipe Book App

This is a Recipe Book application developed with React for the frontend and Django for the backend. The app allows users to search for recipes using a public API, filter results based on dietary preferences, and save favorite recipes. Users can also create, read, update, and delete their own recipes, which are managed using Django as the backend.

Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Frontend Details](#frontend-details)
- [Backend Details](#backend-details)
- [Middleware Interaction](#middleware-interaction)

Features

- Search for recipes using a public API.
- Filter recipes by dietary preferences (vegan, gluten-free, dairy-free).
- Save favorite recipes to "My Recipes".
- Full CRUD (Create, Read, Update, Delete) functionality for user-created recipes.
- User-friendly and responsive UI.

Technologies used

- Frontend: React
- Backend: Django, Django REST Framework
- Middleware: Custom middleware to handle interactions between the frontend and backend
- Databases: SQLite (default), can be changed to PostgreSQL or other databases
- API: Public recipe API for fetching recipes as well as custom API

Frontend Details

The frontend is developed using React and includes the following key components:

- HomePage: Displays a list of recipes fetched from the public API.
- RecipeSearch: Allows users to search for recipes based on ingredients and filter by dietary preferences.
- MyRecipes: Displays recipes saved by the user and allows full CRUD operations.
- RecipeTile: Form component for creating and editing recipes.

Key Files and Directories

- src/App.js: Main application component.
- src/main.js: Entry point of the React application.
- client/index.html: HTML template.

Backend Details

The backend is developed using Django and Django REST Framework and includes the following key features:

- Recipe Model: Defines the schema for storing recipes.
- Recipe Serializer: Serializes and deserializes recipe data.
- Recipe ViewSet: Provides CRUD operations for recipes via REST API endpoints.
- Key Files and Directories
- recipes/models.py: Contains the Recipe model definition.
- recipes/serializers.py: Contains the Recipe serializer.
- recipes/views.py: Contains the Recipe viewset.
- recipes/urls.py: URL routing for the Recipe API endpoints.
- recipebook/settings.py: Django project settings.
- recipebook/urls.py: URL routing for the Django project.
- 
Middleware Interaction

The middleware is responsible for handling interactions between the frontend and backend. It includes:

- API Calls: The frontend makes API calls to the backend using Axios (or Fetch) to perform CRUD operations on recipes.
- Authentication: Middleware can be extended to handle user authentication and authorization.
- Data Validation: Ensures data integrity between the frontend and backend.
- API Endpoints
GET /api/recipes/: Retrieve a list of recipes.
POST /api/recipes/: Create a new recipe.
GET /api/recipes/:id/: Retrieve a specific recipe.
PUT /api/recipes/:id/: Update a specific recipe.
DELETE /api/recipes/:id/: Delete a specific recipe.
