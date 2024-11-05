function getAboveAverageStudents(students) {
    const averageScore = students.reduce((sum, student) => sum + student.score, 0) / students.length;
    return students
        .filter(student => student.score > averageScore)
        .map(student => student.name);
}


const students = [
    { name: "Анна", score: 85 },
    { name: "Иван", score: 75 },
    { name: "Мария", score: 90 },
    { name: "Петр", score: 65 }
];
console.log(getAboveAverageStudents(students)); 

// Задание 2: Уникальные элементы
function getUniqueSorted(numbers) {
    return numbers
        .filter((num, index, array) => array.indexOf(num) === index)
        .sort((a, b) => a - b);
}


console.log(getUniqueSorted([3, 1, 4, 1, 5, 3, 2])); 

// Задание 3: Работа со строками
function getWordsWithA(str) {
    return str
        .split(' ')
        .filter(word => word.toLowerCase().includes('а'))
        .map(word => word.toUpperCase());
}


console.log(getWordsWithA("Мама мыла раму")); 

// Задание 4: Обработка массивов
function processStrings(strings) {
    return strings
        .filter(str => str.length >= 3)
        .map(str => str.trim())
        .join(' ');
}

console.log(processStrings(["а", "привет", "мир", "и", "солнце"])); 

// Задание 5: Подсчёт гласных
function countVowels(str) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    const result = {};
    
    str.toLowerCase().split('').forEach((char, index) => {
        if (vowels.includes(char)) {
            if (!result[char]) {
                result[char] = {
                    count: 1,
                    indices: [index]
                };
            } else {
                result[char].count++;
                result[char].indices.push(index);
            }
        }
    });
    
    return result;
}

console.log(countVowels("Привет, мир!")); 


// Задание 6: Сортировка и форматирование
function sortAndFormatPeople(people) {
    return people
        .sort((a, b) => a.age - b.age)
        .map(person => person.name)
        .join(', ');
}


const people = [
    { name: "Иван", age: 25 },
    { name: "Мария", age: 22 },
    { name: "Петр", age: 30 }
];
console.log(sortAndFormatPeople(people)); 