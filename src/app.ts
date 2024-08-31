// we can see the namespace as a sort of container for classes, global const, etc
namespace Awesome {
  export class Engine {
    private _count: number = 0;

    public constructor() {}

    public start(): void {
      // we eventually perform some startup code...

      // ...and at the very bottom we are gonna call this.loop
      this.loop();
    }

    private loop(): void {
      this._count++;

      document.title = this._count.toString();

      // we want to request an animation frame at the end of every loop that we do. So
      // by the time we do our basic game looping logic up to this area and by the time
      // we get to the bottom frame we want to go ahead and request the next frame from the browser
      requestAnimationFrame(this.loop.bind(this));
    }
  }
}

window.onload = function () {
  let e = new Awesome.Engine();

  e.start();

  document.body.innerHTML += 'Foo';
};
