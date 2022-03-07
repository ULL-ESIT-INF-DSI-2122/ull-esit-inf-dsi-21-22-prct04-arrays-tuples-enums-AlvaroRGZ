function mediaFilter(img: number[][]): number[][]{

  img.forEach(col => {
    col.forEach(e => {
      e = img[col]
    });
  });

}