function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
}

alert(getArea(10, 20, 'sq ft'));