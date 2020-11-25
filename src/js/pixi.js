// const canvas = document.querySelector('.canvas');
// const width = canvas.clientWidth;
// const height = canvas.clientHeight;
// const map = {
//   cols: Math.ceil(width / 24) + 1,
//   rows: Math.ceil(height / 24) + 1,
//   tsize: 24,
//   get tiles() {
//     return Array.from({ length: this.cols * this.rows }, () =>
//       Math.floor(Math.random() * 2),
//     );
//   },
//   getTile(col, row) {
//     return this.tiles[row * map.cols + col];
//   },
// };

// const animate = (tile) => {
//   tile.addEventListener('mouseover', ({ target }) => {
//     target.setAttribute('style', 'opacity: 1');
//   });
//   tile.addEventListener('mouseout', ({ target }) => {
//     if (target.style.opacity) {
//       let opacity = 1;
//       const fadeOut = setInterval(() => {
//         opacity -= 0.02;
//         target.setAttribute('style', `opacity: ${opacity}`);
//       }, 10);
//       if (!opacity) {
//         clearInterval(fadeOut);
//       }
//     }
//   });
// };

// for (let c = 1; c < map.cols; c += 1) {
//   for (let r = 1; r < map.rows; r += 1) {
//     const tile = document.createElement('div');
//     tile.classList.add('tile', `tile-${map.getTile(c, r)}`);
//     animate(tile);
//     canvas.appendChild(tile);
//   }
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const tiles = document.querySelectorAll('.tile');

//   if (tiles) {
//     setInterval(() => {
//       const tile1 = tiles[Math.floor(Math.random() * (tiles.length - 1))];
//       const tile2 = tiles[Math.floor(Math.random() * (tiles.length - 1))];
//       const tile3 = tiles[Math.floor(Math.random() * (tiles.length - 1))];
//       const tile4 = tiles[Math.floor(Math.random() * (tiles.length - 1))];
//       const tile5 = tiles[Math.floor(Math.random() * (tiles.length - 1))];
//       let opacity = 1;
//       const fadeOut = setInterval(() => {
//         opacity -= 0.02;
//         tile1.setAttribute('style', `opacity: ${opacity}`);
//         tile2.setAttribute('style', `opacity: ${opacity}`);
//         tile3.setAttribute('style', `opacity: ${opacity}`);
//         tile4.setAttribute('style', `opacity: ${opacity}`);
//         tile5.setAttribute('style', `opacity: ${opacity}`);
//       }, 10);
//       if (!opacity) {
//         clearInterval(fadeOut);
//       }
//     }, 500);
//   }
// });
