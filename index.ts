import { pow, oldpow } from "./actions/pow";

const a = '44324234234234365498678562423423423';
const k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';

console.time();
console.log(pow('2', '3'));
console.timeEnd();
console.time();
console.log(pow('2', '3'));
console.timeEnd();
console.time();
console.log(pow('2', '3'));
console.timeEnd();
console.time();
console.log(pow('2', '3'));
console.timeEnd();
console.time();
console.log(pow('2', '3'));
console.timeEnd();

console.time('for-loop new pow');
let j = 0;
while (j <= 17) {
  for (let x = 0; x <= 106; ++x) {
    const value = pow('2', (x * 289).toString());
  }
  j++;
}
console.timeEnd('for-loop new pow');

console.time('for-loop old pow');
let y = 0;
while (y <= 17) {
  for (let x = 0; x <= 106; ++x) {
    const value = oldpow('2', (x * 289).toString());
  }
  y++;
}
console.timeEnd('for-loop old pow');