# TypeScript Type Information

This README provides information about primitive and reference types in TypeScript.

## Primitive Types

### 1. `number`

Represents both integer and floating-point numbers.

### Example:

```typescript
let count: number = 42;
let pi: number = 3.14;
```

### 2. `string`

Represents textual data.

```typescript
let message: string = "Hello, TypeScript!";
let firstName: string = "John";
let lastName: string = "Doe";
```

### 3. `boolean`

Represents a logical value, either true or false.

```typescript
let isValid: boolean = true;
let isDone: boolean = false;
```

### 4. `null` and `undefined`

Represent the absence of a value. By default, they are subtypes of all other types.

```typescript
let data: null = null;
let value: undefined = undefined;
```

### 5. `symbol`

A data type whose instances are unique and immutable.

## Reference Types

Reference types are more complex data types that are capable of representing structured data.

### 1. `object`

Represents an instance of a class or a structure.

```typescript
let person: object = { name: "John", age: 30 };
```

### 2. `array`

Represents a collection of elements of the same type.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

### 3. `function`

Represents a JavaScript function.

```typescript
const add: (a: number, b: number) => number = (a, b) => a + b;
```

### 4. `class`

Defines a blueprint for creating objects with a specific structure.

```typescript
class Person {
  constructor(public name: string, public age: number) {}
}

let john: Person = new Person("John", 30);
```

### 5. `interface`

Represents a contract for the shape of an object.

Feel free to customize this readme with additional information as needed for your specific project.

```typescript
interface Point {
  x: number;
  y: number;
}

let coordinates: Point = { x: 10, y: 20 };
```
