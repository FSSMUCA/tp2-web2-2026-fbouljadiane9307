let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;
let vars = [["nom", nom],["age", age],["ville", ville],["score", score],["actif", actif]];

console.log("Partie A");

for (let [name, value] of vars) {
  console.log(name + ' ?? "valeur par défaut" -> ' + (value ?? "valeur par défaut"))
}

console.log("")

console.log("Partie B")

for (let [name, value] of vars) {
  console.log(name + ' || "valeur par défaut" -> ' + (value || "valeur par défaut"))
}

console.log("---")

console.log("Partie C")

for (let [name, value] of vars) {

  let r1 = value ?? "valeur par défaut"
  let r2 = value || "valeur par défaut"

  if (r1 === r2) {
    console.log(name + " : ?? et || -> même résultat")
  } else {
    console.log(name + " : ?? et || -> résultat différent")
  }

}