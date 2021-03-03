"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    //생성자를 통해 변수를 초기화 할수도 있다 
    //생성자의 파라미터에 접근제어자를 선언하면 프로퍼티로 인정한다.(멤버변수)
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.secretIdd = "boss ";
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`아이디 : ${this.id} 태스크 : ${this.task} 컴플리트${this.complete ? "complete" : "실패"} `);
        this.secretId = 12;
        const add = (number, string) => {
            return 1;
        };
    }
}
exports.default = TodoItem;
