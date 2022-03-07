function preload() {
  table = loadTable('./dataset/sentiment.csv', 'csv');
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('canvas3');
}

function draw() {
  background(220);

  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      if (j % 2 == 0) {
        if (i % 2 == 0) {
          fill(random(255), random(255), random(255));
        } else {
          fill(random(255), random(255), random(255));
        }
      } else {
        if (i % 2 == 0) {
          fill(random(255), random(255), random(255));
        } else {
          fill(random(255), random(255), random(255));
        }
      }
      //       for (let r = 0; r < table.getRowCount(); r++){
      //        x= r
      //        y = r
      //        let red = map(table.getString(r, 0), -1, 1, 0, 255);

      //        let green = map(table.getString(r, 1), -1, 1, 0, 255);
      //        let blue = map(table.getString(r, 2), -1, 1, 0, 255);
      //        print(red, green, blue)
      //        writeColor(img, x, y, red, green, blue, 255);
      // }
      rect(i * 5, j * 5, 4, 4);
    }
  }
  // noLoop();
}
