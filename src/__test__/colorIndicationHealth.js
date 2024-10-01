/* eslint-disable no-undef */
import colorIndicationHealth from "../color_indication_health";

test.each([
    [{ name: 'Маг', health: 90 }, `healthy`],
    [{ name: 'мечник', health: 30 }, `wounded`],
    [{ name: 'лучник', health: 10 }, `critical`],
    ['no', undefined],
])('testing colorIndicationHealth with %s unit and "%s" expected', (unit, expected) => {
    const result = colorIndicationHealth(unit);
    expect(result).toBe(expected);
})
