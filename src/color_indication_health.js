export default function colorIndicationHealth(unit) {
    if (unit.health <= 0) {
        return undefined;
    }
    if (unit.health > 50) {
        return 'healthy';
    };
    if (50 >= unit.health && unit.health >= 15) {
        return 'wounded'
    };
    if (15 > unit.health) {
        return 'critical'
    };
}


