// This is a sample RUST program to Calculate the roots of a quadratic equation
// using 2 different methods: the quadratic formula (q formula) and a new method
// that we learned in class.
// Pleas give it a try!

use std::io::{stdin,stdout,Write};

// Get a number from the user.
fn getNumber(name: &str) -> f32 {
    let mut input = String::new();
    print!("Please enter a value for {0}: ", name);
    let _=stdout().flush();
    stdin().read_line(&mut input).expect("Did not enter a correct number");
    //println!("you said '{0}'", input);
    let result: f32 = input.trim().parse().unwrap();
    return result;
}

fn main() {
    // Take in coefficients of a quadratic formula , a, b, c
    let a: f32 = getNumber("a");
    let b: f32 = getNumber("b");
    let c: f32 = getNumber("c");
    
    // Calculate using the q forumla
    let (numRoots, root1, root2) = qForumula(a, b, c);
    if (numRoots == 0) {
        println!("Using the q formula, there no roots.");
    }
    else {
        println!("Using the q formula, there are {0} roots and they are roots are ({1:.2}, {2:.2}).", numRoots, root1, root2);
    }
    
    // Calculate using the new method
    // The new method has formulas that assumes a is 1, so we need to adjust b and c in case a is not 1.
    let (newNumRoots, newRoot1, newRoot2) = newQMethod(a, b, c);
    if (newNumRoots == 0) {
        println!("Using the new method, there no roots.");
    }
    else {
        println!("Using the new method, there are {0} roots and they are roots are ({1:.2}, {2:.2}).", newNumRoots, newRoot1, newRoot2);
    }

    // Compare the results
    if (numRoots == newNumRoots && ((root1 == newRoot1 && root2 == newRoot2) || (root2 == newRoot1 && root1 == newRoot2))) {
        println!("The two methods produce the same results, as expected.  Yay!");
    }
    else {
        println!("Oh no, something went wrong: the two methods produced differnt results!");
    }
    println!("Bye.");
}

// Caclulates the roots using the quadratic equation, returns a tupple of (the number of roots, root 1, root 2)
fn qForumula(a: f32, b: f32, c: f32) -> (u8, f32, f32) {
    let disc = b.powf(2.0) - 4.0 * a * c;
    println!("The discriminant is {0}", disc);

    if (disc > 0.0) {
        let root1 = (-b + disc.sqrt())/(2.0 * a);
        let root2 = (-b - disc.sqrt())/(2.0 * a);
        return (2, root1, root2);
    }
    else if (disc < 0.0) {
        return (0, 0.0, 0.0);
    }
    else {
        let root1 = (-b + disc.sqrt())/(2.0 * a);
        return (1, root1, root1);
    }
}

// Caclulates the roots using the new method, returns a tupple of (the number of roots, root 1, root 2)
fn newQMethod(a: f32, b: f32, c: f32) -> (u8, f32, f32) {
    let b2 = b / a;
    let c2 = c / a;
    let m = -b2/2.0;
    let z = (m.powf(2.0) - c2).sqrt();

    if (z > 0.0) {
        println!("Using the new method, the average of the root is {0}, and distance between the average and the roots is {1})", m, z);
        let root1 = m + z;
        let root2 = m - z;
        return (2, root1, root2);
    }
    else if (z == 0.0) {
        let root1 = m;
        return (1, root1, root1);
    }
    else {
        return (0, 0.0, 0.0);
    }
}
