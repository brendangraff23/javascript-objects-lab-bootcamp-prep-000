var recipes = {};

function updateObjectWithKeyAndValue(object, key, value)
{
  var newRecipe = Object.assign({}, object);
  newRecipe[key] = value;
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)
{
  object[key] = value;
  return object;
}

function deleteFromObjectByKeyefsd;jf(object,)