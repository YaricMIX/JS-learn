describe('SumArray', () => {
    it('should return the sum of all numbers in the array', () => {
        const sum = sumArray([2, 3]);

        expect(sum).toEqual(5);
    });
});

describe('findMinMax', () => {
    it('should return the minimum and maximum number in the array', () => {
        const { min, max } = findMinMax([2, 3, 7, 1]);

        expect(min).toEqual(1);
        expect(max).toEqual(7);
    });
});

describe('buildPattern', () => {
    it('should return a string with a pattern of increasing number of # symbols', () => {
        const pattern = buildPattern(5);

        expect(pattern).toEqual('#\n##\n###\n####\n#####\n');
    });
});

describe('performAccumulatorOperations', () => {
    let AccumulatorClass, CancelableAccumulatorClass;

    beforeEach(() => {
        ({ AccumulatorClass, CancelableAccumulatorClass } = performAccumulatorOperations(5));
    });

describe('Accumulator', () => {
    let accumulator;

    beforeEach(() => {
        accumulator = new AccumulatorClass();
    });

    it('should increment the value by 6 when calling increment()', () => {
        accumulator.increment();
        expect(accumulator.value).toEqual(6);
    });

    it('should decrement the value by 4 when calling decrement()', () => {
        accumulator.decrement();
        expect(accumulator.value).toEqual(4);
    });
    });

    describe('CancelableAccumulator', () => {
    let cancelableAccumulator;

    beforeEach(() => {
        cancelableAccumulator = new CancelableAccumulatorClass();
    });

    it('should increment the value by 6 when calling increment()', () => {
        cancelableAccumulator.increment();
        expect(cancelableAccumulator.value).toEqual(6);
    });

    it('should decrement the value by 4 when calling decrement()', () => {
        cancelableAccumulator.decrement();
        expect(cancelableAccumulator.value).toEqual(4);
    });

    it('should reset the value to its original value when calling clear()', () => {
        cancelableAccumulator.increment();
        cancelableAccumulator.clear();
        expect(cancelableAccumulator.value).toEqual(5);
    });
    });
});

describe('toggleZoom function', function() {
    it('should call zoomOut when img has class "zoomed"', function() {

    const img = document.createElement('img');
    img.classList.add('zoomed');
    spyOn(window, 'zoomOut');

    toggleZoom(img);

    expect(window.zoomOut).toHaveBeenCalledWith(img);
    });

    it('should call zoomIn when img does not have class "zoomed"', function() {

    const img = document.createElement('img');
    spyOn(window, 'zoomIn');

    toggleZoom(img);

    expect(window.zoomIn).toHaveBeenCalledWith(img);
    });
});

describe('handleKeyPress function', () => {
    let divA, divB;

    beforeEach(() => {

    divA = document.createElement('div');
    divA.id = 'a1';
    divB = document.createElement('div');
    divB.id = 'b1';
    document.body.appendChild(divA);
    document.body.appendChild(divB);
    });

    afterEach(() => {

    document.body.removeChild(divA);
    document.body.removeChild(divB);
    });

    it('should scroll to the corresponding div if a letter key is pressed', () => {

    spyOn(divA, 'scrollIntoView');
    const event = new KeyboardEvent('keydown', {keyCode: 65});

    handleKeyPress(event);
    expect(divA.scrollIntoView).toHaveBeenCalled();
    });

    it('should not scroll if a non-letter key is pressed', () => {

    spyOn(divA, 'scrollIntoView');
    const event = new KeyboardEvent('keydown', {keyCode: 32});

    handleKeyPress(event);

    expect(divA.scrollIntoView).not.toHaveBeenCalled();
    });

    it('should not scroll if there is no corresponding div', () => {

    spyOn(divA, 'scrollIntoView');
    const event = new KeyboardEvent('keydown', {keyCode: 66});

    handleKeyPress(event);

    expect(divA.scrollIntoView).not.toHaveBeenCalled();
    });
});




