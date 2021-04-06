# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jiexipei/lotide`

**Require it:**

`const _ = require('@jiexipei/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:


* `head`: a function to return the first element of a array.
* `tail`: a function to return the elements except the first one in a array.
* `middle`: a function to return the middle element(s) of a array.
* `eqArrays` a function to compare the equality of two arrays.
* `assertArraysEqual`: a function to assert the equality of two arrays.
* `assertEqual`: a function to compare the equality of two strings.
* `countOnly`: a function to count through a array to count those elements that has the true value in conditional object.
* `letterPositions`: a function ato find out all the index of every words appear in a string.
* `findKeyByValue`: a function to find the key in a object by a given value.
* `eqObjects`: a function to compare th equality of two objects.
* `map`: a function that accept a callback function to edit every element in a array.
* `countLetters`: a function to count the times of every letter appear in a string.
* `obfuscate`: a function that create a secret password by a given string.
* `takeUntil`:a function extract elements from a array until a callback function return true.
* `without`:a function that return all the elements that the object array do not have but the condition array have.