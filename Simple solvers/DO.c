#include <math.h>
#include <stdio.h>
int main() {

//input a, b ,c / variables
    double a, b, c, discriminant;
    printf("Enter the A value:");
    scanf("%lf", &a);
    printf("Enter the B value:");
    scanf("%lf", &b);
    printf("Enter the C value:");
    scanf("%lf", &c);
    printf("\n");
    discriminant = (b * b - 4 * a * c);

//Quadratic variables  
    double root1, root2;

//Using the Quadratic equation way
        root1 = (-b + sqrt(discriminant)) / (2 * a);
        root2 = (-b - sqrt(discriminant)) / (2 * a);
        
//Print roots from Quadratic equation
        printf("The Quadratic equation will take the inputs a, b, c and put them into the equation (b * b - 4 * a * c) to give us our discriminant.\n");
        printf("It will then all go into the equation (-b +/- sqrt(discriminant)) / (2 * a)) to give us our roots.\n\n");
        printf("nan = Not A Number, which means their are no roots.\n\n");
        printf("Using the quadratic formula the discriminant and roots are: \n");

        printf("The discriminant is: %lf \n", discriminant);
        printf("root1 = %lf  \n", root1);
        printf("root2 = %lf  \n\n", root2);
        
//New way variables
    double root_1, root_2, m, z, discriminant2;
         
//Using the New way 
        m = (-b / (2 * a));
        discriminant2 = (m * m - (c / a));
        z = sqrt(discriminant2);
        root_1 = (m + z);
        root_2 = (m - z);
        
//Print roots from new way
        printf("The new way will take a and b to sub into (-b / (2 * a)) to give us m.\n");
        printf("Once we have m we sub m, a, and c into (m * m - (c / a)) to give us our discriminant.\n");
        printf("Once we have the discriminant we will square it to give us z. We will then sub m and z into (m +/- z) to give us our two roots.\n\n");
        printf("Using the new method the discriminant and roots are: \n");

        printf("The discriminant is: %lf \n", discriminant2);
        printf("root_1 = %lf \n", root_1);
        printf("root_2 = %lf", root_2);

    return 0;
}
