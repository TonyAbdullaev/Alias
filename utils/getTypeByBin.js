// add more bins and their rules
const map = {
    '424215': (typeNum) => {
        if (typeNum === 0) return 'Visa Other';
        return (typeNum > 0 && typeNum < 7) ? 'Visa Classic' : 'Visa Gold';
    }
}

export default (bin, typeNum) => !map[bin] ? 'Visa Other' : map[bin](typeNum); // if there is no such bin in the map, then it's Other card