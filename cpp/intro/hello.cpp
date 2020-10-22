//This library contains code that allows for input and output, such as displaying data in the terminal window, or reading input from your keyboard.
#include <iostream>

using namespace std; //no need to type std::

int main() 
{
  
 //(pronounced “see out”) belongs to std namespace, which provides a selection of functions and vars within a library
  std::cout << "Hello World!\n";

  //declare and initialize a variable; int is a type 
  int score = 0;
  std::cout << score << "\n";  

  int age = 28;
  //chaining
  std::cout << "Hello, I am " << age << " years old\n";

  //cin input stream (pronounced “see-in”
  int tip = 0;
  std::cout << "Enter tip amount: ";
  std::cin >> tip;
  std::cout << "You paid " << tip << " dollars\n";
}

//Compile: g++ hello.cpp ; ./a.out  or g++ hello.cpp -o hello (od razu nazwie plik docelowy hello)  ; ./hello

/* int = 4 bytes (32 bits)
int main returns 0 by default