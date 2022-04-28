"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = 'Kim';
let age = 30;
let hometown = 'PyeonChone';
let fav = { singer: '새송', song: '불티' };
let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
let 회원들 = [1, '2', 3];
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function (x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('이름이 없습니다.');
    }
}
function (x) {
    if (typeof x === 'string') {
        x.toString().length;
    }
}
function isPossibleToMarry(money, house, charm) {
    let score = 0;
    score += money;
    if (house) {
        score += 500;
    }
    if (charm) {
        score += 100;
    }
    if (score >= 600) {
        return '결혼 가능';
    }
}
function addClass(x) {
    if (typeof x === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return 'none';
    }
}
