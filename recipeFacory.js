function recipeFactory(name, ingredients, steps) {
	return {
		name: name,
		ingredients: ingredients,
		steps: steps,
		setpsHtml: function() {
			return this.steps.reduce(function (av, cv) {
				return av + "<li>" + cv + "</li>"
			}, "<ol>") + "</ol>";
		},
		ingredientsHtml: function() {
			return this.ingredients.reduce(function (av, cv) {
				return av + "<li>" + cv + "</li>"
			}, "<ol>") + "</ol>";
		}
	}
}

var grilledCheese = recipeFactory(
    'grilled cheese',
    ['2 slices bread', 'butter', '1 slice cheese'],
    ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']);

console.log(grilledCheese.name);
console.log(grilledCheese.ingredientsHtml());
console.log(grilledCheese.setpsHtml());