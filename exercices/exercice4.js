let A1= (0 == "");
let A2= (0 === "");
let B1= (0 == "0");
let B2= (0 === "0");
let C1= (0 == false);
let C2= (0 === false);
let D1= ("" == false);
let D2= ("" === false);
let E1= (null == undefined);
let E2= (null === undefined);
let F1= (null == false);
let F2= (null === false);
let G1=(NaN == NaN);
let G2=(Number.isNaN(NaN));
let H1=(1 == "1");
let H2=(1 ==="1");
let T1=(" \t\n " == 0);
let T2=(" \t\n " === 0);
console.log(`0 == ""   -> ${A1} |0 === ""   -> ${A2}`);
console.log(`0 == "0"   -> ${B1} |0 === "0"   ->  ${B2}`);
console.log(`0 == false   -> ${C1} |0 === false   ->  ${C2}`);
console.log(`"" == false   -> ${D1} |"" === false   ->  ${D2}`);
console.log(`null == undefined   -> ${E1} |null === undefined   ->  ${E2}`);
console.log(`null == false    -> ${F1} |null === false   ->  ${F2}`);
console.log(`NaN == NaN    -> ${G1} |NaN === NaN   ->  ${G2}`);
console.log(`1=="1"   -> ${H1}|1==="1"   ->  ${H2}`);
console.log(`" \t\n "== 0   -> ${T1}|" \t\n "=== 0   ->  ${T2}`);







