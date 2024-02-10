let highestZ = 1;

class Paper {
  holdingPaper = false;
  touchIdentifier = null;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    const moveHandler = (e) => {
      if (!this.rotating) {
        this.mouseX = e.clientX || e.touches[0].clientX;
        this.mouseY = e.clientY || e.touches[0].clientY;

        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }

      const dirX = (e.clientX || e.touches[0].clientX) - this.mouseX;
      const dirY = (e.clientY || e.touches[0].clientY) - this.mouseY;
      const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;

      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = (180 * angle) / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if (this.rotating) {
        this.rotation = degrees;
      }

      if (this.holdingPaper) {
        if (!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        // Set a higher z-index for the dragged paper
        paper.style.zIndex = highestZ + 1;
        highestZ += 2; // Increase by 2 to leave space for other content

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    };

    const startHandler = (e) => {
      if (this.holdingPaper) return;

      this.holdingPaper = true;

      // Lower z-index for other content
      document.querySelectorAll('.paper').forEach((otherPaper) => {
        otherPaper.style.zIndex = highestZ;
        highestZ += 2;
      });

      paper.style.zIndex = highestZ;
      highestZ += 1;

      if (e.touches) {
        this.touchIdentifier = e.touches[0].identifier;
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
        this.prevMouseX = e.touches[0].clientX;
        this.prevMouseY = e.touches[0].clientY;
      } else {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.prevMouseX = e.clientX;
        this.prevMouseY = e.clientY;
      }

      if (e.button === 2) {
        this.rotating = true;
      }
    };

    const endHandler = () => {
      this.holdingPaper = false;
      this.rotating = false;
      this.touchIdentifier = null;
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('touchmove', (e) => {
      if (this.touchIdentifier !== null) {
        const touch = Array.from(e.touches).find((t) => t.identifier === this.touchIdentifier);
        if (touch) {
          moveHandler(touch);
        }
      }
    });

    paper.addEventListener('mousedown', startHandler);
    paper.addEventListener('touchstart', startHandler);

    window.addEventListener('mouseup', endHandler);
    window.addEventListener('touchend', endHandler);
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});
