let GM = "GM";
let GN = "GN";

let gmAction = () => {
    console.log("gmAction -- step-1");
    return { type: GM }
}

let gnAction = () => {
    console.log("gnAction");
    return { type: GN }
}


/**
 * action is a function that returns an object {}
 */

export { gmAction, gnAction, GM, GN };
// exporting as named export