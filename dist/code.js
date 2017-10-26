"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var States;
(function (States) {
    const statesData = require('./data.json');
    const tupled = statesData.map(d => [d.abbr.toLowerCase(), d.name]);
    const abbr2Name = statesData.reduce((map, data) => {
        map[data.abbr.toLowerCase()] = data.name;
        return map;
    }, {});
    const name2Abbr = statesData.reduce((map, data) => {
        map[data.name.toLowerCase()] = data.abbr;
        return map;
    }, {});
    function getName(abbr) {
        const lcAbbr = abbr.toLowerCase();
        return abbr2Name[lcAbbr];
    }
    States.getName = getName;
    function getAbbr(name) {
        const lcName = name.toLowerCase();
        return name2Abbr[lcName];
    }
    States.getAbbr = getAbbr;
})(States = exports.States || (exports.States = {}));
