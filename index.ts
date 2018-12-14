import { multiply } from "./actions/multiply";
import { subtractByModule } from "./actions/subtract";
import { addByModule } from "./actions/add";
import { divide, floorDevideBySubstract, isDividentEqMoreDivider } from "./actions/divide";

const k = '960939379918958884971672962127852754715004339660129306651505519271702802395266424689642842174350718121267153782770623355993237280874144307891325963941337723487857735749823926629715517173716995165232890538221612403238855866184013235585136048828693337902491454229288667081096184496091705183454067827731551705405381627380967602565625016981482083418783163849115590225610003652351370343874461848378737238198224849863465033159410054974700593138339226497249461751545728366702369745461014655997933798537483143786841806593422227898388722980000748404719';
const a = '44324234234234365498678562423423423';
const b = '2543342342342312365789';

/*
console.log(a);
console.time('multiply');
console.log(multiply(k, multiply(k, k)));
console.timeEnd('multiply');
console.time('subtract');
console.log(subtractByModule(k, '3321312312321323123'));
console.timeEnd('subtract');
console.time('add');
console.log(addByModule(k, k));
console.timeEnd('add');
*/

console.time('divide');
console.log(floorDevideBySubstract('99', '2')); //5
console.log(floorDevideBySubstract('2', '0')); //Infinity
console.log(floorDevideBySubstract('2', '1')); //2
console.log(floorDevideBySubstract('2', '2')); //1
console.log(floorDevideBySubstract('3', '2')); //1
console.log(floorDevideBySubstract('4', '1')); //4
console.log(floorDevideBySubstract('99', '2')); //5
console.log(floorDevideBySubstract('399', '2'));
console.log(floorDevideBySubstract('400', '2'));
console.log(floorDevideBySubstract('401', '2'));
console.log(floorDevideBySubstract('402', '2'));
console.timeEnd('divide');

console.log(isDividentEqMoreDivider('97', '2'));