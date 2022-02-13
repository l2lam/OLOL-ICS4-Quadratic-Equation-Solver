
#include <stdio.h>
#include <math.h>

int
main ()
{
    // Quadratic Formula
  printf ("This program solves quadratics in two separate ways\n");
  printf ("Insert your a, b and c values as asked\n");
  printf("To see answers scroll down after entering coefficient\n");
  printf("root1 and root2 are solved with the quadratic formula, rootnew1, rootnew2 are solved with the new way\n\n");

  double a, b, c;
  printf("Enter (a) coefficient:");
    scanf("%lf", &a);
    printf("Entered (a) value is:%lf\n\n", a);
    
    printf ("Enter (b) coefficient:");
    scanf("%lf", &b);
    printf ("Entered (b) value is:%lf\n\n", b);
  
    printf("Enter (c) coefficient:");
    scanf("%lf", &c);
    printf("Entered (c) value is:%lf\n\n", c);

  printf (" First two roots are found using the quadratic formula \n");
  printf (" Takes the inputs from user, solves for the discriminant \n");
  printf(" Depending on value of the discriminant program calculates 0, 1, or 2 roots \n");
  printf(" This is done using the quadratic formula and subbing in the discriminant \n\n");
  
  double disc;
  disc = pow (b, 2) - 4 * a * c;

  double root1, root2;

  if (disc < 0)
    {
      printf (" discriminant is negative, No Real Answers. \n\n");
      printf (" discriminant = %f\n\n", disc);
    }

  else if (disc > 0)
    {
      printf (" discriminant is greater than 0, two real answers \n\n");
      printf (" discriminant = %f\n\n", disc);

      root1 = (-b - sqrt (disc)) / (2 * a);
      printf (" root1 = %f\n\n", root1);

      root2 = (-b + sqrt (disc)) / (2 * a);
      printf (" root2 = %f\n\n", root2);
    }
  if (disc == 0)
    {

      printf (" discriminant = %f\n\n", disc);

      printf (" discriminant is equal to 0 one real answer\n\n");

      root1 = root2 = (-b - sqrt (disc)) / (2 * a);

      printf (" root1 = %f\n\n", root1);


    }
  {
    // The New Way To Solve Quadratics
    double z, avg, disc2, rootnew1, rootnew2;

    printf (" The second set of roots are calculated using the new method\n");
    printf
      (" The new method divides b and c by the a value then finds the average of b\n");
    printf
      (" The average is squared and the the c value is subtracted from the average to find the discriminant\n");
    printf
      (" negative discriminant means no real numbers, = to 0 discriminant means 1 real answer, positive discriminant means 2 real answers\n");
    printf (" The number of roots are shown properly\n");
    printf
      (" the discriminant is then square rooted to find the value of z\n");
    printf
      (" The first root is found by - (avg + z) and the second - (avg - z)\n\n");


    avg = (b / (a * 2));

  disc2 = (pow (avg, 2) - (c / a));
    
    
    printf (" discriminant new = %f\n\n", disc2);
    z = sqrt (disc2);




    if (disc2 < 0)
      {
	printf (" negative discriminant, 0 real answers\n\n");
      }
    else if (disc2 > 0)
      {
	printf (" Positive discriminant, 2 real answers\n\n");
	rootnew1 = -(avg + z);
	rootnew2 = -(avg - z);
	printf (" rootnew1 = %f\n\n", rootnew1);
	printf (" rootnew2 = %f\n", rootnew2);
      }
    if (disc2 == 0)
      {
	printf (" discriminant = 0, 1 real answer\n\n");
	rootnew1 = rootnew2 = -(avg + z);
	printf (" rootnew1 =%f\n", rootnew1);
	return 0;
      }
  }
}

 


