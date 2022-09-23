const fs = require("fs/promises");
const path = require("path");
const {nanoid} = require("nanoid");

const bookspath = path.join(__dirname, "books.json");

const updateBooks = async (books) => await fs.writeFile(bookspath, JSON.stringify(books, null, 2));

const getAll = async()=> {
    const data = await fs.readFile(bookspath);
    return JSON.parse(data);
}

const getById = async(id) => {
    const books = await getAll();
    const bookId = String(id)
    const result = books.find(item => item.id === bookId);
    return result || null;
}

const add = async(data) => {
    const books = await getAll();
    const newBook = {
        id: nanoid(),
        ...data,
    };
    books.push(newBook);
    await updateBooks(books);
    return newBook;
}

const updateById = async (id, body) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }
    books[index] = {id, ...body};
    await updateBooks(books);
    return books[index];
}

const removeById = async(id) => {
    const books = await getAll();
    const index = books.findIndex(item => item.id === id);
    if(index === -1){
        return null;
    }
    const [result] = books.splice(index, 1);
    await updateBooks(books);
    return result;
}

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
}