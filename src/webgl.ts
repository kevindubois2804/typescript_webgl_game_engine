// entrypoint into WEbGL. We export to make it globally accessible through oour app
/**
 * The WebGL rendering context
 */
export var gl: WebGLRenderingContext;

/**
 * Responsible for setting up a WebGL rendering context
 */
export class GLUtilities {
  /**
   * Initializes WebGL, potentially using the canvas with an assigned id matching the provided if it is defined
   * @param {string} [elementId] the id of the canvas element to use
   * @returns {HTMLCanvasElement} this method returns a canvas element
   */
  public static initialize(elementId?: string): HTMLCanvasElement {
    let canvas: HTMLCanvasElement;

    if (elementId !== undefined) {
      canvas = document.getElementById(elementId) as HTMLCanvasElement;
      if (canvas === undefined) throw new Error(`Cannot find a canvas element name ${elementId}`);
    } else {
      canvas = document.createElement('canvas') as HTMLCanvasElement;
      document.body.appendChild(canvas);
    }

    gl = canvas.getContext('webgl') as WebGL2RenderingContext;
    if (gl === undefined) throw new Error(`Unable to initialize WebGL`);

    return canvas;
  }
}
