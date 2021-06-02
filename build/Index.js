"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Data_1 = require("./Data");
const TodoCollection_1 = __importDefault(require("./TodoCollection"));
const TodoItem_1 = __importDefault(require("./TodoItem"));
const sampleTodos = Data_1.data.map((item, index) => new TodoItem_1.default(item.id, item.task, item.complete));
const myTodoCollection = new TodoCollection_1.default("YJJ", sampleTodos);
myTodoCollection.getTodoById(1)?.printDetails();
myTodoCollection.addTodo("집에가기");
myTodoCollection.markComplete(3, true);
myTodoCollection.todoItems.map((item) => item.printDetails());
console.log(`${myTodoCollection.userName}`);
console.log("dasdgdsadasdads");
