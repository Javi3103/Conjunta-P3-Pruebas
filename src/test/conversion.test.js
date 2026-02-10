const { toCelsius, toFahrenheit, movingAverage } = require("../utils/conversion.js");

describe("Pruebas para funciones matematicas", () => {
  test("Convertir Fahrenheit a Celsius", () => {
    expect(toCelsius(32)).toBe(0.0);
    expect(toCelsius(212)).toBe(100.0);
    expect(toCelsius(-40)).toBe(-40.0);
    expect(() => toCelsius("32")).toThrow(TypeError);
    expect(() => toCelsius(null)).toThrow(TypeError);
  });

  test("Convertir Celsius a Fahrenheit", () => {
    expect(toFahrenheit(0)).toBe(32.0);
    expect(toFahrenheit(100)).toBe(212.0);
    expect(toFahrenheit(-40)).toBe(-40.0);
    expect(() => toFahrenheit("0")).toThrow(TypeError);
    expect(() => toFahrenheit(null)).toThrow(TypeError);
  });

  test("Calcular promedios moviles", () => {
    const series = [10, 20, 30, 40];
    expect(movingAverage(series, 2)).toEqual([15.00, 25.00, 35.00]);

    const series1 = [1, 2, 3];
    expect(movingAverage(series1, 3)).toEqual([2.00]);

    expect(() => movingAverage("not an array", 3)).toThrow(TypeError);
    expect(() => movingAverage(series, "not a number")).toThrow(RangeError);
    expect(() => movingAverage(series, 6)).toThrow(RangeError);
  });
});