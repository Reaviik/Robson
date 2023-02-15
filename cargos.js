import { r0bsom } from "./login.js";

var Woner = false;
var Mod = false;
var Sub = false;
var Vip = false; 

r0bsom.on('message', (channel, tags, msg, self) => {
    if (self) { return; }
    else {
        console.log(tags["user-type"]);

          if (tags.username === 'Reavik') {
            Woner = true;

        } if (tags["user-type"] === 'mod') {
            Mod = true;

        } if (tags["user-type"] === 'sub') {
            Sub = true;

        } if (tags["user-type"] === 'vip') {
            Vip = true;

        }
    }
});
//import { Woner, Sub, Mod, Vip } from "./cargos.js";
export {Woner, Mod, Sub, Vip}