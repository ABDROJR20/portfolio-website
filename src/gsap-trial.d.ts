declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(target: string | Element | (string | Element)[], vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
    split(vars: any): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static get(): ScrollSmoother;
    scrollTop(value: number): void;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value: boolean): void;
    refresh(soft?: boolean): void;
    kill(): void;
  }
}
