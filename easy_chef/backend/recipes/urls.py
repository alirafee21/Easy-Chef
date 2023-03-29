from django.urls import path
from recipes.views import *

urlpatterns = [
    path('create/', CreateView.as_view(), name='create'),
    path('ingredient-search/', IngredientSearchView.as_view(), name='ingredient_search'),
    path('delete-recipe/', DeleteRecipe.as_view(), name='delete_recipe'),
    path('<int:recipe_id>/update-recipe/', UpdateRecipe.as_view(), name='update_recipe'),
    path('<int:recipe_id>/update-recipe-files/', RecipeFileUpdate.as_view()),
    path('<int:instruction_id>/update-instruction-files/', InstructionFileUpdate.as_view()),
    path('recipe-details/', RecipeDetails.as_view(), name='recipe_details'),
    path('shopping-list/', ShoppingList.as_view(), name='shopping_list'),
    path('update-recipe-servings', UpdateRecipeServings.as_view(), name='update_recipe_servings'),
    path('<int:recipe_id>/upload-recipe/', RecipeFileUpload.as_view()),
    path('<int:instruction_id>/upload-instruction/', InstructionFileUpload.as_view()),
]
