using System;

namespace PascalTriangle
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Basamak sayısını giriniz: ");
            int numRows = int.Parse(Console.ReadLine());

            for (int i = 0; i < numRows; i++)
            {
                for (int j = 0; j < numRows - i - 1; j++)
                {
                    Console.Write(" ");
                }
                for (int j = 0; j <= i; j++)
                {
                    Console.Write(Combination(i, j) + " ");
                }
                Console.WriteLine();
            }
        }        static long Combination(int n, int r)
        {
            return Factorial(n) / (Factorial(r) * Factorial(n - r));
        }
        static long Factorial(int n)
        {
            long factorial = 1;
            for (int i = 1; i <= n; i++)
            {
                factorial *= i;
            }
            return factorial;
        }
    }
}