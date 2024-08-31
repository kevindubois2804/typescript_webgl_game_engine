import { gl, GLUtilities } from './webgl';

/**
 * The main game engine class.
 */
export class Engine {
  private _canvas: HTMLCanvasElement;

  /**
   * Creates a new engine.
   */
  public constructor() {}

  /**
   * Starts up this engine.
   */
  public start(): void {
    // ...we eventually perform some startup code

    // setup the canvas
    this._canvas = GLUtilities.initialize();

    // clear the screen to black
    gl.clearColor(0, 0, 0, 1);

    // ...and at the very bottom we are gonna call this.loop
    this.loop();
  }

  private loop(): void {
    // we want to clear the color buffer in between frames

    // we want to request an animation frame at the end of every loop that we do. So
    // by the time we do our basic game looping logic up to this area and by the time
    // we get to the bottom frame we want to go ahead and request the next frame from the browser
    requestAnimationFrame(this.loop.bind(this));
  }
}
