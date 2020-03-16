'use script'

/*
ДЗ по занятию "Тестирование и сборка":
Написать приложение-калькулятор, используя подход BDD. 
Приложение должно состоять из четырех методов для сложения, вычитания, умножения и деления. 
Каждый метод принимает на вход два аргумента и выполняет действие. 
При написании тестов учесть случаи, когда на вход подаются не числа, а строки, null или undefined.
*/

class Calculator {
    static addition(a, b) {
        return a + b;
    }

    static subtraction(a, b) {
        return a - b;
    }

    static multiplication(a, b) {
        return a * b;
    }

    static division(a, b) {
        return a / b;
    }
}

module.exports = { Calculator }