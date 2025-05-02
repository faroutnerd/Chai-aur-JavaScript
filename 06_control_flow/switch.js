/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// ### IMPORTANT ###
// if there was no break statement in the switch case, it would execute all the cases below it until it finds a break statement or reaches the end of the switch statement. This is called "fall-through" behavior.
// For example, if we remove the break statement from the "march" case, it would execute the "april" case as well, even if the month is not "april".
// This can be useful in some cases, but it can also lead to unexpected behavior if not used carefully. To avoid this, it's generally a good practice to include a break statement at the end of each case unless you specifically want to allow fall-through behavior.
// if there is no break statement then it will execute all the cases but not the default case. The default case will only execute if none of the other cases match. So in this example, if we remove the break statement from the "march" case, it would execute the "april" case as well, but it would not execute the default case unless none of the other cases matched.
// This is because the default case is only executed if none of the other cases match, and it is not affected by the break statement in the other cases. So in this example, if we remove the break statement from the "march" case, it would execute the "april" case as well, but it would not execute the default case unless none of the other cases matched.