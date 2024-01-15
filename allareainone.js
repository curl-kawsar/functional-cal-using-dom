// Area Of Triangle Start

document.getElementById('triangle-btn').addEventListener('click', function () {
    const baseTriangle = getInputFieldValueById('triangle-base');
    const heightTriangle = getInputFieldValueById('triangle-height');
    const area = triangleArea(baseTriangle, heightTriangle);

    if (isNaN(baseTriangle) && isNaN(heightTriangle)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('triangle-area', area);
    }
});


// Area Of Triangle End

// -------------------

// Area Of Rectangle Start

document.getElementById('rectangle-btn').addEventListener('click', function () {
    const widthRectangle = getInputFieldValueById('rectangle-width');
    const heightRectangle = getInputFieldValueById('rectangle-height');
    const area = rectangleArea(widthRectangle, heightRectangle);

    if (isNaN(widthRectangle) && isNaN(heightRectangle)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('rectangle-area', area);
    }
});


// Area Of Rectangle End


// Area Of Rectangle Start Parallelogram Start

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const baseParallelogram = getInputFieldValueById('parallelogram-base');
    const heightParallelogram = getInputFieldValueById('parallelogram-height');
    const area = parallelogramArea(baseParallelogram, heightParallelogram);

    if (isNaN(baseParallelogram) && isNaN(heightParallelogram)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('parallelogram-area', area);
    }
});



// Area Of Rectangle Start Parallelogram End


// Rhombus Start

document.getElementById('rhombus-btn').addEventListener('click', function () {
    const d1Box = getInputFieldValueById('d1-box');
    const d2Box = getInputFieldValueById('d2-box');
    const area = rhombusArea(d1Box, d2Box);

    if (isNaN(d1Box) && isNaN(d2Box)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('rhombus-area', area);
    }
});

// Rhombus End



// Pentagone Start

document.getElementById('pen-btn').addEventListener('click', function () {
    const penHeight = getInputFieldValueById('pen-height');
    const penBase = getInputFieldValueById('pen-base');
    const area = pentagoneArea(penHeight, penBase);

    if (isNaN(penHeight) && isNaN(penBase)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('pen-area', area);
    }
});

// Pentagone End

// Ellipse Start

document.getElementById('ep-btn').addEventListener('click', function () {
    const epa = getInputFieldValueById('ep-a');
    const epb = getInputFieldValueById('ep-b');
    const area = elipseArea(epa, epb);

    if (isNaN(epa) && isNaN(epb)) {
        alert("Please Enter Number Only")
    }
    else {
        setTextElementById('ep-area', area);
    }
});

// Ellipse End