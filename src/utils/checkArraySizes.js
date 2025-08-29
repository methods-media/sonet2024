const { CDN_WAVY } = require('../constants/imageSequence');

function checkArraySizes () {
    const arrays = {
        'CDN_WAVY': CDN_WAVY
    };

    for (const [name, array] of Object.entries(arrays)) {
        const size = array.length;
        console.log(`${name} size: ${size}`);
        if (size != 72) {
            console.log(`❌ ${name} does not have exactly 72 elements!`);
        } else {
            console.log(`✅ ${name} has exactly 72 elements ${size}`);
        }
    }
}

checkArraySizes(); 