interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "123123",
  size: {
    width: 23,
    height: 23,
  },
  color: "#cccccc",
};

const rect2: Rect = {
  id: "121212",
  size: {
    width: 32,
    height: 32,
  },
};

rect2.color = "black";

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ====================
interface Rect2 extends Rect {
  getArea: () => number;
}

const rect5: Rect2 = {
  id: "123",
  size: {
    width: 32,
    height: 32,
  },
  getArea(): number {
    return this.size.width * this.size.height;
  },
};

interface IClock {
  time: Date;
  setTime(dage: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// =======================
// Множественное типизирование
interface Styles {
  [key: string]: string | number,
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: 20,
}