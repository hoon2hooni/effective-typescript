interface Document {
  /** Genus or species of monkey patch */ monkey: string;
}
document.monkey = "Tamarin";
export {};
declare global {
  interface Document {
    /** Genus or species of monkey patch */ monkey: string;
  }
}
document.monkey = "Tamarin"; // OK


interface MonkeyDocument extends Document {
  /** Genus or species of monkey patch */ monkey: string;
}

(document as MonkeyDocument).monkey = "Macaque";