import { type } from "@testing-library/user-event/dist/type";

let name: string = 'Kim';
let age: number = 30;
let hometown: string = 'PyeonChone';

let fav: { singer: string; song: string } = { singer: '새송', song: '불티' };

let project: { member: string[]; days: number; started: boolean } = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
};

let 회원들: (number | string)[] = [1, '2', 3];

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John',
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];


function (x? :string) {
  if(x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('이름이 없습니다.')
  }
}

function (x : number | string) : number {
  if (typeof x === 'string') {
  x.toString().length
  }
}

function isPossibleToMarry(money: number, house:boolean, charm:string) : string | void {
  let score :number = 0;
  score += money
  if(house) {
    score += 500;
  }
  if(charm) {
    score += 100;
  }
  if(score >= 600) {
    return '결혼 가능'
  }
}

function addClass (x :{subject:string | string[]}) {
  if(typeof x === 'string') {
    return x.subject
  } else if (  Array.isArray(x.subject)) {
    return x.subject[x.subject.length-1]
  } else {
    return 'none'
  }

}