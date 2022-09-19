//৮. একটা array এর মধ্যে অনেকগুলা ইংরেজি জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম (স্ট্রিং) আছে। জাভাস্ক্রিপ্ট রিলেটেড বইয়ের নাম না জানলে, গুগলে সার্চ দিয়ে বের করো। তারপর একটা লুপ চালিয়ে দেখো কোন কোন বইয়ের নামের মধ্যে "javascript" আছে। তাহলে সেই বইগুলার নাম আরেকটা array এর মধ্যে রাখবে। আর হ্যাঁ, যখন javascript আছে কিনা চেক করবে তখন খেয়াল করবে বড়হাতের নাকি ছোট হাতের অক্ষর সেটা বাদ দিয়ে চেক করতে। অর্থাৎ কেইস ইনসেন্সিটিভ হবে। 
const books = [
    ' A Smarter Way to Learn JavaScript',
    ' Learn JavaScript VISUALLY',
    'JavaScript: The Definitive Guide',
    'You Don’t Know JS',
    ' Beginning JavaScript',
    'JavaScript & JQuery: Interactive Front-End Web Development',
    'JavaScript: The Good Parts',
    'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
    'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
    ' High-Performance Browser Networking',
    'JavaScript Allongé, the “Six” Edition',
    'Composing Software',
    ' JavaScript for Kids: A Playful Introduction to Programming',
    ' JavaScript For Kids For Dummies',
    ' Eloquent JavaScript: A Modern Introduction to Programming',
    'JavaScript Enlightenment',
    'Learning JavaScript Design Patterns',
    'The JavaScript Beginner’s Handbook',
    'JavaScript Notes for Professionals'
];
let scriptBooks = [];
for (const book of books) {

    if (book.toLowerCase().includes('javascript'.toLowerCase())) {
        scriptBooks.push(book);
    }
}
// console.log(scriptBooks);
// console.log(scriptBooks.length);
// console.log(books.length);

//৯. অনেকগুলা সংখ্যাওয়ালা একটা array নাও। তারপর সেই array কে sort করো। sort হবে ছোট থেকে বড় সংখ্যার সিরিয়াল অনুসারে। 
const numbers = [2, 3, 44, 56, 78, 98, 52, 11, 5, 71, 112, 345, 890, 645];
const sortedNumber = numbers.sort(function (a, b) {
    return a - b;
})
console.log(numbers);