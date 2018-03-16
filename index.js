var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var newRecipe = Object.assign({}, object);
  newRecipe[key] = value;
  return recipes;
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  recipes[key] = value;
  return recipes;
}

