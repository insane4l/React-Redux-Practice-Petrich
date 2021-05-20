export const inc = () => ({type: 'INC'}); //"action creator" function
export const dec = () => ({type: 'DEC'});
export const rndm = () => {
    const rndmValue = Math.floor(Math.random() * 10);
    return {type: 'RNDM', rndmValue}
};