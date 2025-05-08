# What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

Enums in TypeScript are a powerful feature that provides a way to define a set of named constants. They can be numeric or string-based, and it is easy to handle both types in TypeScript.

## Benefits of Using Enums:

- Readability: Enums provide descriptive names to numeric or string values, making the code easier to understand.
- Type Safety: TypeScript ensures that only valid values from the enum can be used, preventing errors.
- Maintainability: Changes to the enum can be easily made in one place, without the need to modify every reference to the value.

## Numeric Enums Example:

> enum Days {
>
> Monday, // 0
>
> Tuesday, // 1
>
> Wednesday, // 2
>
> Thursday, // 3
>
> Friday, // 4
>
> Saturday, // 5
>
> Sunday // 6
>
> }
>
> let today: Days = Days.Monday;
>
> console.log(today); // Output: 0

In the above example, the Days enum automatically assigns numeric values starting from 0 to each day of the week.

## String Enums Example:

> enum Color {
>
> Red = "RED",
>
> Green = "GREEN",
>
> Blue = "BLUE"
>
> }
>
> let favoriteColor: Color = Color.Green;
>
> console.log(favoriteColor); // Output: GREEN

In the above example, the Color enum uses string values for each color. This makes the output much more readable and meaningful compared to numeric enums.

# Provide an example of using union and intersection types in TypeScript.

## Union Types

A union type allows a variable to hold more than one type. This means we can define a type that could be one of several types, separated by the pipe (|) operator. Union types are useful when a variable can accept different kinds of values.

## Example: Union Type

> function printId(id: number | string): void {
>
> console.log(`Your ID is: ${id}`);
>
> }
>
> printId(123); // Output: Your ID is: 123
>
> printId("ABC123"); // Output: Your ID is: ABC123

In the above example, the printId function accepts either a number or a string as the parameter. The union type (number | string) allows flexibility while still providing type safety.

## Intersection Types

An intersection type combines multiple types into one. It is used when we want a value to have all the properties of the provided types. This is done using the ampersand (&) operator. Intersection types are particularly useful when we need a type that is a combination of multiple existing types.

## Example: Intersection Type

> interface Person {
>
> name: string;
>
> age: number;
>
> }
>
> interface Employee {
>
> jobTitle: string;
>
> department: string;
>
> }
>
> type EmployeeDetails = Person & Employee;
>
> const employee: EmployeeDetails = {
>
> name: "Shafayath Jamil",
>
> age: 26,
>
> jobTitle: "Software Developer",
>
> department: "Engineering"
>
> };
>
> console.log(employee);

In the above example, the EmployeeDetails type is an intersection of Person and Employee. This means it must include all properties from both interfaces. The result is a single type that includes the name, age, jobTitle, and department properties.
