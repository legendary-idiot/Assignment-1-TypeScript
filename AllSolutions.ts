function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  }
  return input.toLowerCase();
}

type MovieItem = {
  title: string;
  rating: number;
};

function filterByRating(items: MovieItem[]): MovieItem[] {
  return items.filter((item: MovieItem) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];
  for (const array of arrays) {
    result.push(...array);
  }
  return result;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }
  getInfo(): void {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): void {
    console.log(`Model: ${this.model}`);
  }
}

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  }

  return value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  let mostExpensiveProduct: Product = products[0];

  for (const product of products) {
    if (product.price > mostExpensiveProduct.price) {
      mostExpensiveProduct = product;
    }
  }

  return mostExpensiveProduct;
}

enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function getDayType(day: Day): string {
  if (day === "Saturday" || day === "Sunday") {
    return "Weekend";
  }
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject("Negative Number Not Allowed");
    }
  });
}
